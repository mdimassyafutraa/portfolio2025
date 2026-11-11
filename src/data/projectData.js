
export const projectsData = [
  {
    id: 1,
    imgSrc: '/img/project/project-5.png',
    title: 'Sistem Antrean Nasabah',
    category: 'Bank Mandiri',
    tags: ['React', 'Supabase', 'Tailwind CSS', 'Vercel', 'Realtime'],
    projectLink: '#',

    fullDesc:
      'Mengembangkan aplikasi antrean nasabah berbasis web dengan React dan Supabase. Aplikasi ini dirancang untuk membantu petugas mengelola antrean dan memantau proses pelayanan di kantor cabang. Tersedia beberapa hak akses untuk petugas keamanan, customer service, dan admin, dengan pembaruan status antrean secara realtime.',

    highlights: [
      'Pembuatan nomor antrean dan pencatatan data nasabah.',
      'Pemantauan antrean dan status pelayanan secara realtime.',
      'Pengelolaan akun serta hak akses berdasarkan peran pengguna.',
      'Dashboard admin untuk memantau aktivitas pelayanan.',
      'Integrasi Supabase untuk penyimpanan data dan pembaruan realtime.',
    ],
  },

  {
    id: 2,
    imgSrc: '/img/project/project-1.png',
    title: 'Open House Event Management System',
    category: 'PT KAI',
    tags: ['Laravel', 'Bootstrap', 'JavaScript', 'MySQL', 'QR Code'],
    projectLink: '#',

    fullDesc:
      'Membuat aplikasi web untuk membantu proses registrasi dan pengelolaan peserta kegiatan Open House di PT KAI UPT Balai Yasa Lahat. Sistem ini digunakan untuk mencatat data pendaftar, mengatur kuota kunjungan, serta membantu panitia melakukan verifikasi peserta saat kedatangan menggunakan QR Code.',

    highlights: [
      'Pendataan peserta dan pengelolaan kuota kunjungan.',
      'Pembuatan QR Code sebagai identitas tiket peserta.',
      'Pemindaian QR Code untuk memeriksa tiket saat check-in.',
      'Pencatatan kehadiran peserta selama kegiatan berlangsung.',
      'Rekapitulasi data peserta untuk kebutuhan administrasi dan laporan.',
    ],
  },

  {
    id: 3,
    imgSrc: '/img/project/project-2.png',
    title: 'Guestbook App',
    category: 'PT KAI',
    tags: ['Laravel', 'Tailwind CSS', 'JavaScript', 'MySQL', 'Excel Export'],
    projectLink: '#',

    fullDesc:
      'Membangun prototipe aplikasi buku tamu digital untuk membantu pencatatan kunjungan di PT KAI UPT Balai Yasa Lahat. Aplikasi ini menyediakan pengelolaan data tamu, pencatatan kunjungan, serta fitur QR Code dan ekspor data ke Excel agar informasi lebih mudah dicari dan direkap.',

    highlights: [
      'Pencatatan dan pengelolaan data kunjungan tamu.',
      'Pembuatan serta pemindaian QR Code untuk identifikasi tamu.',
      'Pencarian dan pengelolaan data tamu yang sudah tercatat.',
      'Ekspor data kunjungan ke format Excel.',
      'Tampilan responsif menggunakan Tailwind CSS.',
    ],
  },

  {
    id: 4,
    imgSrc: '/img/project/project-3.png',
    title: 'LifeSyncer',
    category: 'Freelance',
    tags: ['Laravel', 'Tailwind CSS', 'JavaScript', 'Google OAuth', 'Google Calendar API'],
    projectLink: 'https://lifesyncer.com/',

    fullDesc:
      'Mengembangkan aplikasi berbasis web untuk membantu pengguna mengatur aktivitas dan jadwal harian. Proyek ini menggunakan Laravel sebagai backend serta mengintegrasikan Google OAuth dan Google Calendar API agar pengguna dapat menghubungkan akun Google dan mengelola jadwal melalui aplikasi.',

    highlights: [
      'Integrasi login menggunakan Google OAuth.',
      'Koneksi dengan Google Calendar API untuk pengelolaan jadwal.',
      'Pencatatan dan pengaturan aktivitas harian.',
      'Pengelolaan jadwal dalam satu aplikasi.',
      'Antarmuka aplikasi menggunakan Tailwind CSS.',
    ],
  },

  {
    id: 5,
    imgSrc: '/img/project/project-4.png',
    title: 'Kanagara Travel',
    category: 'Freelance',
    tags: ['WordPress', 'Custom Theme', 'Booking System', 'SEO'],
    projectLink: 'https://kanagaratravel.id/',

    fullDesc:
      'Mengembangkan website untuk bisnis perjalanan Kanagara Travel menggunakan WordPress. Website disesuaikan dengan kebutuhan bisnis, mulai dari tampilan halaman, informasi layanan perjalanan, hingga fitur pemesanan agar calon pelanggan dapat melihat pilihan paket dan menghubungi penyedia layanan dengan lebih mudah.',

    highlights: [
      'Pembuatan dan penyesuaian tampilan website WordPress.',
      'Penyajian informasi paket dan layanan perjalanan.',
      'Integrasi fitur pemesanan dan formulir kontak.',
      'Penyesuaian tampilan untuk perangkat desktop dan mobile.',
      'Pengaturan dasar SEO untuk membantu visibilitas website.',
    ],
  },
];

export const projectCategories = [
  'All',
  'Bank Mandiri',
  'PT KAI',
  'Freelance',
];
