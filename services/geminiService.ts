import { GoogleGenAI, Type } from "@google/genai";
import { SchoolData, InstrumentRow, AiResponse } from '../types';

export const generateInstrumentContent = async (
  schoolData: SchoolData, 
  currentRows: InstrumentRow[]
): Promise<AiResponse | null> => {
  if (!process.env.API_KEY) {
    console.error("API Key not found");
    return null;
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    You are a professional school administration consultant in Indonesia.
    
    Task: Populate the 'Catatan' (Notes) and verify 'Checklist' items for a PKKS (Performance Appraisal of School Principals) Management Component instrument based on the provided school details.
    
    School Name: ${schoolData.name}
    Principal: ${schoolData.principal}
    Vision: ${schoolData.vision}
    Mission: ${schoolData.mission}

    I will provide the list of criteria IDs and Checklist Items.
    For each row, generate a realistic 'Catatan' that provides specific context or hypothetical document names (e.g., "Notulen Rapat Tanggal 15 Juli 2025", "SK Kepala Sekolah No. 800/...") that align with the school's vision and mission.
    
    IMPORTANT: All dates mentioned in the notes MUST be in the year 2025, starting from July 2025 onwards (Academic Year 2025/2026).
    
    Also, assume the school is well-prepared and check most relevant checklist items (return their indices).
    Set the score to 2 (maximum) if the evidence is strong.

    Input Rows (Simplified):
    ${JSON.stringify(currentRows.map(r => ({ 
      id: r.id, 
      checklistItems: r.checklistItems.map(c => c.label) 
    })))}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            rows: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.INTEGER },
                  catatan: { type: Type.STRING },
                  checklistIndices: { 
                    type: Type.ARRAY,
                    items: { type: Type.INTEGER }
                  },
                  skor: { type: Type.NUMBER }
                },
                required: ["id", "catatan", "checklistIndices", "skor"]
              }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AiResponse;
    }
    return null;
  } catch (error) {
    console.error("Gemini generation error:", error);
    throw error;
  }
};

export const generateSpecificDocument = async (
  schoolData: SchoolData,
  docName: string,
  criteriaContext: string
): Promise<string> => {
  if (!process.env.API_KEY) return "Error: API Key missing";

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Deteksi jika dokumen adalah dokumen perencanaan utama
  const isMajorPlanDoc = /RKJM|RKT|RKAS|Rencana Kerja|Program Kerja/i.test(docName);

  let structuralInstruction = "";

  if (isMajorPlanDoc) {
    structuralInstruction = `
    PERHATIAN: User meminta dokumen perencanaan komprehensif (${docName}). 
    Ikuti STRUKTUR BAKU berikut ini secara ketat (mirip format Akreditasi/Standar Nasional):

    [HALAMAN COVER]
    - Gunakan style text-align:center.
    - Judul Besar: ${docName.toUpperCase()}
    - Periode: Tahun 2025 - 2029 (jika RKJM) atau Tahun Pelajaran 2025/2026 (jika RKT/RKAS)
    - Identitas Sekolah Lengkap (Nama: ${schoolData.name})
    ===BATAS_HALAMAN===

    [KATA PENGANTAR]
    - Formal, tanggal Juli 2025, Tanda tangan Kepala Sekolah.
    ===BATAS_HALAMAN===

    [DAFTAR ISI]
    - List bab dan sub-bab.
    ===BATAS_HALAMAN===

    <h2 style="text-align:center">BAB I : PENDAHULUAN</h2>
    A. Latar Belakang dan Sejarah Berdirinya Sekolah<br>
    B. Tujuan dan Manfaat Penyusunan ${docName}<br>
    C. Landasan Hukum (Sebutkan UU Sisdiknas No 20 Th 2003, PP SNP No 57 Th 2021, Permendikbud terkait)
    ===BATAS_HALAMAN===

    <h2 style="text-align:center">BAB II : VISI, MISI DAN TUJUAN SEKOLAH</h2>
    A. Visi Sekolah (Gunakan: ${schoolData.vision})<br>
    B. Misi Sekolah (Gunakan: ${schoolData.mission})<br>
    C. Tujuan Sekolah (Turunkan dari visi misi)
    ===BATAS_HALAMAN===

    <h2 style="text-align:center">BAB III : PROFIL SEKOLAH</h2>
    (Uraikan kondisi nyata sekolah saat ini berdasarkan 8 Standar Nasional Pendidikan: Kurikulum, Kesiswaan/Lulusan, PTK, Sarpras, Pengelolaan, Pembiayaan, Penilaian)
    ===BATAS_HALAMAN===

    <h2 style="text-align:center">BAB IV : HARAPAN</h2>
    (Uraikan kondisi yang diharapkan/target capaian di masa depan untuk aspek-aspek pada Bab III)
    ===BATAS_HALAMAN===

    <h2 style="text-align:center">BAB V : PROGRAM KERJA / STRATEGIS</h2>
    A. Sasaran<br>
    B. Program Strategis<br>
    C. Indikator Keberhasilan<br>
    D. Kegiatan<br>
    E. Jadwal Kegiatan (WAJIB FORMAT TABEL HTML)<br>
    F. Penanggung Jawab (WAJIB FORMAT TABEL HTML)
    ===BATAS_HALAMAN===

    <h2 style="text-align:center">BAB VI : RENCANA ANGGARAN (RKAS)</h2>
    (WAJIB FORMAT TABEL HTML: No | Uraian Kegiatan | Volume | Satuan | Harga Satuan | Jumlah).
    Pisahkan antara ESTIMASI PENDAPATAN dan RENCANA BELANJA.
    ===BATAS_HALAMAN===

    <h2 style="text-align:center">BAB VII : PENUTUP</h2>
    Kesimpulan dan Harapan.
    `;
  }

  const prompt = `
    Anda adalah konsultan administrasi sekolah profesional untuk sekolah: ${schoolData.name}.
    Kepala Sekolah: ${schoolData.principal}.
    
    Tugas: Buatkan dokumen "${docName}" untuk pemenuhan bukti fisik: "${criteriaContext}".

    PERHATIAN UTAMA (FORMAT HTML):
    1. OUTPUT HARUS BERUPA KODE HTML (tanpa tag <html> atau <body>, langsung isinya saja).
    2. JANGAN GUNAKAN MARKDOWN (seperti \`\`\` atau tabel |---|). Gunakan tag HTML murni.
    3. SETIAP TABEL HARUS MENGGUNAKAN FORMAT BERIKUT (Gunakan border=1 agar jelas):
       <table border="1" style="border-collapse: collapse; width: 100%; margin-bottom: 1em;">
         <thead><tr><th style="border: 1px solid black; padding: 5px; background-color: #f2f2f2;">Header</th>...</tr></thead>
         <tbody><tr><td style="border: 1px solid black; padding: 5px;">Data</td>...</tr></tbody>
       </table>
    4. Gunakan tag <h2 style="text-align:center;">, <h3>, <p>, <b>, <u>, <br>, <ol>, <ul>, <li> untuk memformat teks agar rapi.
    5. UNTUK KOP SURAT: Gunakan <div style="text-align:center; border-bottom: 3px double black; padding-bottom: 10px; margin-bottom: 20px;">.
    6. Semua tanggal dokumen harus Juli 2025 ke atas (Tahun 2025).

    ${structuralInstruction ? structuralInstruction : `
    Instruksi Umum (Dokumen Lepas):
    1. Buat layout formal (Undangan/SK/Notulen/Laporan).
    2. Jika Tabel (Daftar Hadir, Jadwal), WAJIB pakai tag <table> HTML dengan border.
    3. Jika Tanda Tangan, gunakan tabel tanpa border (border="0") untuk menata posisi kiri/kanan.
    `}

    Integrasikan Visi: ${schoolData.vision} dan Misi: ${schoolData.mission}.
    PISAHKAN setiap halaman/dokumen dengan string unik: "===BATAS_HALAMAN===" (di luar tag HTML).
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    
    let text = response.text || "Gagal menghasilkan dokumen.";
    
    // Clean up potential markdown code blocks manually
    text = text.replace(/^```[a-z]*\n?/g, '').replace(/```$/g, '');
    
    return text.trim();
  } catch (error) {
    console.error("Error generating doc:", error);
    return "<p>Terjadi kesalahan saat membuat dokumen. Silakan coba lagi.</p>";
  }
};