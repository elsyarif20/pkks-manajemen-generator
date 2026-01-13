export interface CheckItem {
  label: string;
  checked: boolean;
}

export interface InstrumentRow {
  id: number;
  pj: string; // Penanggung Jawab
  kriteria: string;
  bukti: string;
  checklistItems: CheckItem[];
  catatan: string; // Free text notes
  skor: number;
}

export interface Teacher {
  id: number;
  name: string;
  nuptk: string;
  gender: 'L' | 'P';
}

export interface ScheduleItem {
  subject: string;
  teacher: string;
  hours: number;
}

export interface ClassSchedule {
  className: string;
  items: ScheduleItem[];
}

export interface CalendarEvent {
  date: string; // e.g., "14 Juli 2025" or range "14-16 Juli 2025"
  description: string;
  type: 'HOLIDAY' | 'ACADEMIC' | 'EXAM' | 'REPORT';
}

export interface SchoolData {
  name: string;
  nss: string; // New: NSS/NPSN
  status: string; // New: Status Sekolah (Swasta/Negeri)
  address: string; // Jalan
  subdistrict: string; // New: Desa/Kelurahan
  district: string; // New: Kecamatan
  regency: string; // New: Kabupaten/Kota
  province: string;
  postalCode: string; // New: Kode Pos
  phone: string; // New: Telepon
  fax: string; // New: Faks
  email: string; // New
  website: string; // New

  principal: string;
  principalDob: string; // New: Tempat, Tanggal Lahir
  nip: string; 
  principalRank: string; // New: Pangkat/Golongan
  principalPosition: string; // New: Jabatan
  principalNuks: string; // New: NUKS
  principalTmt: string; // New: TMT sebagai Kepsek
  principalTmtThisSchool: string; // New: TMT di sekolah ini
  principalEducation: string; // New: Pendidikan Terakhir
  principalSpecialization: string; // New: Spesialisasi
  period: string; // New: Periode penilaian
  
  vision: string;
  mission: string;
  
  teachers: Teacher[]; // New: List of teachers
  classSchedules: ClassSchedule[]; // New: Reference for lesson schedules
  academicCalendar: CalendarEvent[]; // New: Reference for Academic Calendar

  // Penilai & Berita Acara fields
  assessmentDate: string; // Waktu Pelaksanaan
  
  assessor1: string;
  assessor1Nip: string;
  assessor1Rank: string; // New
  assessor1Position: string; // New
  assessor1Unit: string; // New: Unit Kerja
  assessor1LetterNumber: string; // New: No Surat Perintah

  assessor2: string;
  assessor2Nip: string;
  assessor2Rank: string; // New
  assessor2Position: string; // New
  assessor2Unit: string; // New: Unit Kerja
  assessor2LetterNumber: string; // New: No Surat Perintah

  letterNumber: string; // Surat Tugas (General)
  letterDate: string;
  representative: string;
  representativeNip: string;
}

export interface AiResponse {
  rows: {
    id: number;
    catatan: string;
    checklistIndices: number[]; // Indices of checklist items to mark as true
    skor: number;
  }[];
}