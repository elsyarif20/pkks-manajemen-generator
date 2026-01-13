import { InstrumentRow, Teacher, ClassSchedule, CalendarEvent } from './types';

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
  {
    className: "X B Non Mukim",
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
  {
    className: "XI IPS Non Mukim",
    items: [
      { subject: "GEOGRAFI", teacher: "DONI SUBIYANTO, S.E", hours: 2 },
      { subject: "B. INDO SMA", teacher: "EDI SANJAYA, S.Pd", hours: 3 },
      { subject: "LIFE SKILL", teacher: "HAFIZD HIDAYAT, S.Pd", hours: 2 },
      { subject: "EKONOMI", teacher: "Hj. BARIROTUL CHOIRIYAH, S.E.I", hours: 2 },
      { subject: "TAHFIZ UMUM", teacher: "KHAIRIL FAHMI, S.Pd.", hours: 2 },
      { subject: "SOSIOLOGI", teacher: "LIYAS SYARIFUDDIN, M.Pd", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "LULU ZAHROTUNNISA, S.Pd.", hours: 3 },
      { subject: "BAHASA ARAB", teacher: "M. ALIEF NUGRAHA", hours: 2 },
      { subject: "ANTROPOLOGI", teacher: "M. HIDAYATU RUSYDI, S.H", hours: 2 },
      { subject: "SEJARAH", teacher: "M. HIDAYATU RUSYDI, S.H", hours: 2 },
      { subject: "INFORMATIKA SMA", teacher: "M. RAHUL SAYYID", hours: 2 },
      { subject: "MTK SMA", teacher: "MALI. S, S.Pd", hours: 4 },
      { subject: "FIQIH UMUM", teacher: "MUHAMMAD SUHAIL, S.Pd.I", hours: 2 },
      { subject: "PAI SMA", teacher: "MUHAMMAD SUHAIL, S.Pd.I", hours: 2 },
      { subject: "AL-QUR'AN", teacher: "NAMIN NAWAWI, S.Pd.I", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "RENDI RAMADHAN, S.Pd", hours: 2 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 2 },
      { subject: "HADIS UMUM", teacher: "SYAHRONI", hours: 2 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 }
    ]
  },
  {
    className: "XI MIPA Non Mukim",
    items: [
      { subject: "LIFE SKILL", teacher: "HAFIZD HIDAYAT, S.Pd", hours: 2 },
      { subject: "B. INDO SMA", teacher: "Hj. BARIROTUL CHOIRIYAH, S.E.I", hours: 3 },
      { subject: "KIMIA", teacher: "Ir. RAHMAWATI, M.Pd", hours: 2 },
      { subject: "TAHFIZ UMUM", teacher: "KHAIRIL FAHMI, S.Pd.", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "LULU ZAHROTUNNISA, S.Pd.", hours: 3 },
      { subject: "BAHASA ARAB", teacher: "M. ALIEF NUGRAHA", hours: 2 },
      { subject: "SEJARAH", teacher: "M. HIDAYATU RUSYDI, S.H", hours: 2 },
      { subject: "INFORMATIKA SMA", teacher: "M. RAHUL SAYYID", hours: 2 },
      { subject: "MTK SMA", teacher: "MALI. S, S.Pd", hours: 4 },
      { subject: "FIQIH UMUM", teacher: "MUHAMMAD SUHAIL, S.Pd.I", hours: 2 },
      { subject: "PAI SMA", teacher: "MUHAMMAD SUHAIL, S.Pd.I", hours: 2 },
      { subject: "AL-QUR'AN", teacher: "NAMIN NAWAWI, S.Pd.I", hours: 2 },
      { subject: "BIOLOGI", teacher: "PADLIN, S.Pd", hours: 2 },
      { subject: "MTK TINGKAT LANJUT", teacher: "PUTRI DINAH OKTAVIA, S.Pd.", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "RENDI RAMADHAN, S.Pd", hours: 2 },
      { subject: "FISIKA", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 2 },
      { subject: "HADIS UMUM", teacher: "SYAHRONI", hours: 2 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 }
    ]
  },
  {
    className: "XII IPS Non Mukim",
    items: [
      { subject: "GEOGRAFI", teacher: "ADAM HAFIDZ, S.M", hours: 2 },
      { subject: "INFORMATIKA SMA", teacher: "AHMAD LUJAENILMA, S.Kom", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "ANTONI FIRDAUS, M.Pd", hours: 2 },
      { subject: "B. SUNDA SMA", teacher: "DIDAH ROSYIDAH, S.Pd", hours: 2 },
      { subject: "EKONOMI", teacher: "DONI SUBIYANTO, S.E", hours: 2 },
      { subject: "LIFE SKILL", teacher: "FADHILAH, S.Pd.I", hours: 2 },
      { subject: "TAHFIZ UMUM", teacher: "FADHILAH, S.Pd.I", hours: 2 },
      { subject: "B. INDO SMA", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 3 },
      { subject: "SOSIOLOGI", teacher: "LIYAS SYARIFUDDIN, M.Pd", hours: 2 },
      { subject: "BAHASA ARAB", teacher: "M. ALIEF NUGRAHA", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "MUSLICH ANWAR, M.Pd", hours: 3 },
      { subject: "AL-QUR'AN", teacher: "NAMIN NAWAWI, S.Pd.I", hours: 2 },
      { subject: "MTK SMA", teacher: "NURACHMAN, M.Pd", hours: 4 },
      { subject: "FIQIH UMUM", teacher: "NURLAILA, S.Ag", hours: 2 },
      { subject: "PAI SMA", teacher: "NURLAILA, S.Ag", hours: 2 },
      { subject: "ANTROPOLOGI", teacher: "SALEHA MUFIDA, S.Sos, M.Han", hours: 2 },
      { subject: "SEJARAH", teacher: "SALEHA MUFIDA, S.Sos, M.Han", hours: 2 },
      { subject: "HADIS UMUM", teacher: "SYAHRONI", hours: 2 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 }
    ]
  },
  {
    className: "XII MIPA Non Mukim",
    items: [
      { subject: "INFORMATIKA SMA", teacher: "AHMAD LUJAENILMA, S.Kom", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "ANTONI FIRDAUS, M.Pd", hours: 2 },
      { subject: "B. SUNDA SMA", teacher: "DIDAH ROSYIDAH, S.Pd", hours: 2 },
      { subject: "LIFE SKILL", teacher: "FADHILAH, S.Pd.I", hours: 2 },
      { subject: "TAHFIZ UMUM", teacher: "FADHILAH, S.Pd.I", hours: 2 },
      { subject: "B. INDO SMA", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 3 },
      { subject: "KIMIA", teacher: "Ir. RAHMAWATI, M.Pd", hours: 2 },
      { subject: "BAHASA ARAB", teacher: "M. ALIEF NUGRAHA", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "MUSLICH ANWAR, M.Pd", hours: 3 },
      { subject: "AL-QUR'AN", teacher: "NAMIN NAWAWI, S.Pd.I", hours: 2 },
      { subject: "MTK SMA", teacher: "NURACHMAN, M.Pd", hours: 4 },
      { subject: "FIQIH UMUM", teacher: "NURLAILA, S.Ag", hours: 2 },
      { subject: "PAI SMA", teacher: "NURLAILA, S.Ag", hours: 2 },
      { subject: "BIOLOGI", teacher: "PADLIN, S.Pd", hours: 2 },
      { subject: "FISIKA", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "MTK TINGKAT LANJUT", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "SEJARAH", teacher: "SALEHA MUFIDA, S.Sos, M.Han", hours: 2 },
      { subject: "HADIS UMUM", teacher: "SYAHRONI", hours: 2 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 }
    ]
  },
  {
    className: "4 A - Putri",
    items: [
      { subject: "PENJAS UMUM", teacher: "AHMAD FATHURACHMAN", hours: 2 },
      { subject: "NAHWU", teacher: "AHMAD SATIBI, S.Pd", hours: 2 },
      { subject: "SHOROF", teacher: "ASEP SAEPUL MILLAH, M.Pd", hours: 1 },
      { subject: "USHUL FIQH", teacher: "BAYU NIRPANA, S.H", hours: 2 },
      { subject: "EKONOMI", teacher: "DONI SUBIYANTO, S.E", hours: 2 },
      { subject: "TAMRIN LUGHOH", teacher: "ELANG AGESTA PERKASA, S.Ag.", hours: 2 },
      { subject: "B. INDO SMA", teacher: "H. ASEP SAEPUDIN, M.Pd", hours: 2 },
      { subject: "HADIS TMMIA", teacher: "H. ASEP SAEPUDIN, M.Pd", hours: 2 },
      { subject: "INSYA", teacher: "HAMZAH ROBBANI, S.Sos, Lc, M.I.Kom", hours: 2 },
      { subject: "TAFSIR", teacher: "HAMZAH ROBBANI, S.Sos, Lc, M.I.Kom", hours: 2 },
      { subject: "GEOGRAFI", teacher: "Hj. BARIROTUL CHOIRIYAH, S.E.I", hours: 2 },
      { subject: "KIMIA", teacher: "Ir. RAHMAWATI, M.Pd", hours: 2 },
      { subject: "SOSIOLOGI", teacher: "LIYAS SYARIFUDDIN, M.Pd", hours: 2 },
      { subject: "LIFE SKILL", teacher: "M. RAHUL SAYYID", hours: 2 },
      { subject: "MTK SMA", teacher: "MALI. S, S.Pd", hours: 2 },
      { subject: "MUTHOLA'AH", teacher: "MUHAMMAD HANIF FAUZI, M.Pd", hours: 2 },
      { subject: "TARBIYAH", teacher: "NAILUL KUNNI FUROIDA, S.Gz", hours: 2 },
      { subject: "FIQIH TMMIA", teacher: "NURLAILA, S.Ag", hours: 2 },
      { subject: "PAI SMA", teacher: "NURLAILA, S.Ag", hours: 1 },
      { subject: "BIOLOGI", teacher: "PADLIN, S.Pd", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "RENDI RAMADHAN, S.Pd", hours: 2 },
      { subject: "SEJARAH", teacher: "RISMAWATI, S.Sos.", hours: 1 },
      { subject: "FISIKA", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "ZAINI FIKRI, S.Pd.I", hours: 2 },
      { subject: "READING GRAMMAR", teacher: "ZAINI FIKRI, S.Pd.I", hours: 1 }
    ]
  },
  {
    className: "4 B - Putra",
    items: [
      { subject: "PENJAS UMUM", teacher: "AHMAD FATHURACHMAN", hours: 2 },
      { subject: "NAHWU", teacher: "AHMAD SATIBI, S.Pd", hours: 2 },
      { subject: "SHOROF", teacher: "ASEP SAEPUL MILLAH, M.Pd", hours: 1 },
      { subject: "USHUL FIQH", teacher: "BAYU NIRPANA, S.H", hours: 2 },
      { subject: "TAMRIN LUGHOH", teacher: "DAVA NUR PEBRIANTO, S.Pd", hours: 2 },
      { subject: "EKONOMI", teacher: "DONI SUBIYANTO, S.E", hours: 2 },
      { subject: "B. INDO SMA", teacher: "H. ASEP SAEPUDIN, M.Pd", hours: 2 },
      { subject: "TAFSIR", teacher: "HAMZAH ROBBANI, S.Sos, Lc, M.I.Kom", hours: 2 },
      { subject: "KIMIA", teacher: "Ir. RAHMAWATI, M.Pd", hours: 2 },
      { subject: "GEOGRAFI", teacher: "KHAIRIL FAHMI, S.Pd.", hours: 2 },
      { subject: "INSYA", teacher: "LIYAS SYARIFUDDIN, M.Pd", hours: 2 },
      { subject: "SOSIOLOGI", teacher: "LIYAS SYARIFUDDIN, M.Pd", hours: 2 },
      { subject: "MUTHOLA'AH", teacher: "M. IRHAM AL BAIHAQI", hours: 2 },
      { subject: "LIFE SKILL", teacher: "M. RAHUL SAYYID", hours: 2 },
      { subject: "MTK SMA", teacher: "MALI. S, S.Pd", hours: 2 },
      { subject: "TARBIYAH", teacher: "NAILUL KUNNI FUROIDA, S.Gz", hours: 2 },
      { subject: "FIQIH TMMIA", teacher: "NURLAILA, S.Ag", hours: 2 },
      { subject: "PAI SMA", teacher: "NURLAILA, S.Ag", hours: 1 },
      { subject: "BIOLOGI", teacher: "PADLIN, S.Pd", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "RENDI RAMADHAN, S.Pd", hours: 2 },
      { subject: "SEJARAH", teacher: "RISMAWATI, S.Sos.", hours: 1 },
      { subject: "FISIKA", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "HADIS TMMIA", teacher: "YUSUF KURNIAWAN,S.Ag", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "ZAINI FIKRI, S.Pd.I", hours: 2 },
      { subject: "READING GRAMMAR", teacher: "ZAINI FIKRI, S.Pd.I", hours: 1 }
    ]
  },
  {
    className: "1 INTENSIF A",
    items: [
      { subject: "AQIDAH", teacher: "AHDINI RAHMATILLAH, S.Si., Lc.", hours: 2 },
      { subject: "MAHFUDZAT", teacher: "AHMAD FAHRUDIN", hours: 1 },
      { subject: "MUTHOLA'AH", teacher: "AHMAD FATHURACHMAN", hours: 2 },
      { subject: "PENJAS UMUM", teacher: "AHMAD FATHURACHMAN", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "AHMAD FIRDAUS, S.Ag", hours: 2 },
      { subject: "HADIS TMMIA", teacher: "DINDA NAAFIDA ARIFIN", hours: 1 },
      { subject: "TAMRIN LUGHOH", teacher: "ENDANG PANDAWA AGUNG, S.Pd", hours: 5 },
      { subject: "TAJWID", teacher: "HAMMAD IYAD FAIJI", hours: 1 },
      { subject: "B. INDO SMA", teacher: "Hj. BARIROTUL CHOIRIYAH, S.E.I", hours: 2 },
      { subject: "EKONOMI", teacher: "Hj. BARIROTUL CHOIRIYAH, S.E.I", hours: 2 },
      { subject: "KIMIA", teacher: "Ir. RAHMAWATI, M.Pd", hours: 2 },
      { subject: "MTK SMA", teacher: "ISNAN APRIZAL HAFIDZ", hours: 2 },
      { subject: "GEOGRAFI", teacher: "KHAIRIL FAHMI, S.Pd.", hours: 2 },
      { subject: "SOSIOLOGI", teacher: "LIYAS SYARIFUDDIN, M.Pd", hours: 2 },
      { subject: "LIFE SKILL", teacher: "M. RAHUL SAYYID", hours: 2 },
      { subject: "FIQIH TMMIA", teacher: "NADRA, S.Ag", hours: 2 },
      { subject: "IMLA", teacher: "NAILUL KUNNI FUROIDA, S.Gz", hours: 2 },
      { subject: "KHOT", teacher: "NOOR FAIZ", hours: 2 },
      { subject: "BIOLOGI", teacher: "PADLIN, S.Pd", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "RENDI RAMADHAN, S.Pd", hours: 2 },
      { subject: "FISIKA", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "PAI SMA", teacher: "SADAM HAMZAH, S.HI", hours: 1 },
      { subject: "SEJARAH", teacher: "SUBHAN, S.Pd", hours: 1 },
      { subject: "TARIKH ISLAM", teacher: "VENTI RAKHMAWATI, M.Pd", hours: 2 }
    ]
  },
  {
    className: "1 INTENSIF B",
    items: [
      { subject: "AQIDAH", teacher: "AHDINI RAHMATILLAH, S.Si., Lc.", hours: 2 },
      { subject: "MAHFUDZAT", teacher: "AHMAD FAHRUDIN", hours: 1 },
      { subject: "MUTHOLA'AH", teacher: "AHMAD FATHURACHMAN", hours: 2 },
      { subject: "PENJAS UMUM", teacher: "AHMAD FATHURACHMAN", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "AHMAD FIRDAUS, S.Ag", hours: 2 },
      { subject: "TAMRIN LUGHOH", teacher: "DAVA NUR PEBRIANTO, S.Pd", hours: 5 },
      { subject: "HADIS TMMIA", teacher: "DINDA NAAFIDA ARIFIN", hours: 1 },
      { subject: "TAJWID", teacher: "HAMMAD IYAD FAIJI", hours: 1 },
      { subject: "B. INDO SMA", teacher: "Hj. BARIROTUL CHOIRIYAH, S.E.I", hours: 2 },
      { subject: "EKONOMI", teacher: "Hj. BARIROTUL CHOIRIYAH, S.E.I", hours: 2 },
      { subject: "KIMIA", teacher: "Ir. RAHMAWATI, M.Pd", hours: 2 },
      { subject: "MTK SMA", teacher: "ISNAN APRIZAL HAFIDZ", hours: 2 },
      { subject: "GEOGRAFI", teacher: "KHAIRIL FAHMI, S.Pd.", hours: 2 },
      { subject: "SOSIOLOGI", teacher: "LIYAS SYARIFUDDIN, M.Pd", hours: 2 },
      { subject: "LIFE SKILL", teacher: "M. RAHUL SAYYID", hours: 2 },
      { subject: "FIQIH TMMIA", teacher: "NADRA, S.Ag", hours: 2 },
      { subject: "IMLA", teacher: "NAILUL KUNNI FUROIDA, S.Gz", hours: 2 },
      { subject: "KHOT", teacher: "NOOR FAIZ", hours: 2 },
      { subject: "BIOLOGI", teacher: "PADLIN, S.Pd", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "RENDI RAMADHAN, S.Pd", hours: 2 },
      { subject: "FISIKA", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "PAI SMA", teacher: "SADAM HAMZAH, S.HI", hours: 1 },
      { subject: "SEJARAH", teacher: "SUBHAN, S.Pd", hours: 1 },
      { subject: "TARIKH ISLAM", teacher: "VENTI RAKHMAWATI, M.Pd", hours: 2 }
    ]
  },
  {
    className: "5 A - IPA Putri",
    items: [
      { subject: "FIQIH TMMIA", teacher: "ANTONI FIRDAUS, M.Pd", hours: 2 },
      { subject: "SHOROF", teacher: "ASEP SAEPUL MILLAH, M.Pd", hours: 1 },
      { subject: "INSYA", teacher: "DAVA NUR PEBRIANTO, S.Pd", hours: 2 },
      { subject: "MUTHOLA'AH", teacher: "DAVA NUR PEBRIANTO, S.Pd", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 2 },
      { subject: "READING GRAMMAR", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 1 },
      { subject: "LIFE SKILL", teacher: "HAFIZD HIDAYAT, S.Pd", hours: 2 },
      { subject: "B. INDO SMA", teacher: "Hj. BARIROTUL CHOIRIYAH, S.E.I", hours: 2 },
      { subject: "KIMIA", teacher: "Ir. RAHMAWATI, M.Pd", hours: 2 },
      { subject: "SEJARAH", teacher: "M. HIDAYATU RUSYDI, S.H", hours: 1 },
      { subject: "INFORMATIKA SMA", teacher: "M. RAHUL SAYYID", hours: 2 },
      { subject: "MTK SMA", teacher: "MALI. S, S.Pd", hours: 3 },
      { subject: "PAI SMA", teacher: "MUHAMMAD SUHAIL, S.Pd.I", hours: 1 },
      { subject: "BIOLOGI", teacher: "PADLIN, S.Pd", hours: 2 },
      { subject: "NAHWU", teacher: "PUTRA NAHDI ABIYYU, S.Pd. L.c.", hours: 2 },
      { subject: "TAFSIR", teacher: "PUTRA NAHDI ABIYYU, S.Pd. L.c.", hours: 2 },
      { subject: "MTK TINGKAT LANJUT", teacher: "PUTRI DINAH OKTAVIA, S.Pd.", hours: 2 },
      { subject: "MUST HADITS", teacher: "QOSIM IKHSAN, S.Ag", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "RENDI RAMADHAN, S.Pd", hours: 2 },
      { subject: "FISIKA", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "USHUL FIQH", teacher: "SADAM HAMZAH, S.HI", hours: 2 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 1 },
      { subject: "TARBIYAH", teacher: "VERRARY PRATAMA PUTRI S.E", hours: 2 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 },
      { subject: "HADIS TMMIA", teacher: "YUSUF KURNIAWAN,S.Ag", hours: 2 }
    ]
  },
  {
    className: "5 B - IPS Putri",
    items: [
      { subject: "FIQIH TMMIA", teacher: "ANTONI FIRDAUS, M.Pd", hours: 2 },
      { subject: "SHOROF", teacher: "ASEP SAEPUL MILLAH, M.Pd", hours: 1 },
      { subject: "INSYA", teacher: "DAVA NUR PEBRIANTO, S.Pd", hours: 2 },
      { subject: "MUTHOLA'AH", teacher: "DAVA NUR PEBRIANTO, S.Pd", hours: 2 },
      { subject: "GEOGRAFI", teacher: "DONI SUBIYANTO, S.E", hours: 2 },
      { subject: "B. INDO SMA", teacher: "EDI SANJAYA, S.Pd", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 2 },
      { subject: "READING GRAMMAR", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 1 },
      { subject: "LIFE SKILL", teacher: "HAFIZD HIDAYAT, S.Pd", hours: 2 },
      { subject: "EKONOMI", teacher: "Hj. BARIROTUL CHOIRIYAH, S.E.I", hours: 2 },
      { subject: "SOSIOLOGI", teacher: "LIYAS SYARIFUDDIN, M.Pd", hours: 2 },
      { subject: "ANTROPOLOGI", teacher: "M. HIDAYATU RUSYDI, S.H", hours: 2 },
      { subject: "SEJARAH", teacher: "M. HIDAYATU RUSYDI, S.H", hours: 1 },
      { subject: "INFORMATIKA SMA", teacher: "M. RAHUL SAYYID", hours: 2 },
      { subject: "MTK SMA", teacher: "MALI. S, S.Pd", hours: 3 },
      { subject: "PAI SMA", teacher: "MUHAMMAD SUHAIL, S.Pd.I", hours: 1 },
      { subject: "NAHWU", teacher: "PUTRA NAHDI ABIYYU, S.Pd. L.c.", hours: 2 },
      { subject: "TAFSIR", teacher: "PUTRA NAHDI ABIYYU, S.Pd. L.c.", hours: 2 },
      { subject: "MUST HADITS", teacher: "QOSIM IKHSAN, S.Ag", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "RENDI RAMADHAN, S.Pd", hours: 2 },
      { subject: "USHUL FIQH", teacher: "SADAM HAMZAH, S.HI", hours: 2 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 1 },
      { subject: "TARBIYAH", teacher: "VERRARY PRATAMA PUTRI S.E", hours: 2 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 },
      { subject: "HADIS TMMIA", teacher: "YUSUF KURNIAWAN,S.Ag", hours: 2 }
    ]
  },
  {
    className: "5 C - IPA Putra",
    items: [
      { subject: "FIQIH TMMIA", teacher: "ANTONI FIRDAUS, M.Pd", hours: 2 },
      { subject: "SHOROF", teacher: "ASEP SAEPUL MILLAH, M.Pd", hours: 1 },
      { subject: "INSYA", teacher: "DAVA NUR PEBRIANTO, S.Pd", hours: 2 },
      { subject: "MUTHOLA'AH", teacher: "DAVA NUR PEBRIANTO, S.Pd", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 2 },
      { subject: "READING GRAMMAR", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 1 },
      { subject: "LIFE SKILL", teacher: "HAFIZD HIDAYAT, S.Pd", hours: 2 },
      { subject: "B. INDO SMA", teacher: "Hj. BARIROTUL CHOIRIYAH, S.E.I", hours: 2 },
      { subject: "KIMIA", teacher: "Ir. RAHMAWATI, M.Pd", hours: 2 },
      { subject: "SEJARAH", teacher: "M. HIDAYATU RUSYDI, S.H", hours: 1 },
      { subject: "INFORMATIKA SMA", teacher: "M. RAHUL SAYYID", hours: 2 },
      { subject: "MTK SMA", teacher: "MALI. S, S.Pd", hours: 3 },
      { subject: "PAI SMA", teacher: "MUHAMMAD SUHAIL, S.Pd.I", hours: 1 },
      { subject: "NAHWU", teacher: "MUHAMMAD ZUHDI FAUZI, S.Ag", hours: 2 },
      { subject: "BIOLOGI", teacher: "PADLIN, S.Pd", hours: 2 },
      { subject: "TAFSIR", teacher: "PUTRA NAHDI ABIYYU, S.Pd. L.c.", hours: 2 },
      { subject: "MTK TINGKAT LANJUT", teacher: "PUTRI DINAH OKTAVIA, S.Pd.", hours: 2 },
      { subject: "MUST HADITS", teacher: "QOSIM IKHSAN, S.Ag", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "RENDI RAMADHAN, S.Pd", hours: 2 },
      { subject: "FISIKA", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "USHUL FIQH", teacher: "SADAM HAMZAH, S.HI", hours: 2 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 1 },
      { subject: "TARBIYAH", teacher: "VERRARY PRATAMA PUTRI S.E", hours: 2 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 },
      { subject: "HADIS TMMIA", teacher: "YUSUF KURNIAWAN,S.Ag", hours: 2 }
    ]
  },
  {
    className: "5 D - IPS Putra",
    items: [
      { subject: "FIQIH TMMIA", teacher: "ANTONI FIRDAUS, M.Pd", hours: 2 },
      { subject: "SHOROF", teacher: "ASEP SAEPUL MILLAH, M.Pd", hours: 1 },
      { subject: "INSYA", teacher: "DAVA NUR PEBRIANTO, S.Pd", hours: 2 },
      { subject: "MUTHOLA'AH", teacher: "DAVA NUR PEBRIANTO, S.Pd", hours: 2 },
      { subject: "GEOGRAFI", teacher: "DONI SUBIYANTO, S.E", hours: 2 },
      { subject: "B. INDO SMA", teacher: "EDI SANJAYA, S.Pd", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 2 },
      { subject: "READING GRAMMAR", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 1 },
      { subject: "LIFE SKILL", teacher: "HAFIZD HIDAYAT, S.Pd", hours: 2 },
      { subject: "EKONOMI", teacher: "Hj. BARIROTUL CHOIRIYAH, S.E.I", hours: 2 },
      { subject: "SOSIOLOGI", teacher: "LIYAS SYARIFUDDIN, M.Pd", hours: 2 },
      { subject: "ANTROPOLOGI", teacher: "M. HIDAYATU RUSYDI, S.H", hours: 2 },
      { subject: "SEJARAH", teacher: "M. HIDAYATU RUSYDI, S.H", hours: 1 },
      { subject: "INFORMATIKA SMA", teacher: "M. RAHUL SAYYID", hours: 2 },
      { subject: "MTK SMA", teacher: "MALI. S, S.Pd", hours: 3 },
      { subject: "PAI SMA", teacher: "MUHAMMAD SUHAIL, S.Pd.I", hours: 1 },
      { subject: "NAHWU", teacher: "MUHAMMAD ZUHDI FAUZI, S.Ag", hours: 2 },
      { subject: "TAFSIR", teacher: "PUTRA NAHDI ABIYYU, S.Pd. L.c.", hours: 2 },
      { subject: "MUST HADITS", teacher: "QOSIM IKHSAN, S.Ag", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "RENDI RAMADHAN, S.Pd", hours: 2 },
      { subject: "USHUL FIQH", teacher: "SADAM HAMZAH, S.HI", hours: 2 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 1 },
      { subject: "TARBIYAH", teacher: "VERRARY PRATAMA PUTRI S.E", hours: 2 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 },
      { subject: "HADIS TMMIA", teacher: "YUSUF KURNIAWAN,S.Ag", hours: 2 }
    ]
  },
  {
    className: "2 INTENSIF IPA",
    items: [
      { subject: "SHOROF", teacher: "ADE HOLIDIN, S.Ag", hours: 1 },
      { subject: "READING GRAMMAR", teacher: "AHMAD FIRDAUS, S.Ag", hours: 1 },
      { subject: "NAHWU", teacher: "AHMAD SATIBI, S.Pd", hours: 2 },
      { subject: "TAFSIR", teacher: "DAVA NUR PEBRIANTO, S.Pd", hours: 2 },
      { subject: "FIQIH TMMIA", teacher: "FADHILAH, S.Pd.I", hours: 1 },
      { subject: "LIFE SKILL", teacher: "HAFIZD HIDAYAT, S.Pd", hours: 2 },
      { subject: "INSYA", teacher: "HAMZAH ROBBANI, S.Sos, Lc, M.I.Kom", hours: 2 },
      { subject: "B. INDO SMA", teacher: "Hj. BARIROTUL CHOIRIYAH, S.E.I", hours: 2 },
      { subject: "KIMIA", teacher: "Ir. RAHMAWATI, M.Pd", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "LULU ZAHROTUNNISA, S.Pd.", hours: 2 },
      { subject: "SEJARAH", teacher: "M. HIDAYATU RUSYDI, S.H", hours: 1 },
      { subject: "IMLA", teacher: "M. JAELANI BASRI, S.Pd", hours: 2 },
      { subject: "INFORMATIKA SMA", teacher: "M. RAHUL SAYYID", hours: 2 },
      { subject: "HADIS TMMIA", teacher: "M. RIFKI RIPALDI", hours: 1 },
      { subject: "MTK SMA", teacher: "MALI. S, S.Pd", hours: 3 },
      { subject: "TAMRIN LUGHOH", teacher: "MUHAMMAD FARID,S.Pd.I.", hours: 4 },
      { subject: "PAI SMA", teacher: "MUHAMMAD SUHAIL, S.Pd.I", hours: 1 },
      { subject: "TARBIYAH", teacher: "NAILUL KUNNI FUROIDA, S.Gz", hours: 2 },
      { subject: "BIOLOGI", teacher: "PADLIN, S.Pd", hours: 2 },
      { subject: "MTK TINGKAT LANJUT", teacher: "PUTRI DINAH OKTAVIA, S.Pd.", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "RENDI RAMADHAN, S.Pd", hours: 2 },
      { subject: "FISIKA", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 1 },
      { subject: "MUTHOLA'AH", teacher: "SOPIAN HADI, S.Pd.I", hours: 2 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 }
    ]
  },
  {
    className: "2 INTENSIF IPS",
    items: [
      { subject: "SHOROF", teacher: "ADE HOLIDIN, S.Ag", hours: 1 },
      { subject: "READING GRAMMAR", teacher: "AHMAD FIRDAUS, S.Ag", hours: 1 },
      { subject: "NAHWU", teacher: "AHMAD SATIBI, S.Pd", hours: 2 },
      { subject: "TAFSIR", teacher: "DAVA NUR PEBRIANTO, S.Pd", hours: 2 },
      { subject: "GEOGRAFI", teacher: "DONI SUBIYANTO, S.E", hours: 2 },
      { subject: "B. INDO SMA", teacher: "EDI SANJAYA, S.Pd", hours: 2 },
      { subject: "FIQIH TMMIA", teacher: "FADHILAH, S.Pd.I", hours: 1 },
      { subject: "LIFE SKILL", teacher: "HAFIZD HIDAYAT, S.Pd", hours: 2 },
      { subject: "INSYA", teacher: "HAMZAH ROBBANI, S.Sos, Lc, M.I.Kom", hours: 2 },
      { subject: "EKONOMI", teacher: "Hj. BARIROTUL CHOIRIYAH, S.E.I", hours: 2 },
      { subject: "SOSIOLOGI", teacher: "LIYAS SYARIFUDDIN, M.Pd", hours: 2 },
      { subject: "B. INGGRIS SMA", teacher: "LULU ZAHROTUNNISA, S.Pd.", hours: 2 },
      { subject: "ANTROPOLOGI", teacher: "M. HIDAYATU RUSYDI, S.H", hours: 2 },
      { subject: "SEJARAH", teacher: "M. HIDAYATU RUSYDI, S.H", hours: 1 },
      { subject: "IMLA", teacher: "M. JAELANI BASRI, S.Pd", hours: 2 },
      { subject: "INFORMATIKA SMA", teacher: "M. RAHUL SAYYID", hours: 2 },
      { subject: "HADIS TMMIA", teacher: "M. RIFKI RIPALDI", hours: 1 },
      { subject: "MTK SMA", teacher: "MALI. S, S.Pd", hours: 3 },
      { subject: "TAMRIN LUGHOH", teacher: "MUHAMMAD FARID,S.Pd.I.", hours: 4 },
      { subject: "PAI SMA", teacher: "MUHAMMAD SUHAIL, S.Pd.I", hours: 1 },
      { subject: "TARBIYAH", teacher: "NAILUL KUNNI FUROIDA, S.Gz", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "RENDI RAMADHAN, S.Pd", hours: 2 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 1 },
      { subject: "MUTHOLA'AH", teacher: "SOPIAN HADI, S.Pd.I", hours: 2 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 }
    ]
  },
  {
    className: "6 A - IPA Putri",
    items: [
      { subject: "INFORMATIKA SMA", teacher: "AHMAD LUJAENILMA, S.Kom", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "ANTONI FIRDAUS, M.Pd", hours: 2 },
      { subject: "LIFE SKILL", teacher: "FADHILAH, S.Pd.I", hours: 1 },
      { subject: "B. INDO SMA", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 3 },
      { subject: "KIMIA", teacher: "Ir. RAHMAWATI, M.Pd", hours: 2 },
      { subject: "TAFSIR", teacher: "M. YAQUB UNANG, S.Ag", hours: 2 },
      { subject: "BALAGHAH", teacher: "MUHAMMAD HANIF FAUZI, M.Pd", hours: 2 },
      { subject: "INSYA", teacher: "MUHAMMAD HANIF FAUZI, M.Pd", hours: 2 },
      { subject: "MUTHOLA'AH", teacher: "MUHAMMAD ZUHDI FAUZI, S.Ag", hours: 2 },
      { subject: "TARBIYAH", teacher: "MUHAMMAD ZUHDI FAUZI, S.Ag", hours: 2 },
      { subject: "READING GRAMMAR", teacher: "MURSYID ANWAR, M.Pd", hours: 1 },
      { subject: "B. INGGRIS SMA", teacher: "MUSLICH ANWAR, M.Pd", hours: 2 },
      { subject: "SHOROF", teacher: "MUSLICH ANWAR, M.Pd", hours: 1 },
      { subject: "MTK SMA", teacher: "NURACHMAN, M.Pd", hours: 3 },
      { subject: "PAI SMA", teacher: "NURLAILA, S.Ag", hours: 1 },
      { subject: "BIOLOGI", teacher: "PADLIN, S.Pd", hours: 2 },
      { subject: "ULUMUL QUR'AN", teacher: "PUTRA NAHDI ABIYYU, S.Pd. L.c.", hours: 2 },
      { subject: "FIQIH TMMIA", teacher: "RIZKI ABDUL KHOTIB, S.Pd.I", hours: 2 },
      { subject: "FISIKA", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "MTK TINGKAT LANJUT", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "NAHWU", teacher: "SADAM HAMZAH, S.HI", hours: 2 },
      { subject: "USHUL FIQH", teacher: "SADAM HAMZAH, S.HI", hours: 2 },
      { subject: "SEJARAH", teacher: "SALEHA MUFIDA, S.Sos, M.Han", hours: 1 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 1 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 }
    ]
  },
  {
    className: "6 B - IPS Putri",
    items: [
      { subject: "GEOGRAFI", teacher: "ADAM HAFIDZ, S.M", hours: 2 },
      { subject: "INFORMATIKA SMA", teacher: "AHMAD LUJAENILMA, S.Kom", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "ANTONI FIRDAUS, M.Pd", hours: 2 },
      { subject: "EKONOMI", teacher: "DONI SUBIYANTO, S.E", hours: 2 },
      { subject: "LIFE SKILL", teacher: "FADHILAH, S.Pd.I", hours: 1 },
      { subject: "B. INDO SMA", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 3 },
      { subject: "SOSIOLOGI", teacher: "LIYAS SYARIFUDDIN, M.Pd", hours: 2 },
      { subject: "TAFSIR", teacher: "M. YAQUB UNANG, S.Ag", hours: 2 },
      { subject: "BALAGHAH", teacher: "MUHAMMAD HANIF FAUZI, M.Pd", hours: 2 },
      { subject: "INSYA", teacher: "MUHAMMAD HANIF FAUZI, M.Pd", hours: 2 },
      { subject: "MUTHOLA'AH", teacher: "MUHAMMAD ZUHDI FAUZI, S.Ag", hours: 2 },
      { subject: "TARBIYAH", teacher: "MUHAMMAD ZUHDI FAUZI, S.Ag", hours: 2 },
      { subject: "READING GRAMMAR", teacher: "MURSYID ANWAR, M.Pd", hours: 1 },
      { subject: "B. INGGRIS SMA", teacher: "MUSLICH ANWAR, M.Pd", hours: 2 },
      { subject: "SHOROF", teacher: "MUSLICH ANWAR, M.Pd", hours: 1 },
      { subject: "MTK SMA", teacher: "NURACHMAN, M.Pd", hours: 3 },
      { subject: "PAI SMA", teacher: "NURLAILA, S.Ag", hours: 1 },
      { subject: "ULUMUL QUR'AN", teacher: "PUTRA NAHDI ABIYYU, S.Pd. L.c.", hours: 2 },
      { subject: "FIQIH TMMIA", teacher: "RIZKI ABDUL KHOTIB, S.Pd.I", hours: 2 },
      { subject: "NAHWU", teacher: "SADAM HAMZAH, S.HI", hours: 2 },
      { subject: "USHUL FIQH", teacher: "SADAM HAMZAH, S.HI", hours: 2 },
      { subject: "ANTROPOLOGI", teacher: "SALEHA MUFIDA, S.Sos, M.Han", hours: 2 },
      { subject: "SEJARAH", teacher: "SALEHA MUFIDA, S.Sos, M.Han", hours: 1 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 1 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 }
    ]
  },
  {
    className: "6 C - IPA Putra",
    items: [
      { subject: "INFORMATIKA SMA", teacher: "AHMAD LUJAENILMA, S.Kom", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "ANTONI FIRDAUS, M.Pd", hours: 2 },
      { subject: "LIFE SKILL", teacher: "FADHILAH, S.Pd.I", hours: 1 },
      { subject: "B. INDO SMA", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 3 },
      { subject: "KIMIA", teacher: "Ir. RAHMAWATI, M.Pd", hours: 2 },
      { subject: "TAFSIR", teacher: "M. YAQUB UNANG, S.Ag", hours: 2 },
      { subject: "BALAGHAH", teacher: "MUHAMMAD HANIF FAUZI, M.Pd", hours: 2 },
      { subject: "INSYA", teacher: "MUHAMMAD HANIF FAUZI, M.Pd", hours: 2 },
      { subject: "MUTHOLA'AH", teacher: "MUHAMMAD ZUHDI FAUZI, S.Ag", hours: 2 },
      { subject: "TARBIYAH", teacher: "MUHAMMAD ZUHDI FAUZI, S.Ag", hours: 2 },
      { subject: "READING GRAMMAR", teacher: "MURSYID ANWAR, M.Pd", hours: 1 },
      { subject: "B. INGGRIS SMA", teacher: "MUSLICH ANWAR, M.Pd", hours: 2 },
      { subject: "SHOROF", teacher: "MUSLICH ANWAR, M.Pd", hours: 1 },
      { subject: "MTK SMA", teacher: "NURACHMAN, M.Pd", hours: 3 },
      { subject: "PAI SMA", teacher: "NURLAILA, S.Ag", hours: 1 },
      { subject: "BIOLOGI", teacher: "PADLIN, S.Pd", hours: 2 },
      { subject: "ULUMUL QUR'AN", teacher: "PUTRA NAHDI ABIYYU, S.Pd. L.c.", hours: 2 },
      { subject: "FIQIH TMMIA", teacher: "RIZKI ABDUL KHOTIB, S.Pd.I", hours: 2 },
      { subject: "FISIKA", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "MTK TINGKAT LANJUT", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "NAHWU", teacher: "SADAM HAMZAH, S.HI", hours: 2 },
      { subject: "USHUL FIQH", teacher: "SADAM HAMZAH, S.HI", hours: 2 },
      { subject: "SEJARAH", teacher: "SALEHA MUFIDA, S.Sos, M.Han", hours: 1 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 1 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 }
    ]
  },
  {
    className: "6 D - IPS Putra",
    items: [
      { subject: "GEOGRAFI", teacher: "ADAM HAFIDZ, S.M", hours: 2 },
      { subject: "INFORMATIKA SMA", teacher: "AHMAD LUJAENILMA, S.Kom", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "ANTONI FIRDAUS, M.Pd", hours: 2 },
      { subject: "EKONOMI", teacher: "DONI SUBIYANTO, S.E", hours: 2 },
      { subject: "LIFE SKILL", teacher: "FADHILAH, S.Pd.I", hours: 1 },
      { subject: "B. INDO SMA", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 3 },
      { subject: "SOSIOLOGI", teacher: "LIYAS SYARIFUDDIN, M.Pd", hours: 2 },
      { subject: "TAFSIR", teacher: "M. YAQUB UNANG, S.Ag", hours: 2 },
      { subject: "BALAGHAH", teacher: "MUHAMMAD HANIF FAUZI, M.Pd", hours: 2 },
      { subject: "INSYA", teacher: "MUHAMMAD HANIF FAUZI, M.Pd", hours: 2 },
      { subject: "MUTHOLA'AH", teacher: "MUHAMMAD ZUHDI FAUZI, S.Ag", hours: 2 },
      { subject: "TARBIYAH", teacher: "MUHAMMAD ZUHDI FAUZI, S.Ag", hours: 2 },
      { subject: "READING GRAMMAR", teacher: "MURSYID ANWAR, M.Pd", hours: 1 },
      { subject: "B. INGGRIS SMA", teacher: "MUSLICH ANWAR, M.Pd", hours: 2 },
      { subject: "SHOROF", teacher: "MUSLICH ANWAR, M.Pd", hours: 1 },
      { subject: "MTK SMA", teacher: "NURACHMAN, M.Pd", hours: 3 },
      { subject: "PAI SMA", teacher: "NURLAILA, S.Ag", hours: 1 },
      { subject: "ULUMUL QUR'AN", teacher: "PUTRA NAHDI ABIYYU, S.Pd. L.c.", hours: 2 },
      { subject: "FIQIH TMMIA", teacher: "RIZKI ABDUL KHOTIB, S.Pd.I", hours: 2 },
      { subject: "NAHWU", teacher: "SADAM HAMZAH, S.HI", hours: 2 },
      { subject: "USHUL FIQH", teacher: "SADAM HAMZAH, S.HI", hours: 2 },
      { subject: "ANTROPOLOGI", teacher: "SALEHA MUFIDA, S.Sos, M.Han", hours: 2 },
      { subject: "SEJARAH", teacher: "SALEHA MUFIDA, S.Sos, M.Han", hours: 1 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 1 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 }
    ]
  },
  {
    className: "3 INTENSIF IPA",
    items: [
      { subject: "INFORMATIKA SMA", teacher: "AHMAD LUJAENILMA, S.Kom", hours: 2 },
      { subject: "NAHWU", teacher: "AHMAD SATIBI, S.Pd", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "ANTONI FIRDAUS, M.Pd", hours: 2 },
      { subject: "USHUL FIQH", teacher: "BAYU NIRPANA, S.H", hours: 2 },
      { subject: "LIFE SKILL", teacher: "FADHILAH, S.Pd.I", hours: 1 },
      { subject: "B. INDO SMA", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 3 },
      { subject: "INSYA", teacher: "HAMZAH ROBBANI, S.Sos, Lc, M.I.Kom", hours: 2 },
      { subject: "MUTHOLA'AH", teacher: "ICHSANUL AFIEF, S.Sos", hours: 2 },
      { subject: "SHOROF", teacher: "ICHSANUL AFIEF, S.Sos", hours: 1 },
      { subject: "KIMIA", teacher: "Ir. RAHMAWATI, M.Pd", hours: 2 },
      { subject: "TAFSIR", teacher: "M. YAQUB UNANG, S.Ag", hours: 2 },
      { subject: "TARBIYAH", teacher: "MUHAMMAD ZUHDI FAUZI, S.Ag", hours: 2 },
      { subject: "READING GRAMMAR", teacher: "MURSYID ANWAR, M.Pd", hours: 1 },
      { subject: "B. INGGRIS SMA", teacher: "MUSLICH ANWAR, M.Pd", hours: 2 },
      { subject: "MTK SMA", teacher: "NURACHMAN, M.Pd", hours: 3 },
      { subject: "PAI SMA", teacher: "NURLAILA, S.Ag", hours: 1 },
      { subject: "BIOLOGI", teacher: "PADLIN, S.Pd", hours: 2 },
      { subject: "MUST HADITS", teacher: "QOSIM IKHSAN, S.Ag", hours: 2 },
      { subject: "ULUMUL QUR'AN", teacher: "QOSIM IKHSAN, S.Ag", hours: 2 },
      { subject: "FIQIH TMMIA", teacher: "RIZKI ABDUL KHOTIB, S.Pd.I", hours: 2 },
      { subject: "FISIKA", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "MTK TINGKAT LANJUT", teacher: "RIZKI KAROMAH, S.SI", hours: 2 },
      { subject: "SEJARAH", teacher: "SALEHA MUFIDA, S.Sos, M.Han", hours: 1 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 1 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 }
    ]
  },
  {
    className: "3 INTENSIF IPS",
    items: [
      { subject: "GEOGRAFI", teacher: "ADAM HAFIDZ, S.M", hours: 2 },
      { subject: "INFORMATIKA SMA", teacher: "AHMAD LUJAENILMA, S.Kom", hours: 2 },
      { subject: "NAHWU", teacher: "AHMAD SATIBI, S.Pd", hours: 2 },
      { subject: "P. PANCASILA SMA", teacher: "ANTONI FIRDAUS, M.Pd", hours: 2 },
      { subject: "USHUL FIQH", teacher: "BAYU NIRPANA, S.H", hours: 2 },
      { subject: "EKONOMI", teacher: "DONI SUBIYANTO, S.E", hours: 2 },
      { subject: "LIFE SKILL", teacher: "FADHILAH, S.Pd.I", hours: 1 },
      { subject: "B. INDO SMA", teacher: "FADILLAH ABIDANA, S.S, M.Pd", hours: 3 },
      { subject: "INSYA", teacher: "HAMZAH ROBBANI, S.Sos, Lc, M.I.Kom", hours: 2 },
      { subject: "MUTHOLA'AH", teacher: "ICHSANUL AFIEF, S.Sos", hours: 2 },
      { subject: "SHOROF", teacher: "ICHSANUL AFIEF, S.Sos", hours: 1 },
      { subject: "SOSIOLOGI", teacher: "LIYAS SYARIFUDDIN, M.Pd", hours: 2 },
      { subject: "TAFSIR", teacher: "M. YAQUB UNANG, S.Ag", hours: 2 },
      { subject: "TARBIYAH", teacher: "MUHAMMAD ZUHDI FAUZI, S.Ag", hours: 2 },
      { subject: "READING GRAMMAR", teacher: "MURSYID ANWAR, M.Pd", hours: 1 },
      { subject: "B. INGGRIS SMA", teacher: "MUSLICH ANWAR, M.Pd", hours: 2 },
      { subject: "MTK SMA", teacher: "NURACHMAN, M.Pd", hours: 3 },
      { subject: "PAI SMA", teacher: "NURLAILA, S.Ag", hours: 1 },
      { subject: "MUST HADITS", teacher: "QOSIM IKHSAN, S.Ag", hours: 2 },
      { subject: "ULUMUL QUR'AN", teacher: "QOSIM IKHSAN, S.Ag", hours: 2 },
      { subject: "FIQIH TMMIA", teacher: "RIZKI ABDUL KHOTIB, S.Pd.I", hours: 2 },
      { subject: "ANTROPOLOGI", teacher: "SALEHA MUFIDA, S.Sos, M.Han", hours: 2 },
      { subject: "SEJARAH", teacher: "SALEHA MUFIDA, S.Sos, M.Han", hours: 1 },
      { subject: "B. SUNDA SMA", teacher: "SITI NUR ZULFIYAH, S.Pd.I", hours: 1 },
      { subject: "PENJAS UMUM", teacher: "WINTARSA, S.Pd.I", hours: 2 }
    ]
  }
];

export const INITIAL_ROWS: InstrumentRow[] = [
  // ... (existing rows code)
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
  {
    id: 2,
    pj: "Fida",
    kriteria: "Membuat Rencana Kegiatan dan Anggaran Sekolah (RAKS) berbasis data Rapor Pendidikan dan berorientasi pada peningkatan kualitas pembelajaran",
    bukti: "Dokumen Rapor Pendidikan, PBD, RKS, RKT dan RKAS berbasis Rapor Pendidikan; E-ASET ; KIB",
    checklistItems: [
      { label: "Dokumen Rapor Pendidikan", checked: false },
      { label: "Analisis Rapor Pendidikan", checked: false },
      { label: "RKJM", checked: false },
      { label: "RKT", checked: false },
      { label: "RKAS", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 3,
    pj: "Muslich",
    kriteria: "Melaksanakan Pengembangan kurikulum satuan Pendidikan yang melibatkan guru, peserta didik, orang tua dan masyarakat",
    bukti: "Dokumen KSP lengkap dengan lampiran, Evaluasi kurikulum, analisis satuan pendidikan",
    checklistItems: [
      { label: "Dokumen KSP", checked: false },
      { label: "Dokumen Kurikulum", checked: false },
      { label: "Analisis Konteks", checked: false },
      { label: "Catatan Refleksi Kurikulum Satuan Pendidikan", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 4,
    pj: "Irmayanti & Muslich",
    kriteria: "Melaksanakan Kegiatan dan Anggaran Sekolah berbasis data Rapor pendidikan dan berorientasi peningkatan kualitas pembelajaran (rekomendasi prioritas pada Literasi, Numerasi, Karakter dan lingkungan sekolah)",
    bukti: "Rapor Pendidikan, PBD, RKS, RKT, Sekolah inklusi, kebinekaan dan kesetaraan gender",
    checklistItems: [
      { label: "Analisis Rapor Pendidikan", checked: false },
      { label: "Anggaran untuk peningkatan Numerasi dan literasi", checked: false },
      { label: "Anggaran untuk peningkatan keamanan lingkungan sekolah", checked: false },
      { label: "Anggaran untuk peningkatan kebhinekaan dan kesetaraan gender", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 5,
    pj: "Edi & Putri DO",
    kriteria: "Mengelola digitalisasi sekolah untuk meningkatkan efektifitas, efisiensi dan kualitas satuan pendidikan yang berorientasi pada peserta didik; dan pengelolaan ketatausahaan/Administrasi",
    bukti: "Penggunaan aplikasi Digitalisasi sekolah: 1. Akun belajar.id 2. Dapodik 3. e-ARKAS, e-Aset 4. MIS/SIM/Web Sekolah",
    checklistItems: [
      { label: "Akun belajar.id dan pemanfaatan Ruang GTK", checked: false },
      { label: "Dapodik", checked: false },
      { label: "Pengelolaan data berbasis IT", checked: false },
      { label: "Mengelola MIS (Management Information System)", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 6,
    pj: "Bu Padlin & Liyas",
    kriteria: "Melaksanakan refleksi pelaksanaan pembelajaran secara berkala dengan melibatkan guru, peserta didik, orang tua dan masyarakat; Mengelola sistem informasi sekolah",
    bukti: "1. Dokumen PKG (SK Tim Penilai, Rekap Nilai) 2. Jurnal refleksi guru 3. Jurnal refleksi siswa 4. SK dan Jadwal Kombel",
    checklistItems: [
      { label: "Dokumen Penilaian Kinerja Guru/PKG", checked: false },
      { label: "Jurnal / Catatan refleksi Guru", checked: false },
      { label: "Jurnal / Catatan refleksi Siswa", checked: false },
      { label: "SK dan jadwal Kombel", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 7,
    pj: "Hj. Ulfa & Liyas",
    kriteria: "Melaksanakan refleksi program pengembangan kompetensi PTK secara berkala dan Pengelolaan Sumber daya Sekolah",
    bukti: "1. Dokumen Evadir PKG 2. Rencana Pengembangan Profesional 3. Kinerja Guru BK 4. Pengelolaan ASET",
    checklistItems: [
      { label: "Dokumen Evadir Guru", checked: false },
      { label: "Program Perencanaan PKB", checked: false },
      { label: "Dokumen kegiatan PKB", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 8,
    pj: "Irmayanti & Isnan",
    kriteria: "Menyusun Laporan pelaksanaan RKAS/LPJ BOS; dan Mengomunikasikan laporan kegiatan dan Anggaran sekolah kepada pemangku kepentingan",
    bukti: "1. Dokumen laporan RKAS 2. LPJ BOS 3. Pemanfaatan sarana (LCD/Smart TV)",
    checklistItems: [
      { label: "Undangan dan daftar hadir penyusunan laporan Pelaksanaan RKAS", checked: false },
      { label: "Dokumen Laporan pelaksanaan RKAS", checked: false },
      { label: "Dokumen LPJ BOS", checked: false },
      { label: "Dokumen pemanfaatan sarana pembelajaran", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 9,
    pj: "Fida",
    kriteria: "Menyusun rencana pengembangan sekolah jangka menengah, dan pendek dalam rangka mencapai visi, misi, dan tujuan sekolah",
    bukti: "Rencana Pengembangan sekolah (RKJM, RKT), RKAS, SK Tim Penjamin Mutu. Dokumen proses penyusunan.",
    checklistItems: [
      { label: "Daftar hadir, foto dan notulen kegiatan perencanaan pengembangan sekolah", checked: false },
      { label: "RKJM dan RKT", checked: false },
      { label: "RKAS", checked: false },
      { label: "SK Tim Penjamin Mutu", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 10,
    pj: "Usron",
    kriteria: "Mengembangkan struktur organisasi sekolah yang efektif dan efisien sesuai dengan kebutuhan",
    bukti: "Struktur Organisasi Sekolah dan Tupoksinya. Surat tugas / SK Penyusun kurikulum",
    checklistItems: [
      { label: "Struktur Organisasi Sekolah dan tupoksinya", checked: false },
      { label: "SK Penyusun Kurikulum", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 11,
    pj: "Fida",
    kriteria: "Melaksanakan pengembangan sekolah sesuai dengan rencana jangka menengah dan jangka pendek sekolah menuju tercapainya visi, misi dan tujuan sekolah",
    bukti: "Dokumen RKJM, RKT, RKAS, Dokumen proses penyusunan (buku Notulen, daftar hadir, dan foto foto kegiatan).",
    checklistItems: [
      { label: "Daftar hadir, foto dan notulen penyusunan RKJM, RKT dan RKAS", checked: false },
      { label: "RKJM, RKT dan RKAS menuju tercapainya VISI dan MISI Sekolah", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 12,
    pj: "Irmayanti & Putri DO",
    kriteria: "Mewujudkan peningkatan kinerja sekolah yang signifikan sesuai dengan visi, misi, dan tujuan sekolah dan standar nasional pendidikan",
    bukti: "Peningkatan kinerja : 8 SNP; Peningkatan nilai skor rapor pendidikan seperti Literasi Numerasi dll",
    checklistItems: [
      { label: "Anggaran Peningkatan Kinerja Sekolah yang meliputi 8 SNP", checked: false },
      { label: "Anggaran Peningkatan Nilai skor Rapor Pendidikan", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 13,
    pj: "Muslich & Isnan",
    kriteria: "Melakukan monitoring, evaluasi, dan pelaporan pelaksanaan program kegiatan sekolah dengan prosedur yang tepat",
    bukti: "Laporan hasil monitoring pelaksanaan program kegiatan sekolah (Dokumen Monev)",
    checklistItems: [
      { label: "Program monitoring pelaksanaan program sekolah", checked: false },
      { label: "Laporan hasil monitoring pelaksanaan program sekolah", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 14,
    pj: "Muslich & Isnan",
    kriteria: "Merencanakan dan menindaklanjuti hasil monitoring, evaluasi dan pelaporan",
    bukti: "Dokumen pelaksanaan program tindak lanjut hasil monitoring( daftar hadir, notulen, foto-foto)",
    checklistItems: [
      { label: "Undangan, daftar hadir, dan foto kegiatan", checked: false },
      { label: "Foto Kegiatan", checked: false },
      { label: "Dokumen tindak lanjut hasil monitoring", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 15,
    pj: "Bu Padlin & Isnan",
    kriteria: "Melaksanakan Program Pengembangan Profesional / Pengembangan diri atau Pelatihan mandiri berbasis Rumah Pendidikan untuk meningkatkan kinerja sekolah",
    bukti: "Dokumen bukti Pengembangan diri seperti pelatihan mandiri pada Ruang GTK, Seminar, kombel, IHT, diklat/bimtek",
    checklistItems: [
      { label: "Undangan, daftar hadir, dan foto kegiatan PKB", checked: false },
      { label: "Dokumen Diseminasi hasil PKB", checked: false },
      { label: "Sertifikat hasil kegiatan PKB", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  // --- KOMPONEN KEWIRAUSAHAAN ---
  {
    id: 16,
    pj: "",
    kriteria: "Menciptakan inovasi yang bermanfaat bagi pengembangan sekolah: 1) Pemetaan Kebutuhan dan Potensi orang tua, masyarakat dan lingkungan untuk pengembangan sekolah (IRB): 2) Menyusun Program Pengembangan Sekolah (PBD)",
    bukti: "1. Memiliki program Pengembangan Sekolah (Program Kerja Kepala Sekolah) 2. Dokumen pemetaan/PBD dan Analisis konteks; 3. Guru menciptakan alat inovasi yang mendukung mapelnya 4. Menggunakan IT/pembelajaran berbasis Digital di berbagai kegiatan sekolah",
    checklistItems: [
      { label: "RKJM", checked: true },
      { label: "Analisis Rapor Pendidikan", checked: true },
      { label: "Analisis Konteks", checked: false },
      { label: "Alat Inovasi Pembelajaran", checked: false },
      { label: "Pembelajaran Berbasis Digital", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 17,
    pj: "",
    kriteria: "Melaksanakan Program pengembangan sekolah dengan semangat kewirausahaan; 1) Memiliki motivasi yang kuat untuk sukses dalam melaksanakan tugas pokok dan fungsinya sebagai pemimpin pembelajaran; 2) Memiliki Inovasi dalam program dan pelaksanaan program kerja",
    bukti: "1. Dokumen Program kerja Kepala sekolah, 2. Program kerja Wakasek; 3. Program wali kelas dan Program Pembelajaran Guru; 4. Program :ketatausahaan/Administrasi. (Jadwal mengajar, Jurnal mengajar, Agenda Guru, RPP/Modul, Jurnal Kegiatan Kepsek)",
    checklistItems: [
      { label: "Program Kepala Sekolah", checked: false },
      { label: "Program Wakil Kepala Sekolah", checked: false },
      { label: "Program Wali Kelas", checked: false },
      { label: "Administrasi Guru", checked: false },
      { label: "Administrasi Kepala sekolah", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 18,
    pj: "",
    kriteria: "Melakukan komunikasi dan kolaborasi dalam menggalang sumberdaya sekolah/ Kemitraan dengan berbagai pihak untuk mengembangkan sekolah",
    bukti: "1. Dokumen MoU/Fakta Integritas bekerjasama dengan berbagai instansi (BNN/BNK, Kepolisian dan Puskesmas, Komite, Alumni, Masyarakat sekolah dalam rangka mendukung program sekolah)",
    checklistItems: [
      { label: "Dokumen MOU", checked: false },
      { label: "Laporan pelaksanaan pengembangan sekolah", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 19,
    pj: "",
    kriteria: "Bentuk kegiatan dalam pelaksanaan Program pengembangan Sekolah dengan semangat kewirausahaan / Kemitraan",
    bukti: "1. Dokumen program, laporan kegiatan, evaluasi program seperti Program sekolah Sehat, Adiwiyata, sainpreneur, berbagai bentuk kekamilan dll.",
    checklistItems: [
      { label: "Laporan Kegiatan Program sekolah", checked: false },
      { label: "Foto/Vidio Pelaksana Program Kewirausahaan", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 20,
    pj: "",
    kriteria: "Melaksanakan Refleksi program pengembangan sekolah dengan melibatkan orang tua, komunitas dan masyarakat. Menerapkan nilai dan prinsip-prinsip kewirausahaan",
    bukti: "Dokumen Refleksi pelaksanaan Program pengembangan sekolah melalui PBD berbasis Raport satuan Pendidikan.",
    checklistItems: [
      { label: "Undangan dan foto kegiatan Refleksi", checked: false },
      { label: "Notulen refleksi pelaksanaan program", checked: false },
      { label: "Tindak lanjut / solusi", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  // --- KOMPONEN SUPERVISI ---
  {
    id: 21,
    pj: "",
    kriteria: "Menyusun program supervisi akademik dalam rangka peningkatan profesionalisme guru dan tenaga kependidikan",
    bukti: "Program Supervisi",
    checklistItems: [
      { label: "SK Tim Supervisor", checked: true },
      { label: "Jadwal Supervisi", checked: true },
      { label: "Instrumen Supervisi", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 22,
    pj: "",
    kriteria: "Melaksanakan supervisi akademik terhadap guru dan Tenaga kependidkan dengan menggunakan pendekatan dan teknik supervisi yang tepat",
    bukti: "1. SK Pelaksanaan Supervisi, 2. Dokumen pelaksanaan Supervisi, 3. Dokumen hasil supervisi, 4. Evaluasi dan RTL",
    checklistItems: [
      { label: "SK Supervisor per petugas", checked: false },
      { label: "Foto / Vidio pelaksanaan supervisi", checked: false },
      { label: "Hasil Supervisi", checked: false },
      { label: "Program Evaluasi / RTL", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 23,
    pj: "",
    kriteria: "Supervisi terhadap pengelolaan kinerja guru: 1) Perencanaan e kinerja*; 2) Pemantauan/observasi kinerja dan pembinaan kinerja (dokumentasi; umpan balik; pengembangan)",
    bukti: "1. Perencanaan PKG; 2. Pelaksanaan PKG. 3. Evaluasi PKG; 4. Tindak lanjut PKG",
    checklistItems: [
      { label: "Perencanaan (foto/vidio sosialisasi)", checked: false },
      { label: "Foto /Vidio dan hasil PKG", checked: false },
      { label: "Rakap dan Evaluasi", checked: false },
      { label: "Tindak lanjut", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 24,
    pj: "",
    kriteria: "Menilai dan menindaklanjuti kegiatan supervisi akademik dalam rangka peningkatan profesionalisme guru",
    bukti: "Dokumen hasil pelaksanaan Supervisi, Evaluasi dan RTL, PKB, Workshop/pelatihan/IHT",
    checklistItems: [
      { label: "Dokumen hasil supervisi akademik", checked: false },
      { label: "Evaluasi dan RTL", checked: false },
      { label: "PKB", checked: false }
    ],
    catatan: "",
    skor: 2
  },
  {
    id: 25,
    pj: "",
    kriteria: "Melakukan refleksi terkait supervisi PTK untuk pengembangan profesional",
    bukti: "1.Dokumen refleksi hasil supervisi PTK; 2. Dokumen Rencana peningkatan profesional PTK ( MGMP, Kombel/ Pelatihan Mandiri; IHT;Workshop, seminar/webinar)",
    checklistItems: [
      { label: "Dokumen hasil supervisi PTK", checked: false },
      { label: "Dokumen refleksi hasil supervisi PTK", checked: false },
      { label: "Program peningkatan profesional PTK", checked: false },
      { label: "Kegiatan peningkatan profesional PTK", checked: false }
    ],
    catatan: "",
    skor: 2
  }
];