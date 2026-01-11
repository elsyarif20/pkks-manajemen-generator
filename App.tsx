import React, { useState, useRef } from 'react';
import { InstrumentRow, SchoolData, CheckItem } from './types';
import { INITIAL_ROWS } from './constants';
import { generateInstrumentContent, generateSpecificDocument } from './services/geminiService';
import { 
  FileText, 
  Download, 
  Wand2, 
  Printer, 
  FileSpreadsheet, 
  Image as ImageIcon,
  Save,
  Loader2,
  FilePlus,
  X,
  Copy,
  ScrollText,
  Building2,
  ChevronDown,
  ChevronUp,
  Users,
  BookOpen
} from 'lucide-react';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';

const App: React.FC = () => {
  const [rows, setRows] = useState<InstrumentRow[]>(INITIAL_ROWS);
  const [showFullForm, setShowFullForm] = useState(false);
  const [schoolData, setSchoolData] = useState<SchoolData>({
    name: "SMA ISLAM AL-GHOZALI",
    nss: "30402021xxxx",
    status: "Swasta",
    address: "Jl. Raya Permata No. 123",
    subdistrict: "Cilebut",
    district: "Sukaraja",
    regency: "Bogor",
    province: "Jawa Barat",
    postalCode: "16710",
    phone: "0251-1234567",
    fax: "-",
    email: "sma.alghozali@example.com",
    website: "www.sekolah.sch.id",
    
    principal: "ANTONI FIRDAUS,SHI,M.Pd.",
    principalDob: "Bogor, 12 Mei 1980",
    nip: "19800101 200501 1 001",
    principalRank: "Pembina Utama Muda IV/C",
    principalPosition: "Kepala Sekolah",
    principalNuks: "19023xxxxx",
    principalTmt: "10 Juli 2018",
    principalTmtThisSchool: "10 Mei 2024",
    principalEducation: "S2",
    principalSpecialization: "Manajemen Pendidikan",
    period: "Januari - Desember 2025",

    vision: "“TERWUJUDNYA PESERTA DIDIK YANG BERPRESTASI, BERAKHLAK MULIA, BERILMU PENGETAHUAN, DAN TEKNOLOGI BERDASARKAN IMAN DAN TAQWA.\"",
    mission: `a. Meningkatkan kualitas pembelajaran dan pengajaran...`, // Truncated for brevity in default
    
    assessmentDate: "2026-01-12",
    
    assessor1: "Dra. Hj. Pengawas, M.Pd",
    assessor1Nip: "19650101 199003 2 001",
    assessor1Rank: "Pembina Tk.I IV/b",
    assessor1Position: "Pengawas Sekolah Ahli Madya",
    assessor1Unit: "Cadisdikwil I Prov. Jawa Barat",
    assessor1LetterNumber: "4567/KPG/2025",

    assessor2: "Dr. Pengawas Pendamping, M.Pd",
    assessor2Nip: "19700505 199503 1 005",
    assessor2Rank: "Pembina IV/a",
    assessor2Position: "Pengawas Sekolah Ahli Madya",
    assessor2Unit: "Cadisdikwil I Prov. Jawa Barat",
    assessor2LetterNumber: "1234/KPG/2025",

    letterNumber: "800/123-Cadisdik.Wil.I/2025",
    letterDate: "2025-01-05",
    representative: "Nama Guru Senior",
    representativeNip: "19850101 201001 1 002",
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  // --- Document Generation State ---
  const [docModal, setDocModal] = useState<{isOpen: boolean, title: string, content: string, isLoading: boolean}>({
    isOpen: false, title: '', content: '', isLoading: false
  });

  // --- Handlers ---

  const handleSchoolDataChange = (field: keyof SchoolData, value: string) => {
    setSchoolData(prev => ({ ...prev, [field]: value }));
  };

  const handleRowChange = (id: number, field: keyof InstrumentRow, value: any) => {
    setRows(prev => prev.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  const toggleCheck = (rowId: number, itemIndex: number) => {
    setRows(prev => prev.map(row => {
      if (row.id === rowId) {
        const newChecks = [...row.checklistItems];
        newChecks[itemIndex] = { ...newChecks[itemIndex], checked: !newChecks[itemIndex].checked };
        return { ...row, checklistItems: newChecks };
      }
      return row;
    }));
  };

  // --- AI Generation ---

  const handleAiAutoFill = async () => {
    setIsGenerating(true);
    try {
      const result = await generateInstrumentContent(schoolData, rows);
      
      if (result && result.rows) {
        setRows(prev => prev.map(row => {
          const aiRow = result.rows.find(r => r.id === row.id);
          if (aiRow) {
            // Update checklist based on indices
            const newChecklist = row.checklistItems.map((item, idx) => ({
              ...item,
              checked: aiRow.checklistIndices.includes(idx)
            }));
            
            return {
              ...row,
              catatan: aiRow.catatan,
              skor: aiRow.skor,
              checklistItems: newChecklist
            };
          }
          return row;
        }));
      }
    } catch (error) {
      alert("Gagal menggunakan AI. Pastikan API Key valid.");
    } finally {
      setIsGenerating(false);
    }
  };

  // --- Cover Generator ---
  const handleGenerateCover = () => {
    const content = `
      <div style="
        font-family: Arial, sans-serif; 
        padding: 40px; 
        border: 4px double black; 
        width: 210mm;
        height: 297mm;
        margin: 0 auto;
        box-sizing: border-box; 
        display: flex; 
        flex-direction: column; 
        align-items: center;
        justify-content: space-between; 
        text-align: center;
        position: relative;
        background: white;
      ">
        
        <!-- Top Section -->
        <div style="margin-top: 40px; width: 100%; display: flex; flex-direction: column; align-items: center;">
            <!-- Logo Simulation -->
            <div style="margin-bottom: 30px; display: flex; align-items: center; justify-content: center; gap: 10px;">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Coat_of_arms_of_West_Java.svg/1200px-Coat_of_arms_of_West_Java.svg.png" 
                 alt="Logo Jabar" 
                 style="height: 100px; width: auto;">
                 
                 <div style="text-align: left; line-height: 1; font-family: Arial, sans-serif;">
                    <div style="color: #00913f; font-weight: bold; font-size: 16pt;">cadisdik I</div>
                    <div style="color: #005eb8; font-weight: bold; font-size: 26pt;">disdik</div>
                    <div style="color: #00a1e0; font-weight: bold; font-size: 16pt;">jabar</div>
                 </div>
            </div>

            <div style="margin-top: 50px;">
                <h1 style="font-size: 22pt; font-weight: bold; margin: 0 0 15px 0; color: black; letter-spacing: 1px;">PENILAIAN KINERJA KEPALA SEKOLAH</h1>
                <h2 style="font-size: 20pt; font-weight: bold; margin: 0; color: black;">TAHUN 2025</h2>
            </div>
        </div>

        <!-- Middle Section: Identity -->
        <div style="width: 80%; text-align: left; font-family: 'Courier New', Courier, monospace; font-size: 14pt; font-weight: bold;">
            <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="width: 35%; padding: 8px 0; vertical-align: top;">Nama</td>
                <td style="width: 5%; padding: 8px 0; vertical-align: top;">:</td>
                <td style="padding: 8px 0; vertical-align: top;">${schoolData.principal}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; vertical-align: top;">NIP / NUPTK</td>
                <td style="padding: 8px 0; vertical-align: top;">:</td>
                <td style="padding: 8px 0; vertical-align: top;">${schoolData.nip}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; vertical-align: top;">Pangkat / Gol.</td>
                <td style="padding: 8px 0; vertical-align: top;">:</td>
                <td style="padding: 8px 0; vertical-align: top;">${schoolData.principalRank}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; vertical-align: top;">Jabatan</td>
                <td style="padding: 8px 0; vertical-align: top;">:</td>
                <td style="padding: 8px 0; vertical-align: top;">${schoolData.principalPosition || 'Kepala Sekolah'}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; vertical-align: top;">Unit Kerja</td>
                <td style="padding: 8px 0; vertical-align: top;">:</td>
                <td style="padding: 8px 0; vertical-align: top;">${schoolData.name}</td>
            </tr>
            </table>
        </div>

        <!-- Bottom Section: Footer -->
        <div style="margin-bottom: 50px; font-weight: bold; font-size: 13pt;">
            CABANG DINAS PENDIDIKAN WILAYAH I PROVINSI JAWA BARAT<br>
            2025
        </div>

      </div>
    `;

    setDocModal({
      isOpen: true,
      title: "COVER PKKS 2025",
      content: content,
      isLoading: false
    });
  };

  // --- Identitas Sekolah Generator ---
  const handleGenerateIdentitasSekolah = () => {
    const assessmentYear = new Date(schoolData.assessmentDate).getFullYear();
    const formattedDate = new Date(schoolData.assessmentDate).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });

    const content = `
      <div style="font-family: 'Courier New', Courier, monospace; font-size: 11pt; line-height: 1.5;">
        <h3 style="text-align: center; font-weight: bold; margin: 0;">IDENTITAS SEKOLAH DAN PENILAI KINERJA KEPALA SEKOLAH</h3>
        <h3 style="text-align: center; font-weight: bold; margin: 5px 0 30px 0;">TAHUN PENILAIAN : ${assessmentYear - 1}</h3>

        <b style="display:block; margin-bottom: 5px;">A. IDENTITAS SEKOLAH</b>
        <table style="width: 100%; border-collapse: collapse; border: none;">
          <tr>
            <td style="width: 30px; vertical-align: top;">1.</td>
            <td style="width: 250px; vertical-align: top;">Nama Sekolah</td>
            <td style="width: 10px; vertical-align: top;">:</td>
            <td style="vertical-align: top;">${schoolData.name}</td>
          </tr>
          <tr>
            <td style="vertical-align: top;">2.</td>
            <td style="vertical-align: top;">NSS/NPSN</td>
            <td style="vertical-align: top;">:</td>
            <td style="vertical-align: top;">${schoolData.nss}</td>
          </tr>
          <tr>
            <td style="vertical-align: top;">3.</td>
            <td style="vertical-align: top;">Status</td>
            <td style="vertical-align: top;">:</td>
            <td style="vertical-align: top;">${schoolData.status}</td>
          </tr>
          <tr>
            <td style="vertical-align: top;">4.</td>
            <td style="vertical-align: top;" colspan="3">Alamat Sekolah</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">a. Jalan</td>
            <td>:</td>
            <td>${schoolData.address}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">b. Desa/Kelurahan</td>
            <td>:</td>
            <td>${schoolData.subdistrict}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">c. Kecamatan</td>
            <td>:</td>
            <td>${schoolData.district}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">d. Kabupaten/Kota</td>
            <td>:</td>
            <td>${schoolData.regency}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">e. Provinsi</td>
            <td>:</td>
            <td>${schoolData.province}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">f. Kode Pos</td>
            <td>:</td>
            <td>${schoolData.postalCode}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">g. Telepon</td>
            <td>:</td>
            <td>${schoolData.phone}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">h. Faks.</td>
            <td>:</td>
            <td>${schoolData.fax}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">i. e-mail</td>
            <td>:</td>
            <td>${schoolData.email}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">j. Website</td>
            <td>:</td>
            <td><a href="http://${schoolData.website}" style="color:blue; text-decoration:underline;">${schoolData.website}</a></td>
          </tr>
          
          <tr>
            <td style="vertical-align: top;">5.</td>
            <td style="vertical-align: top;" colspan="3">Kepala Sekolah</td>
          </tr>
           <tr>
            <td></td>
            <td style="padding-left: 20px;">a. Nama</td>
            <td>:</td>
            <td>${schoolData.principal}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">b. Tempat, Tanggal Lahir</td>
            <td>:</td>
            <td>${schoolData.principalDob}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">c. NIP / NUPTK</td>
            <td>:</td>
            <td>${schoolData.nip}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">d. Pangkat/golongan</td>
            <td>:</td>
            <td>${schoolData.principalRank}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">e. Jabatan</td>
            <td>:</td>
            <td>${schoolData.principalPosition}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">f. NUKS</td>
            <td>:</td>
            <td>${schoolData.principalNuks}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">g. TMT sebagai Kepala Sekolah</td>
            <td>:</td>
            <td>${schoolData.principalTmt}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">h. TMT Kepsek di sekolah ini</td>
            <td>:</td>
            <td>${schoolData.principalTmtThisSchool}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">i. Pendidikan terakhir</td>
            <td>:</td>
            <td>${schoolData.principalEducation}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">j. Spesialisasi</td>
            <td>:</td>
            <td>${schoolData.principalSpecialization}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">k. Periode penilaian</td>
            <td>:</td>
            <td>${schoolData.period}</td>
          </tr>

          <tr>
            <td style="vertical-align: top;">6.</td>
            <td style="vertical-align: top;">Waktu Pelaksanaan</td>
            <td style="vertical-align: top;">:</td>
            <td style="vertical-align: top;">${formattedDate}</td>
          </tr>
        </table>

        <b style="display:block; margin-top: 20px; margin-bottom: 5px;">B. PENILAI</b>
        <table style="width: 100%; border-collapse: collapse; border: none;">
          <tr>
            <td style="width: 30px; vertical-align: top;">1.</td>
            <td style="width: 250px; vertical-align: top;" colspan="3">Penilai 1</td>
          </tr>
           <tr>
            <td></td>
            <td style="padding-left: 20px;">a. Nama</td>
            <td style="width: 10px;">:</td>
            <td>${schoolData.assessor1}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">b. NIP</td>
            <td>:</td>
            <td>${schoolData.assessor1Nip}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">c. Pangkat/golongan</td>
            <td>:</td>
            <td>${schoolData.assessor1Rank}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">d. Jabatan</td>
            <td>:</td>
            <td>${schoolData.assessor1Position}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">e. Unit Kerja</td>
            <td>:</td>
            <td>${schoolData.assessor1Unit}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">f. No. Surat Perintah</td>
            <td>:</td>
            <td>${schoolData.assessor1LetterNumber}</td>
          </tr>

          <tr>
            <td style="vertical-align: top; padding-top:10px;">2.</td>
            <td style="vertical-align: top; padding-top:10px;" colspan="3">Penilai 2</td>
          </tr>
           <tr>
            <td></td>
            <td style="padding-left: 20px;">a. Nama</td>
            <td style="width: 10px;">:</td>
            <td>${schoolData.assessor2}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">b. NIP</td>
            <td>:</td>
            <td>${schoolData.assessor2Nip}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">c. Pangkat/golongan</td>
            <td>:</td>
            <td>${schoolData.assessor2Rank}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">d. Jabatan</td>
            <td>:</td>
            <td>${schoolData.assessor2Position}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">e. Unit Kerja</td>
            <td>:</td>
            <td>${schoolData.assessor2Unit}</td>
          </tr>
          <tr>
            <td></td>
            <td style="padding-left: 20px;">f. No. Surat Perintah</td>
            <td>:</td>
            <td>${schoolData.assessor2LetterNumber}</td>
          </tr>
        </table>
      </div>
    `;

    setDocModal({
      isOpen: true,
      title: "IDENTITAS SEKOLAH PKKS",
      content: content,
      isLoading: false
    });
  };

  // --- Tim PKKS Generator ---
  const handleGenerateTimPKKS = () => {
    // Data Hardcoded sesuai request gambar SMA ISLAM AL-GHOZALI
    const dataTim = {
      penasehat: "Nurachman, M.Pd",
      pj: "Antoni Firdaus, M.Pd", // Bisa diambil dari schoolData.principal jika ingin dinamis, tapi hardcode sesuai gambar aman
      manajerial: [
        "Muslich Anwar, M.Pd (Ketua)",
        "Irmayanti, M.Pd",
        "Padlin, M.Pd",
        "Hj. Barirotul Choiriyah, S.E.I",
        "Hj. Saleha Mufida, M.Han",
        "Putri Dinah Oktavia, S.Pd, Gr.",
        "Liyas Syarifuddin, M.Pd",
        "Syahroni",
        "Edi Sanjaya, S.Pd",
        "Isnan Afrizal Hafidz"
      ],
      kewirausahaan: [
        "Fadillah Abidana, S.S, M.Pd, Gr (Ketua)",
        "Rizki Karomah, S.Si",
        "Rendi Ramadhan, S.Pd, Gr.",
        "Hafizd Hidayat, S.Pd, Gr.",
        "Khairil Fahmi, S.Pd",
        "Ahmad Lujaenilma, S.Kom",
        "Ade Ihsan Firdaus"
      ],
      supervisi: [
        "M a l i, S.Pd (Ketua)",
        "Ir. Rahmawati, M.Pd",
        "Doni Subiyanto, S,E",
        "Fadhilah, S.Pd",
        "Sadam Hamzah, S.H.I",
        "Muhammad Suhail, S.Pd.I",
        "Muhammad Rahul Sayyid, S.Kom"
      ]
    };

    const content = `
      <div style="font-family: 'Times New Roman', serif; padding: 20px;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 20px;">
          <h3 style="margin: 0; font-weight: bold; font-size: 14pt;">SUSUNAN PANITIA</h3>
          <h3 style="margin: 0; font-weight: bold; font-size: 14pt;">PENILAIAN KINERJA KEPALA SEKOLAH</h3>
          <h3 style="margin: 0; font-weight: bold; font-size: 14pt;">SMA ISLAM AL-GHOZALI</h3>
          <h3 style="margin: 0; font-weight: bold; font-size: 14pt;">TAHUN PELAJARAN 2025 - 2026</h3>
          <hr style="border-top: 3px double black; margin-top: 10px;">
        </div>

        <table style="width: 100%; border-collapse: collapse; border: 2px solid black; font-size: 12pt;">
          <thead>
            <tr style="background-color: #76c043; text-align: center; font-weight: bold;">
              <th style="border: 1px solid black; padding: 8px; width: 40px;">NO</th>
              <th style="border: 1px solid black; padding: 8px;">NAMA GURU</th>
              <th style="border: 1px solid black; padding: 8px; width: 150px;">KEPANITIAAN</th>
              <th style="border: 1px solid black; padding: 8px; width: 150px;">TOPIK</th>
            </tr>
          </thead>
          <tbody>
            <!-- Penasehat -->
            <tr>
              <td style="border: 1px solid black; text-align: center; padding: 5px;">1</td>
              <td style="border: 1px solid black; padding: 5px;">${dataTim.penasehat}</td>
              <td style="border: 1px solid black; text-align: center; padding: 5px;">Penasehat</td>
              <td style="border: 1px solid black; text-align: center; padding: 5px;">-</td>
            </tr>
            <!-- Penanggung Jawab -->
            <tr>
              <td style="border: 1px solid black; text-align: center; padding: 5px;">2</td>
              <td style="border: 1px solid black; padding: 5px;">${dataTim.pj}</td>
              <td style="border: 1px solid black; text-align: center; padding: 5px;">Penanggung Jawab</td>
              <td style="border: 1px solid black; text-align: center; padding: 5px;">-</td>
            </tr>

            <!-- Manajerial -->
            ${dataTim.manajerial.map((name, index) => `
              <tr>
                <td style="border: 1px solid black; text-align: center; padding: 5px;">${index + 1}</td>
                <td style="border: 1px solid black; padding: 5px; ${index === 0 ? 'font-weight: bold;' : ''}">${name}</td>
                ${index === 0 ? `<td rowspan="${dataTim.manajerial.length}" style="border: 1px solid black; text-align: center; vertical-align: middle;">Komponen 1</td>` : ''}
                ${index === 0 ? `<td rowspan="${dataTim.manajerial.length}" style="border: 1px solid black; text-align: center; vertical-align: middle;">Manajerial</td>` : ''}
              </tr>
            `).join('')}

            <!-- Kewirausahaan -->
            ${dataTim.kewirausahaan.map((name, index) => `
              <tr>
                <td style="border: 1px solid black; text-align: center; padding: 5px;">${index + 1}</td>
                <td style="border: 1px solid black; padding: 5px; ${index === 0 ? 'font-weight: bold;' : ''}">${name}</td>
                ${index === 0 ? `<td rowspan="${dataTim.kewirausahaan.length}" style="border: 1px solid black; text-align: center; vertical-align: middle;">Komponen 2</td>` : ''}
                ${index === 0 ? `<td rowspan="${dataTim.kewirausahaan.length}" style="border: 1px solid black; text-align: center; vertical-align: middle;">Kewirausahaan</td>` : ''}
              </tr>
            `).join('')}

            <!-- Supervisi -->
            ${dataTim.supervisi.map((name, index) => `
              <tr>
                <td style="border: 1px solid black; text-align: center; padding: 5px;">${index + 1}</td>
                <td style="border: 1px solid black; padding: 5px; ${index === 0 ? 'font-weight: bold;' : ''}">${name}</td>
                ${index === 0 ? `<td rowspan="${dataTim.supervisi.length}" style="border: 1px solid black; text-align: center; vertical-align: middle;">Komponen 3</td>` : ''}
                ${index === 0 ? `<td rowspan="${dataTim.supervisi.length}" style="border: 1px solid black; text-align: center; vertical-align: middle;">Supervisi</td>` : ''}
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div style="margin-top: 40px; text-align: right;">
          <p style="margin-bottom: 5px;">Gunung Sindur, 07 Januari 2025</p>
          <p style="margin-bottom: 80px;">Kepala Sekolah SMAI Al-Ghozali</p>
          
          <p style="font-weight: bold; text-decoration: underline;">${dataTim.pj}</p>
        </div>
      </div>
    `;

    setDocModal({
      isOpen: true,
      title: "TIM PKKS SMAI AL-GHOZALI 2026",
      content: content,
      isLoading: false
    });
  };

  // --- Berita Acara Generator ---
  const handleGenerateBeritaAcara = () => {
    const dateObj = new Date(schoolData.assessmentDate);
    const dayName = dateObj.toLocaleDateString('id-ID', { weekday: 'long' });
    const day = dateObj.toLocaleDateString('id-ID', { day: 'numeric' });
    const month = dateObj.toLocaleDateString('id-ID', { month: 'long' });
    const year = dateObj.toLocaleDateString('id-ID', { year: 'numeric' });
    const yearText = "Dua Ribu Dua Puluh Enam"; // Hardcoded matching the image request context or keep dynamic

    const content = `
      <div style="font-family: 'Bookman Old Style', 'Times New Roman', serif; line-height: 1.15;">
        <!-- Header -->
        <table style="width: 100%; border-bottom: 3px double black; padding-bottom: 10px; margin-bottom: 20px;">
          <tr>
            <td style="width: 15%; text-align: center; vertical-align: middle;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Coat_of_arms_of_West_Java.svg/1200px-Coat_of_arms_of_West_Java.svg.png" style="width: 80px; height: auto;" alt="Logo Jabar">
            </td>
            <td style="text-align: center; vertical-align: middle;">
              <h3 style="margin: 0; font-size: 14pt; font-weight: normal;">PEMERINTAH DAERAH PROVINSI JAWA BARAT</h3>
              <h2 style="margin: 0; font-size: 16pt; font-weight: bold;">DINAS PENDIDIKAN</h2>
              <h3 style="margin: 0; font-size: 14pt; font-weight: bold;">CABANG DINAS PENDIDIKAN WILAYAH I</h3>
              <p style="margin: 5px 0 0 0; font-size: 10pt;">Jl. Mantik, No. 9 Karadenan, Cibinong, Telp. 0251 (7508913)</p>
              <p style="margin: 0; font-size: 10pt;">Email : disdik.wil1.jabar@gmail.com</p>
              <p style="margin: 0; font-size: 10pt;">Kabupaten Bogor 16913</p>
            </td>
            <td style="width: 15%; text-align: center; vertical-align: middle;">
              <!-- Placeholder for Disdik Jabar Logo if needed, using West Java text or blank for now if not available specific URL -->
              <div style="font-weight: bold; color: #1e3a8a;">DISDIK<br>JABAR</div>
            </td>
          </tr>
        </table>

        <!-- Title -->
        <div style="text-align: center; margin-bottom: 30px;">
          <h3 style="margin: 0; font-weight: bold; text-decoration: underline;">BERITA ACARA PELAKSANAAN</h3>
          <h3 style="margin: 0; font-weight: bold;">PENILAIAN KINERJA KEPALA SEKOLAH (PKKS) TAHUN 2025</h3>
        </div>

        <!-- Body -->
        <p style="text-align: justify; text-indent: 40px; margin-bottom: 20px;">
          Pada hari ini, <b>${dayName}</b> tanggal <b>${day}</b> bulan <b>${month}</b>, tahun <b>${yearText}</b>, telah dilaksanakan <b>Penilaian Pengembangan Kinerja Kepala Sekolah</b> (<i>laporan hasil Penilaian terlampir</i>) atas nama:
        </p>

        <table style="width: 100%; margin-left: 20px; margin-bottom: 20px;">
          <tr>
            <td style="width: 200px;">Nama Kepala Sekolah</td>
            <td style="width: 10px;">:</td>
            <td style="font-weight: bold;">${schoolData.principal}</td>
          </tr>
          <tr>
            <td>NIP/NUPTK</td>
            <td>:</td>
            <td>${schoolData.nip}</td>
          </tr>
          <tr>
            <td>Nama Sekolah</td>
            <td>:</td>
            <td>${schoolData.name}</td>
          </tr>
          <tr>
            <td>Alamat Sekolah</td>
            <td>:</td>
            <td>${schoolData.address}</td>
          </tr>
          <tr>
            <td>Provinsi</td>
            <td>:</td>
            <td>${schoolData.province}</td>
          </tr>
        </table>

        <p style="text-align: justify; text-indent: 40px; margin-bottom: 10px;">
          Berdasarkan surat tugas yang dikeluarkan oleh Kepala Cabang Dinas Pendidikan Wilayah I, Nomor : <b>${schoolData.letterNumber}</b> tentang Nota Dinas Pelaksanaan Penilaian Kinerja Guru (PKG) dan Penilaian Kinerja Kepala Sekolah (PKKS) Tahun 2025 dengan Tim Penilai terdiri :
        </p>

        <table style="width: 100%; margin-left: 20px; margin-bottom: 30px;">
          <tr>
            <td style="width: 30px; vertical-align: top;">1.</td>
            <td><b>${schoolData.assessor1}</b></td>
          </tr>
          <tr>
            <td style="width: 30px; vertical-align: top;">2.</td>
            <td><b>${schoolData.assessor2}</b></td>
          </tr>
        </table>

        <p style="text-align: justify; text-indent: 40px; margin-bottom: 50px;">
          Demikian pernyataan ini dibuat dengan sesungguhnya untuk dapat dipergunakan sebagaimana mestinya.
        </p>

        <!-- Signatures -->
        <table style="width: 100%; margin-bottom: 50px;">
          <tr>
            <td style="width: 50%;"></td>
            <td style="width: 50%;">Bogor, ${day} ${month} ${year}</td>
          </tr>
          <tr>
            <td style="vertical-align: top; padding-top: 10px;">
              <b>Penilai 2,</b>
              <br><br><br><br><br>
              <u><b>${schoolData.assessor2}</b></u><br>
              NIP. ${schoolData.assessor2Nip}
            </td>
            <td style="vertical-align: top; padding-top: 10px;">
              <b>Penilai 1,</b>
              <br><br><br><br><br>
              <u><b>${schoolData.assessor1}</b></u><br>
              NIP. ${schoolData.assessor1Nip}
            </td>
          </tr>
          <tr>
            <td colspan="2" style="height: 30px;"></td>
          </tr>
          <tr>
            <td style="vertical-align: top;">
              <b>Kepala Sekolah,</b>
              <br><br><br><br><br>
              <u><b>${schoolData.principal}</b></u><br>
              NIP. ${schoolData.nip}
            </td>
            <td style="vertical-align: top;">
              <b>Perwakilan Guru/TU,</b>
              <br><br><br><br><br>
              <u><b>${schoolData.representative}</b></u><br>
              NIP. ${schoolData.representativeNip}
            </td>
          </tr>
        </table>
      </div>
    `;

    setDocModal({
      isOpen: true,
      title: "BERITA ACARA PKKS 2025",
      content: content,
      isLoading: false
    });
  };

  // --- Document Generator Handler ---

  const handleGenerateDocument = async (row: InstrumentRow, item: CheckItem) => {
    setDocModal({ isOpen: true, title: item.label, content: '', isLoading: true });
    
    try {
      const content = await generateSpecificDocument(schoolData, item.label, row.kriteria);
      setDocModal(prev => ({ ...prev, content: content, isLoading: false }));
    } catch (error) {
      setDocModal(prev => ({ ...prev, content: "<p>Gagal membuat dokumen.</p>", isLoading: false }));
    }
  };

  const handleCloseModal = () => {
    setDocModal({ isOpen: false, title: '', content: '', isLoading: false });
  };

  const handleDownloadDoc = () => {
    // Style definition for Word document: A4 size, 2cm margin, 12pt font, 1.5 line spacing
    const cssStyle = `
      <style>
        @page {
          size: 21cm 29.7cm;
          margin: 2cm 2cm 2cm 2cm;
          mso-page-orientation: portrait;
        }
        body {
          font-family: "Times New Roman", serif;
          font-size: 12pt;
          line-height: 1.5;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          border-spacing: 0;
          margin-bottom: 1em;
          font-size: 12pt;
        }
        td, th {
          /* Only apply borders if explicitly requested in content, otherwise default to none for layout tables */
          padding: 5px 10px;
          vertical-align: top;
        }
        h1, h2, h3, h4 {
          text-align: center;
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        }
      </style>
    `;

    const preHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${docModal.title}</title>
        ${cssStyle}
      </head>
      <body>
    `;
    const postHtml = "</body></html>";
    
    // Replace custom page break marker with Word-compatible page break
    let formattedContent = docModal.content
        .replace(/===BATAS_HALAMAN===/g, "<br clear=all style='mso-special-character:line-break;page-break-before:always'>");

    const html = preHtml + `<div class="WordSection1">${formattedContent}</div>` + postHtml;

    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    const downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);
    downloadLink.href = url;
    downloadLink.download = `${docModal.title.substring(0, 30).replace(/[^a-z0-9]/gi, '_')}_${schoolData.name}.doc`;
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleCopyContent = () => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = docModal.content;
    const text = tempDiv.innerText;
    navigator.clipboard.writeText(text);
    alert("Teks dokumen disalin ke clipboard! (Format tabel mungkin hilang, gunakan Download Word untuk hasil terbaik)");
  };

  // --- Exports ---

  const exportToPDF = () => {
    const doc = new jsPDF('landscape');
    
    // Header
    doc.setFontSize(16);
    doc.text(`Instrumen PKKS`, 14, 15);
    doc.setFontSize(12);
    doc.text(`Sekolah: ${schoolData.name}`, 14, 22);
    doc.text(`Kepala Sekolah: ${schoolData.principal}`, 14, 28);
    
    const tableBody = rows.map(row => [
      row.pj,
      row.id,
      row.kriteria,
      row.bukti,
      row.checklistItems.map(c => `${c.checked ? '[v]' : '[ ]'} ${c.label}`).join('\n'),
      row.catatan,
      row.skor
    ]);

    autoTable(doc, {
      startY: 35,
      head: [['PJ', 'No', 'Kriteria', 'Bukti Fisik', 'Ceklist Dokumen', 'Catatan', 'Skor']],
      body: tableBody,
      theme: 'grid',
      styles: { fontSize: 8, cellPadding: 2 },
      columnStyles: {
        0: { cellWidth: 20 }, // PJ
        1: { cellWidth: 10 }, // No
        2: { cellWidth: 50 }, // Kriteria
        3: { cellWidth: 50 }, // Bukti
        4: { cellWidth: 60 }, // Ceklist
        5: { cellWidth: 50 }, // Catatan
        6: { cellWidth: 15 }, // Skor
      }
    });

    const finalY = (doc as any).lastAutoTable.finalY + 10;
    doc.text(`Rata-rata Skor: ${(rows.reduce((a, b) => a + b.skor, 0) / rows.length).toFixed(2)}`, 14, finalY);

    doc.save(`PKKS_Manajemen_${schoolData.name.replace(/\s+/g, '_')}.pdf`);
  };

  const exportToExcel = () => {
    const wsData = [
      ['PJ', 'No', 'Kriteria', 'Bukti Teridentifikasi', 'Ceklist', 'Catatan', 'Skor'],
      ...rows.map(row => [
        row.pj,
        row.id,
        row.kriteria,
        row.bukti,
        row.checklistItems.map(c => `${c.checked ? '(v)' : '( )'} ${c.label}`).join('\r\n'),
        row.catatan,
        row.skor
      ])
    ];

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "PKKS Manajemen");
    XLSX.writeFile(wb, `PKKS_${schoolData.name.replace(/\s+/g, '_')}.xlsx`);
  };

  const exportToWordHtml = () => {
    const preHtml = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>`;
    const postHtml = "</body></html>";
    
    // Construct a simple HTML table for Word
    let htmlContent = `
      <h1>Instrumen PKKS</h1>
      <p><b>Sekolah:</b> ${schoolData.name}</p>
      <p><b>Kepala Sekolah:</b> ${schoolData.principal}</p>
      <p><b>Visi:</b> ${schoolData.vision}</p>
      <p><b>Misi:</b> <pre>${schoolData.mission}</pre></p>
      <table border="1" style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th>PJ</th><th>No</th><th>Kriteria</th><th>Bukti</th><th>Ceklist</th><th>Catatan</th><th>Skor</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(row => `
            <tr>
              <td>${row.pj}</td>
              <td>${row.id}</td>
              <td>${row.kriteria}</td>
              <td>${row.bukti}</td>
              <td>
                <ul>
                  ${row.checklistItems.map(c => `<li>${c.checked ? '&#9745;' : '&#9744;'} ${c.label}</li>`).join('')}
                </ul>
              </td>
              <td>${row.catatan}</td>
              <td>${row.skor}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <br/>
      <p><b>Total Skor:</b> ${rows.reduce((acc, curr) => acc + curr.skor, 0)}</p>
    `;

    const html = preHtml + htmlContent + postHtml;
    const blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
    const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    const downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);
    downloadLink.href = url;
    downloadLink.download = `PKKS_Manajemen_${schoolData.name}.doc`;
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const exportToImage = async () => {
    if (tableRef.current) {
      const canvas = await html2canvas(tableRef.current, { scale: 2 });
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `PKKS_Table_${schoolData.name}.png`;
      link.click();
    }
  };

  const totalScore = rows.reduce((acc, curr) => acc + curr.skor, 0);
  const avgScore = (totalScore / rows.length).toFixed(2);

  return (
    <div className="min-h-screen pb-12">
      {/* Header / Navbar */}
      <header className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <FileText size={24} />
            <h1 className="text-xl font-bold tracking-tight">Generator Instrumen PKKS</h1>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
             <button onClick={handleAiAutoFill} disabled={isGenerating} className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-md shadow-md transition-all disabled:opacity-50">
               {isGenerating ? <Loader2 className="animate-spin" size={18}/> : <Wand2 size={18} />}
               <span>Auto-Fill AI</span>
             </button>
             
             <div className="h-8 w-px bg-blue-500 mx-2 hidden md:block"></div>

             <button onClick={handleGenerateCover} className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-3 py-2 rounded text-sm transition-colors shadow-sm">
                <BookOpen size={16} /> Cover
             </button>

             <button onClick={handleGenerateIdentitasSekolah} className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded text-sm transition-colors shadow-sm">
                <Building2 size={16} /> Identitas Sekolah
             </button>

             <button onClick={handleGenerateTimPKKS} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded text-sm transition-colors shadow-sm">
                <Users size={16} /> Tim PKKS
             </button>

             <button onClick={handleGenerateBeritaAcara} className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded text-sm transition-colors shadow-sm">
                <ScrollText size={16} /> Berita Acara
             </button>

             <button onClick={exportToPDF} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-sm transition-colors">
               <Printer size={16} /> PDF
             </button>
             <button onClick={exportToExcel} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm transition-colors">
               <FileSpreadsheet size={16} /> Excel
             </button>
             <button onClick={exportToWordHtml} className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-3 py-2 rounded text-sm transition-colors">
               <Save size={16} /> Word
             </button>
             <button onClick={exportToImage} className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded text-sm transition-colors">
               <ImageIcon size={16} /> IMG
             </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        
        {/* School Input Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-blue-600 no-print">
          <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => setShowFullForm(!showFullForm)}>
             <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <div className="w-2 h-6 bg-blue-600 rounded-full"></div>
                Data Sekolah & Administrasi {showFullForm ? '(Lengkap)' : '(Ringkas)'}
             </h2>
             <button className="text-blue-600">
               {showFullForm ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kolom Kiri: Data Dasar */}
            <div className="space-y-4">
              <h3 className="font-medium text-blue-600 border-b pb-1">Identitas Sekolah</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Sekolah</label>
                <input 
                  type="text" 
                  value={schoolData.name} 
                  onChange={(e) => handleSchoolDataChange('name', e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kepala Sekolah</label>
                <input 
                  type="text" 
                  value={schoolData.principal} 
                  onChange={(e) => handleSchoolDataChange('principal', e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">NIP Kepala Sekolah</label>
                 <input 
                   type="text" 
                   value={schoolData.nip} 
                   onChange={(e) => handleSchoolDataChange('nip', e.target.value)}
                   className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                 />
              </div>
            </div>
            
            {/* Kolom Kanan: Data Dasar Penilaian */}
            <div className="space-y-4">
              <h3 className="font-medium text-blue-600 border-b pb-1">Data Penilaian</h3>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Penilai 1 (Nama)</label>
                    <input 
                      type="text" 
                      value={schoolData.assessor1} 
                      onChange={(e) => handleSchoolDataChange('assessor1', e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none"
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Penilai 2 (Nama)</label>
                    <input 
                      type="text" 
                      value={schoolData.assessor2} 
                      onChange={(e) => handleSchoolDataChange('assessor2', e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none"
                    />
                 </div>
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Pelaksanaan</label>
                  <input 
                    type="date" 
                    value={schoolData.assessmentDate} 
                    onChange={(e) => handleSchoolDataChange('assessmentDate', e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 outline-none"
                  />
               </div>
            </div>
          </div>
          
          {/* Form Lanjutan (Collapsible) */}
          {showFullForm && (
            <div className="mt-6 pt-6 border-t border-gray-200 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* DETAIL SEKOLAH */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-gray-700 bg-gray-100 p-2 rounded">A. Detail Sekolah (Lengkap)</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-500">NSS/NPSN</label>
                                <input type="text" value={schoolData.nss} onChange={(e) => handleSchoolDataChange('nss', e.target.value)} className="w-full border p-1 rounded text-sm"/>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500">Status</label>
                                <input type="text" value={schoolData.status} onChange={(e) => handleSchoolDataChange('status', e.target.value)} className="w-full border p-1 rounded text-sm"/>
                            </div>
                        </div>
                        <div>
                             <label className="block text-xs font-medium text-gray-500">Alamat (Jalan)</label>
                             <input type="text" value={schoolData.address} onChange={(e) => handleSchoolDataChange('address', e.target.value)} className="w-full border p-1 rounded text-sm"/>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-xs font-medium text-gray-500">Desa/Kelurahan</label><input type="text" value={schoolData.subdistrict} onChange={(e)=>handleSchoolDataChange('subdistrict', e.target.value)} className="w-full border p-1 rounded text-sm"/></div>
                            <div><label className="block text-xs font-medium text-gray-500">Kecamatan</label><input type="text" value={schoolData.district} onChange={(e)=>handleSchoolDataChange('district', e.target.value)} className="w-full border p-1 rounded text-sm"/></div>
                            <div><label className="block text-xs font-medium text-gray-500">Kabupaten/Kota</label><input type="text" value={schoolData.regency} onChange={(e)=>handleSchoolDataChange('regency', e.target.value)} className="w-full border p-1 rounded text-sm"/></div>
                            <div><label className="block text-xs font-medium text-gray-500">Kode Pos</label><input type="text" value={schoolData.postalCode} onChange={(e)=>handleSchoolDataChange('postalCode', e.target.value)} className="w-full border p-1 rounded text-sm"/></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-xs font-medium text-gray-500">Telepon</label><input type="text" value={schoolData.phone} onChange={(e)=>handleSchoolDataChange('phone', e.target.value)} className="w-full border p-1 rounded text-sm"/></div>
                            <div><label className="block text-xs font-medium text-gray-500">Website</label><input type="text" value={schoolData.website} onChange={(e)=>handleSchoolDataChange('website', e.target.value)} className="w-full border p-1 rounded text-sm"/></div>
                        </div>
                    </div>

                    {/* DETAIL KEPALA SEKOLAH */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-gray-700 bg-gray-100 p-2 rounded">B. Detail Kepala Sekolah</h3>
                        <div className="grid grid-cols-2 gap-4">
                             <div><label className="block text-xs font-medium text-gray-500">TTL</label><input type="text" value={schoolData.principalDob} onChange={(e)=>handleSchoolDataChange('principalDob', e.target.value)} className="w-full border p-1 rounded text-sm"/></div>
                             <div><label className="block text-xs font-medium text-gray-500">NUKS</label><input type="text" value={schoolData.principalNuks} onChange={(e)=>handleSchoolDataChange('principalNuks', e.target.value)} className="w-full border p-1 rounded text-sm"/></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                             <div><label className="block text-xs font-medium text-gray-500">Pangkat/Gol</label><input type="text" value={schoolData.principalRank} onChange={(e)=>handleSchoolDataChange('principalRank', e.target.value)} className="w-full border p-1 rounded text-sm"/></div>
                             <div><label className="block text-xs font-medium text-gray-500">Jabatan</label><input type="text" value={schoolData.principalPosition} onChange={(e)=>handleSchoolDataChange('principalPosition', e.target.value)} className="w-full border p-1 rounded text-sm"/></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                             <div><label className="block text-xs font-medium text-gray-500">TMT Kepsek</label><input type="text" value={schoolData.principalTmt} onChange={(e)=>handleSchoolDataChange('principalTmt', e.target.value)} className="w-full border p-1 rounded text-sm"/></div>
                             <div><label className="block text-xs font-medium text-gray-500">TMT Sekolah Ini</label><input type="text" value={schoolData.principalTmtThisSchool} onChange={(e)=>handleSchoolDataChange('principalTmtThisSchool', e.target.value)} className="w-full border p-1 rounded text-sm"/></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                             <div><label className="block text-xs font-medium text-gray-500">Pendidikan Terakhir</label><input type="text" value={schoolData.principalEducation} onChange={(e)=>handleSchoolDataChange('principalEducation', e.target.value)} className="w-full border p-1 rounded text-sm"/></div>
                             <div><label className="block text-xs font-medium text-gray-500">Periode Penilaian</label><input type="text" value={schoolData.period} onChange={(e)=>handleSchoolDataChange('period', e.target.value)} className="w-full border p-1 rounded text-sm"/></div>
                        </div>
                    </div>

                    {/* DETAIL PENILAI */}
                    <div className="space-y-4 md:col-span-2">
                        <h3 className="font-bold text-gray-700 bg-gray-100 p-2 rounded">C. Detail Penilai</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* PENILAI 1 */}
                            <div className="border p-3 rounded bg-blue-50/50">
                                <h4 className="font-semibold text-sm mb-2 text-blue-700">Penilai 1</h4>
                                <div className="space-y-2">
                                    <input type="text" placeholder="NIP" value={schoolData.assessor1Nip} onChange={(e)=>handleSchoolDataChange('assessor1Nip', e.target.value)} className="w-full border p-1 rounded text-sm"/>
                                    <input type="text" placeholder="Pangkat/Gol" value={schoolData.assessor1Rank} onChange={(e)=>handleSchoolDataChange('assessor1Rank', e.target.value)} className="w-full border p-1 rounded text-sm"/>
                                    <input type="text" placeholder="Jabatan" value={schoolData.assessor1Position} onChange={(e)=>handleSchoolDataChange('assessor1Position', e.target.value)} className="w-full border p-1 rounded text-sm"/>
                                    <input type="text" placeholder="Unit Kerja" value={schoolData.assessor1Unit} onChange={(e)=>handleSchoolDataChange('assessor1Unit', e.target.value)} className="w-full border p-1 rounded text-sm"/>
                                    <input type="text" placeholder="No Surat Perintah" value={schoolData.assessor1LetterNumber} onChange={(e)=>handleSchoolDataChange('assessor1LetterNumber', e.target.value)} className="w-full border p-1 rounded text-sm"/>
                                </div>
                            </div>
                            
                            {/* PENILAI 2 */}
                            <div className="border p-3 rounded bg-blue-50/50">
                                <h4 className="font-semibold text-sm mb-2 text-blue-700">Penilai 2</h4>
                                <div className="space-y-2">
                                    <input type="text" placeholder="NIP" value={schoolData.assessor2Nip} onChange={(e)=>handleSchoolDataChange('assessor2Nip', e.target.value)} className="w-full border p-1 rounded text-sm"/>
                                    <input type="text" placeholder="Pangkat/Gol" value={schoolData.assessor2Rank} onChange={(e)=>handleSchoolDataChange('assessor2Rank', e.target.value)} className="w-full border p-1 rounded text-sm"/>
                                    <input type="text" placeholder="Jabatan" value={schoolData.assessor2Position} onChange={(e)=>handleSchoolDataChange('assessor2Position', e.target.value)} className="w-full border p-1 rounded text-sm"/>
                                    <input type="text" placeholder="Unit Kerja" value={schoolData.assessor2Unit} onChange={(e)=>handleSchoolDataChange('assessor2Unit', e.target.value)} className="w-full border p-1 rounded text-sm"/>
                                    <input type="text" placeholder="No Surat Perintah" value={schoolData.assessor2LetterNumber} onChange={(e)=>handleSchoolDataChange('assessor2LetterNumber', e.target.value)} className="w-full border p-1 rounded text-sm"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Visi Misi moved to bottom of expanded form */}
                <div className="mt-6 pt-4 border-t">
                  <h3 className="font-medium text-blue-600 mb-2">Visi & Misi</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Visi</label>
                        <textarea value={schoolData.vision} onChange={(e) => handleSchoolDataChange('vision', e.target.value)} className="w-full border border-gray-300 rounded-md p-2 h-16 outline-none resize-none"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Misi</label>
                        <textarea value={schoolData.mission} onChange={(e) => handleSchoolDataChange('mission', e.target.value)} className="w-full border border-gray-300 rounded-md p-2 h-20 outline-none resize-none"/>
                    </div>
                  </div>
                </div>
            </div>
          )}
        </section>

        {/* The Instrument Table */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden" ref={tableRef}>
          <div className="p-6 bg-gray-50 border-b border-gray-200">
             <div className="text-center mb-4">
                <h2 className="text-2xl font-bold uppercase text-gray-800">Instrumen PKKS</h2>
                <p className="text-gray-600">{schoolData.name}</p>
             </div>
             
             <div className="flex justify-end gap-4 text-sm font-medium">
               <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                 Total Skor: {totalScore}
               </div>
               <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                 Rata-rata: {avgScore}
               </div>
             </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-blue-600 text-white text-sm uppercase tracking-wider">
                  <th className="p-3 border border-blue-700 w-24">PJ</th>
                  <th className="p-3 border border-blue-700 w-12 text-center">No</th>
                  <th className="p-3 border border-blue-700 w-1/4">Kriteria</th>
                  <th className="p-3 border border-blue-700 w-1/5">Bukti Teridentifikasi</th>
                  <th className="p-3 border border-blue-700 w-1/5">Ceklist Dokumen</th>
                  <th className="p-3 border border-blue-700 w-1/5">Catatan</th>
                  <th className="p-3 border border-blue-700 w-16 text-center">Skor</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800">
                {rows.map((row) => (
                  <tr key={row.id} className="hover:bg-blue-50 transition-colors even:bg-slate-50">
                    {/* PJ */}
                    <td className="p-3 border border-gray-300 font-medium text-center bg-yellow-100/30">
                      <input 
                        type="text" 
                        value={row.pj} 
                        onChange={(e) => handleRowChange(row.id, 'pj', e.target.value)}
                        className="w-full bg-transparent text-center outline-none focus:border-b focus:border-blue-500"
                      />
                    </td>
                    
                    {/* No */}
                    <td className="p-3 border border-gray-300 text-center font-semibold">{row.id}</td>
                    
                    {/* Kriteria */}
                    <td className="p-3 border border-gray-300 align-top">
                       {row.kriteria}
                    </td>

                    {/* Bukti */}
                    <td className="p-3 border border-gray-300 align-top text-gray-600 italic text-xs">
                      {row.bukti}
                    </td>

                    {/* Checklist */}
                    <td className="p-3 border border-gray-300 align-top bg-green-50/50">
                      <div className="space-y-3">
                        {row.checklistItems.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between gap-2 p-1.5 bg-white/60 rounded hover:bg-white transition-colors border border-transparent hover:border-blue-200">
                            <label className="flex items-start gap-2 cursor-pointer flex-1">
                              <input 
                                type="checkbox" 
                                checked={item.checked} 
                                onChange={() => toggleCheck(row.id, idx)}
                                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <span className={`text-xs ${item.checked ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                                {item.label}
                              </span>
                            </label>
                            
                            <button 
                                onClick={() => handleGenerateDocument(row, item)}
                                title="Buat Dokumen Ini"
                                className="p-1.5 bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-600 rounded-md transition-all shadow-sm flex-shrink-0"
                            >
                                <FilePlus size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </td>

                    {/* Catatan */}
                    <td className="p-3 border border-gray-300 align-top">
                      <textarea 
                        value={row.catatan}
                        onChange={(e) => handleRowChange(row.id, 'catatan', e.target.value)}
                        className="w-full h-full min-h-[100px] text-xs p-2 border border-transparent hover:border-gray-200 focus:border-blue-500 rounded outline-none resize-none bg-transparent focus:bg-white transition-all"
                        placeholder="Klik untuk tambah catatan..."
                      />
                    </td>

                    {/* Skor */}
                    <td className="p-3 border border-gray-300 text-center align-top bg-yellow-100/20">
                      <select 
                        value={row.skor} 
                        onChange={(e) => handleRowChange(row.id, 'skor', Number(e.target.value))}
                        className="bg-transparent font-bold text-center outline-none w-full cursor-pointer"
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-end">
            <div className="text-right">
              <p className="mb-8 font-medium">Kepala Sekolah,</p>
              <p className="font-bold underline mt-12">{schoolData.principal}</p>
              <p className="text-sm text-gray-600">NIP. {schoolData.nip || '.......................'}</p>
            </div>
          </div>
        </div>

        {/* Document Preview Modal */}
        {docModal.isOpen && (
          <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 print:hidden backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-gray-200 animate-in fade-in zoom-in duration-200">
               {/* Header */}
               <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg">
                 <div className="flex items-center gap-2 text-blue-800">
                   <FileText size={20} />
                   <h3 className="font-bold text-lg">{docModal.title || 'Dokumen Baru'}</h3>
                 </div>
                 <button onClick={handleCloseModal} className="text-gray-500 hover:text-red-500 transition-colors p-1 hover:bg-gray-200 rounded-full">
                   <X size={20} />
                 </button>
               </div>

               {/* Body */}
               <div className="flex-1 overflow-auto p-6 bg-gray-100">
                  {docModal.isLoading ? (
                    <div className="flex flex-col items-center justify-center h-64 gap-4 text-gray-500">
                      <Loader2 className="animate-spin text-blue-600" size={48} />
                      <p className="font-medium animate-pulse">Sedang membuat dokumen formal...</p>
                    </div>
                  ) : (
                    <div className="bg-white shadow-sm p-8 min-h-[500px] border border-gray-200 mx-auto overflow-y-auto"
                         style={{ 
                           width: '210mm', 
                           minHeight: '297mm', 
                           padding: '20mm', // 2cm
                           fontFamily: '"Times New Roman", Times, serif',
                           fontSize: '12pt',
                           lineHeight: '1.5'
                         }}>
                       <div 
                         className="prose max-w-none font-serif text-sm"
                         style={{ 
                            fontFamily: '"Times New Roman", Times, serif',
                            fontSize: '12pt',
                            lineHeight: '1.5'
                          }}
                         dangerouslySetInnerHTML={{ __html: docModal.content }}
                       />
                    </div>
                  )}
               </div>

               {/* Footer */}
               <div className="p-4 border-t border-gray-200 bg-white flex justify-end gap-3 rounded-b-lg">
                 <button onClick={handleCloseModal} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded font-medium text-sm">
                   Tutup
                 </button>
                 {!docModal.isLoading && (
                   <>
                     <button onClick={handleCopyContent} className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded font-medium text-sm flex items-center gap-2">
                       <Copy size={16} /> Salin Teks
                     </button>
                     <button onClick={handleDownloadDoc} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium text-sm flex items-center gap-2">
                       <Download size={16} /> Download Word
                     </button>
                   </>
                 )}
               </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default App;