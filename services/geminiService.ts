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

  // Format Calendar for context
  let calendarContext = "";
  if (schoolData.academicCalendar && schoolData.academicCalendar.length > 0) {
    calendarContext = "ACUAN KALENDER PENDIDIKAN JAWA BARAT 2025/2026 (WAJIB DIGUNAKAN UNTUK PENANGGALAN CATATAN/DOKUMEN):\n";
    calendarContext += JSON.stringify(schoolData.academicCalendar, null, 2);
  }

  const prompt = `
    You are a professional school administration consultant in Indonesia.
    
    Task: Populate the 'Catatan' (Notes) and verify 'Checklist' items for a PKKS (Performance Appraisal of School Principals) Management Component instrument based on the provided school details.
    
    School Name: ${schoolData.name}
    Principal: ${schoolData.principal}
    Vision: ${schoolData.vision}
    Mission: ${schoolData.mission}

    ${calendarContext}

    I will provide the list of criteria IDs and Checklist Items.
    For each row, generate a realistic 'Catatan' that provides specific context or hypothetical document names (e.g., "Notulen Rapat Tanggal 15 Juli 2025", "SK Kepala Sekolah No. 800/...") that align with the school's vision and mission.
    
    IMPORTANT RULES FOR DATES:
    1. All dates mentioned in the notes MUST be in the year 2025 or 2026, consistent with the Academic Year 2025/2026.
    2. Start of Academic Year is 14 July 2025. Do not generate dates for meetings/activities before this date for the new academic year context.
    3. CHECK THE CALENDAR CONTEXT. Do not schedule activities on dates marked as 'HOLIDAY' (Libur).
    4. Meetings usually happen on weekdays.
    5. Supervision schedules should be after the first week of school (MPLS).
    
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
  
  // Format daftar guru untuk prompt
  const teachersList = schoolData.teachers && schoolData.teachers.length > 0
    ? schoolData.teachers.map((t, i) => `${i + 1}. ${t.name} (NUPTK: ${t.nuptk || '-'})`).join('\n')
    : "Data guru belum tersedia.";

  // Format data jadwal untuk prompt (Jika ada)
  let scheduleContext = "";
  if (schoolData.classSchedules && schoolData.classSchedules.length > 0) {
    scheduleContext = "REFERENSI JADWAL PELAJARAN DAN PEMBAGIAN TUGAS GURU:\n";
    scheduleContext += JSON.stringify(schoolData.classSchedules, null, 2);
  }

  // Format Calendar for context
  let calendarContext = "";
  if (schoolData.academicCalendar && schoolData.academicCalendar.length > 0) {
    calendarContext = "ACUAN KALENDER PENDIDIKAN JAWA BARAT 2025/2026 (WAJIB DIGUNAKAN UNTUK PENANGGALAN):\n";
    calendarContext += JSON.stringify(schoolData.academicCalendar, null, 2);
  }

  // Deteksi jika dokumen adalah dokumen perencanaan utama
  const isMajorPlanDoc = /RKJM|RKT|RKAS|Rencana Kerja|Program Kerja/i.test(docName);
  
  // Deteksi jika dokumen adalah Daftar Hadir
  const isAttendanceDoc = /Daftar Hadir|Absensi|Presensi|Peserta Rapat|Undangan/i.test(docName);

  // Deteksi jika dokumen adalah SK Pembagian Tugas
  const isDutyAssignmentDoc = /Pembagian Tugas|Jadwal Pelajaran|SK Mengajar/i.test(docName);

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
    Alamat: ${schoolData.address}, ${schoolData.subdistrict}, ${schoolData.district}, ${schoolData.regency}.
    
    Tugas: Buatkan dokumen "${docName}" untuk pemenuhan bukti fisik: "${criteriaContext}".

    DATA REFERENSI:
    1. GURU / PTK:
    ${teachersList}

    2. JADWAL PELAJARAN (Jika Relevan):
    ${scheduleContext}

    3. KALENDER PENDIDIKAN 2025/2026 (SANGAT PENTING):
    ${calendarContext}

    PERHATIAN KHUSUS TENTANG TANGGAL DAN JADWAL:
    1. Semua dokumen yang dibuat HARUS mengacu pada "ACUAN KALENDER PENDIDIKAN JAWA BARAT 2025/2026" di atas.
    2. Hari Pertama Masuk Sekolah adalah 14 Juli 2025.
    3. Masa Pengenalan Lingkungan Sekolah (MPLS) adalah 14-16 Juli 2025.
    4. Rapat Pembagian Tugas / Rapat Awal Tahun biasanya dilaksanakan SEBELUM hari pertama masuk (misal: 10-12 Juli 2025) atau PADA hari-hari pertama masuk.
    5. Kegiatan Pembelajaran Efektif dimulai setelah MPLS.
    6. JANGAN MENJADWALKAN RAPAT ATAU KEGIATAN DI HARI LIBUR NASIONAL ATAU CUTI BERSAMA yang tercantum di Kalender (Tanggal Merah).
    7. Sesuaikan tanggal surat/dokumen dengan konteks kegiatan (Contoh: Undangan Rapat Kenaikan Kelas harus di bulan Juni 2026, Rapat Awal Tahun di Juli 2025).

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
       Isi KOP: YAYASAN PENDIDIKAN ISLAM PONDOK MODERN AL-GHOZALI <br> SMA ISLAM AL-GHOZALI.
    6. Gunakan Tahun Pelajaran 2025/2026.

    INSTRUKSI KHUSUS DAFTAR HADIR/LAMPIRAN PESERTA:
    ${isAttendanceDoc ? `
    - Dokumen ini adalah DAFTAR HADIR / ABSENSI / LAMPIRAN PESERTA RAPAT.
    - ANDA WAJIB MEMASUKKAN NAMA-NAMA GURU DARI "DATA REFERENSI GURU" DI ATAS KE DALAM TABEL.
    - JANGAN BIARKAN TABEL KOSONG atau hanya berisi titik-titik.
    - Buat tabel dengan kolom minimal: No, Nama Lengkap, NUPTK, Jabatan (Tulis 'Guru'), Tanda Tangan.
    - Masukkan minimal 10-20 nama guru dari daftar tersebut.` : 
    `- Jika dokumen ini berupa SK TIM atau Notulen yang memerlukan daftar peserta, WAJIB ambil nama dari "DATA REFERENSI GURU" di atas. Jangan gunakan nama fiktif "Guru A".`}

    INSTRUKSI KHUSUS SK PEMBAGIAN TUGAS / JADWAL:
    ${isDutyAssignmentDoc ? `
    - Gunakan data dari "REFERENSI JADWAL PELAJARAN" di atas untuk mengisi lampiran pembagian tugas.
    - Buat Lampiran I: Pembagian Tugas Mengajar (Tabel: No, Nama Guru, Mata Pelajaran, Kelas, Jumlah Jam).
    - Pastikan Nama Guru dan Mata Pelajaran sesuai dengan data yang diberikan.
    - Buat Lampiran II: Jadwal Pelajaran (Format matriks sederhana atau daftar per kelas).` : ''}

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