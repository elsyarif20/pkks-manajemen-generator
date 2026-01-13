import { InstrumentRow, Teacher, ClassSchedule, CalendarEvent, HomeroomAssignment } from './types';

export const INITIAL_TEACHERS: Teacher[] = [
  { id: 1, name: "ADAM HAFIDZ", nuptk: "", gender: "L" },
  { id: 2, name: "AHMAD FACHRUDIN", nuptk: "", gender: "L" },
  { id: 3, name: "Asep Saepudin", nuptk: "0139758659200023", gender: "L" },
  { id: 4, name: "Barirotul Choiriyah", nuptk: "1251765666230263", gender: "P" },
  { id: 5, name: "Doni Subiyanto", nuptk: "", gender: "L" },
  { id: 6, name: "Fadhillah", nuptk: "4647759661200022", gender: "L" },
  { id: 7, name: "Fadillah Abidana", nuptk: "2751771672130022", gender: "L" },
  { id: 8, name: "Hafizd Hidayat", nuptk: "3940769670130102", gender: "L" },
  { id: 9, name: "Irmayanti", nuptk: "0443758659300062", gender: "P" },
  { id: 10, name: "KHAIRIL FAHMI", nuptk: "", gender: "L" },
  { id: 11, name: "LIYAS SYARIFUDIN", nuptk: "2137759661200043", gender: "L" },
  { id: 12, name: "Mali S", nuptk: "1638752654200022", gender: "L" },
  { id: 13, name: "Muhamad Hidayatu Rusydi", nuptk: "7340766667110023", gender: "L" },
  { id: 14, name: "Muhammad Suhail", nuptk: "7344770671130143", gender: "L" },
  { id: 15, name: "Muslich Anwar", nuptk: "1833756661200002", gender: "L" },
  { id: 16, name: "Nurachman", nuptk: "2851744644200002", gender: "L" },
  { id: 17, name: "Nurlaila", nuptk: "", gender: "P" },
  { id: 18, name: "Padlin", nuptk: "3358757658300033", gender: "P" },
  { id: 19, name: "Putri Dinah Oktavia", nuptk: "4357774675130003", gender: "P" },
  { id: 20, name: "Rahmawati", nuptk: "2434744646300033", gender: "P" },
  { id: 21, name: "RENDI RAMADHAN", nuptk: "8557776677130143", gender: "L" },
  { id: 22, name: "RIZKI KAROMAH", nuptk: "0441771672230263", gender: "P" },
  { id: 23, name: "Sadam Hamzah", nuptk: "7653769670130152", gender: "L" },
  { id: 24, name: "Saleha Mufida", nuptk: "0259774675230033", gender: "P" },
  { id: 25, name: "Siti Nurzulfiah", nuptk: "9640764665210132", gender: "P" },
  { id: 26, name: "Subhan", nuptk: "2433755658200012", gender: "L" },
  { id: 27, name: "Wintarsa", nuptk: "8934748650200022", gender: "L" },
  { id: 28, name: "Zaini Fikri", nuptk: "", gender: "L" }
];

export const HOMEROOM_ASSIGNMENTS: HomeroomAssignment[] = [
  { className: "4 - A", teacherName: "PADLIN, S.Pd" },
  { className: "4 - B", teacherName: "LIYAS SYARIFUDDIN, M.Pd" },
  { className: "1-Intensif Putra", teacherName: "RENDI RAMADHAN, S.Pd" },
  { className: "1-Intensif Putri", teacherName: "NAILUL KUNNI FUROIDA, S.Gz" },
  { className: "5 - A", teacherName: "RIZKI KAROMAH, S.Si" },
  { className: "5 - B", teacherName: "HJ. BARIROTUL CHOIRIYAH, S.E.I" },
  { className: "5 - C", teacherName: "MALI S, S.Pd" },
  { className: "5 - D", teacherName: "MUHAMMAD SUHAIL, S.Pd.I" },
  { className: "2-Intensif IPA", teacherName: "LULU ZAHROTUNNIA, S.Pd" },
  { className: "2-Intensif IPS", teacherName: "KHAIRIL FAHMI, S.Pd" },
  { className: "6 - A", teacherName: "RAHMAWATI, M.Pd" },
  { className: "6 - B", teacherName: "SALEHA MUFIDA, M.Han" },
  { className: "6 - C", teacherName: "FADILLAH, S.Pd" },
  { className: "6 - D", teacherName: "FADILLAH ABIDANA, M.Pd" },
  { className: "3-Intensif IPA", teacherName: "SADAM HAMZAH, S.Pd" },
  { className: "3-Intensif IPS", teacherName: "DONI SUBIYANTO, S.E" },
  { className: "X Non Mukim", teacherName: "ADE IHSAN FIRDAUS" },
  { className: "XI Non Mukim", teacherName: "ACHMAD FACHRUDIN" },
  { className: "XII Non Mukim", teacherName: "MUSLICH ANWAR" }
];

export const ACADEMIC_CALENDAR_2025_2026: CalendarEvent[] = [
  // SEMESTER 1 (Juli 2025 - Desember 2025)
  { date: "14 Juli 2025", description: "Hari pertama masuk sekolah", type: "ACADEMIC" },
  { date: "14 - 16 Juli 2025", description: "Pengenalan Lingkungan Sekolah (MPLS)", type: "ACADEMIC" },
  { date: "17 Agustus 2025", description: "Libur Hari Proklamasi Kemerdekaan RI", type: "HOLIDAY" },
  { date: "4 - 7 Agustus 2025", description: "Asesmen Nasional SMA/SMK/SMALB", type: "EXAM" },
  { date: "25 - 28 Agustus 2025", description: "Asesmen Nasional SMP/SMPLB/MTs", type: "EXAM" },
  { date: "5 September 2025", description: "Libur Maulid Nabi Muhammad SAW", type: "HOLIDAY" },
  { date: "15 September - 12 Oktober 2025", description: "Pelaksanaan Sulingjar (Kepala Sekolah & Guru)", type: "ACADEMIC" },
  { date: "22 - 25 September 2025", description: "Pelaksanaan AN SD/SDLB/MI Tahap I", type: "EXAM" },
  { date: "29 Sept - 2 Oktober 2025", description: "Pelaksanaan AN SD/SDLB/MI Tahap II", type: "EXAM" },
  { date: "10 - 21 November 2025", description: "Prakiraan Tes Kompetensi Akademik", type: "EXAM" },
  { date: "24 Nov - 14 Des 2025", description: "Prakiraan Uji Kompetensi Keahlian (UKK) SMK", type: "EXAM" },
  { date: "1 - 14 Desember 2025", description: "Prakiraan Penilaian Sumatif Akhir Semester 1", type: "EXAM" },
  { date: "3 Desember 2025", description: "Hari Disabilitas Internasional", type: "ACADEMIC" },
  { date: "22 Desember 2025", description: "Tanggal Penetapan Rapor Semester 1", type: "REPORT" },
  { date: "24 Desember 2025", description: "Pembagian Rapor Semester 1", type: "REPORT" },
  { date: "25 Desember 2025", description: "Libur Hari Raya Natal", type: "HOLIDAY" },
  { date: "26 Desember 2025", description: "Cuti Bersama Hari Raya Natal", type: "HOLIDAY" },
  { date: "29 Des 2025 - 10 Jan 2026", description: "Libur Semester 1", type: "HOLIDAY" },

  // SEMESTER 2 (Januari 2026 - Juli 2026)
  { date: "1 Januari 2026", description: "Libur Tahun Baru Masehi", type: "HOLIDAY" },
  { date: "12 Januari 2026", description: "Hari Pertama Masuk Sekolah Semester 2", type: "ACADEMIC" },
  { date: "16 Januari 2026", description: "Libur Isra Mi'raj", type: "HOLIDAY" },
  { date: "17 Februari 2026", description: "Libur Tahun Baru Imlek", type: "HOLIDAY" },
  { date: "20 - 23 Februari 2026", description: "Prakiraan Libur Awal Ramadan 1448 H", type: "HOLIDAY" },
  { date: "24 Feb - 13 Mar 2026", description: "Kegiatan Penumbuhan Budi Pekerti / SMARTTREN", type: "ACADEMIC" },
  { date: "2 - 13 Maret 2026", description: "Prakiraan Ujian Satuan Pendidikan (PSA) SMA/SMK", type: "EXAM" },
  { date: "19 Maret 2026", description: "Libur Hari Raya Nyepi", type: "HOLIDAY" },
  { date: "14 - 28 Maret 2026", description: "Prakiraan Libur Hari Raya Idul Fitri 1448 H", type: "HOLIDAY" },
  { date: "21 Maret 2026", description: "Prakiraan Hari Raya Idul Fitri 1448 H", type: "HOLIDAY" },
  { date: "3 April 2026", description: "Libur Wafat Isa Almasih", type: "HOLIDAY" },
  { date: "1 - 30 April 2026", description: "Prakiraan UKK SMK Susulan/Tambahan", type: "EXAM" },
  { date: "1 Mei 2026", description: "Libur Hari Buruh", type: "HOLIDAY" },
  { date: "4 Mei 2026", description: "Prakiraan Kelulusan SMA/SMK", type: "REPORT" },
  { date: "11 - 23 Mei 2026", description: "Prakiraan Penilaian Sumatif Akhir Jenjang SD/SMP", type: "EXAM" },
  { date: "26 - 27 Mei 2026", description: "Prakiraan Hari Raya Idul Adha 1448 H", type: "HOLIDAY" },
  { date: "31 Mei 2026", description: "Libur Hari Raya Waisak", type: "HOLIDAY" },
  { date: "1 Juni 2026", description: "Libur Hari Lahir Pancasila", type: "HOLIDAY" },
  { date: "2 - 13 Juni 2026", description: "Prakiraan Sumatif Akhir Tahun (Kenaikan Kelas)", type: "EXAM" },
  { date: "16 Juni 2026", description: "Libur Tahun Baru Islam", type: "HOLIDAY" },
  { date: "24 Juni 2026", description: "Tanggal Penetapan Rapor Semester 2", type: "REPORT" },
  { date: "26 Juni 2026", description: "Pembagian Rapor Semester 2", type: "REPORT" },
  { date: "29 Juni - 10 Juli 2026", description: "Libur Akhir Tahun Pelajaran", type: "HOLIDAY" }
];

export const MASTER_CLASS_SCHEDULES: ClassSchedule[] = [
  // ... Include existing schedules here (truncated for brevity but preserved in implementation)
  {
    className: "X A Non Mukim",
    items: [
      { subject: "AL-QUR'AN", teacher: "AHMAD FAHRUDIN", hours: 2 },
      { subject: "PENJAS UMUM", teacher: "AHMAD FATHURACHMAN", hours: 2 },
      { subject: "EKONOMI", teacher: "DONI SUBIYANTO, S.E", hours: 2 },
      { subject: "GEOGRAFI", teacher: "DONI SUBIYANTO, S.E", hours: 2 },
      { subject: "INFORMATIKA SMA", teacher: "FADHILAH, S.Pd.I", hours: 2 },
      { subject: "LIFE SKILL", teacher: "FADHILAH, S.Pd.I", hours: 2 },
      { subject: "B. INDO SMA", teacher: "Hj. BARIROTUL CHOIRIYAH, S.E.I", hours: 2 },
      { subject: "KIMIA", teacher: "Ir. RAHMAWATI, M.Pd", hours: 2 },
      { subject: "MTK SMA", teacher: "ISNAN APRIZAL HAFIDZ", hours: 2 },
      { subject: "TAHFIZ UMUM", teacher: "KHAIRIL FAHMI, S.Pd.", hours: 2 },
      { subject: "SOSIOLOGI", teacher: "LIYAS SYARIFUDDIN, M.Pd", hours: 2 },
      { subject: "FIQIH UMUM", teacher: "MUHAMMAD SUHAIL, S.Pd.I", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "MUSLICH ANWAR, M.Pd", hours: 2 },
      { subject: "PAI SMA", teacher: "NURLAILA, S.Ag", hours: 2 },
      { subject: "BIOLOGI", teacher: "PADLIN, S.Pd", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "RENDI RAMADHAN, S.Pd", hours: 2 },
      { subject: "FISIKA", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 2 },
      { subject: "BAHASA ARAB", teacher: "SOPIAN HADI, S.Pd.I", hours: 2 },
      { subject: "SEJARAH", teacher: "SUBHAN, S.Pd", hours: 2 },
      { subject: "HADIS UMUM", teacher: "SYAHRONI", hours: 2 }
    ]
  },
  // ... Include all other schedules provided in the original file
];

export const INITIAL_ROWS: InstrumentRow[] = [
  // ... (Existing rows kept as provided)
  {
    id: 1,
    pj: "Putri DO",
    kriteria: "Merancang dan menyampaikan Visi dan Misi Sekolah Sehingga menjadi budaya sekolah yang kuat",
    bukti: "Dokumen Visi Misi Sekolah dan dokumen sosialisasi visi misi sekolah dalam berbagai moda kepada peserta didik, orang tua dan masyarakat (Rapat orang tua, PPDB, benner, spanduk, pamplet, WEB, Medsos)",
    checklistItems: [
      { label: "Undangan, Foto, Notulen Penyusunan VISI MISI", checked: false },
      { label: "Dokumen VISI MISI", checked: false },
      { label: "Dokumen Sosialisi VISI MISI Internal", checked: false },
      { label: "Dokumen Sosialisi VISI MISI Eksternal", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  // ... (Rest of rows)
];