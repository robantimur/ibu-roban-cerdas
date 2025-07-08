export const articles = [
  {
    id: 1,
    slug: "pentingnya-gizi-seimbang-untuk-anak",
    title: "Pentingnya Gizi Seimbang untuk Tumbuh Kembang Anak",
    excerpt: "Memastikan anak mendapatkan gizi seimbang adalah kunci utama untuk mendukung pertumbuhan fisik dan perkembangan otaknya.",
    content: "Awal dari kesehatan anak yang optimal adalah asupan gizi yang seimbang. Ini mencakup karbohidrat, protein, lemak, vitamin, dan mineral dalam proporsi yang tepat. Karbohidrat dari nasi atau umbi-umbian memberikan energi, sementara protein dari ikan, telur, dan tempe penting untuk membangun sel-sel tubuh. Jangan lupakan sayur dan buah sebagai sumber vitamin dan serat.",
    category: "Gizi",
    author: "Dr. Amanda Larasati",
    authorImageUrl: "https://placehold.co/40x40.png",
    date: "12 Juli 2024",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "healthy food child"
  },
  {
    id: 2,
    slug: "menjaga-kesehatan-gigi-anak",
    title: "Tips Praktis Menjaga Kesehatan Gigi si Kecil",
    excerpt: "Kesehatan gigi anak sering terabaikan. Padahal, gigi yang sehat menunjang proses makan dan bicara anak.",
    content: "Mengajarkan anak untuk rajin menyikat gigi sejak dini adalah investasi kesehatan jangka panjang. Gunakan sikat gigi berbulu lembut dan pasta gigi khusus anak. Batasi konsumsi makanan manis dan perbanyak makanan berserat seperti buah-buahan. Jadwalkan pemeriksaan rutin ke dokter gigi setiap 6 bulan sekali.",
    category: "Kesehatan Gigi",
    author: "Drg. Budi Santoso",
    authorImageUrl: "https://placehold.co/40x40.png",
    date: "10 Juli 2024",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "child brushing teeth"
  },
  {
    id: 3,
    slug: "sanitasi-dan-kebersihan-rumah",
    title: "Menciptakan Lingkungan Rumah yang Bersih dan Sehat",
    excerpt: "Kebersihan rumah adalah garda terdepan untuk mencegah berbagai penyakit infeksi pada keluarga.",
    content: "Sanitasi yang baik dimulai dari kebiasaan sederhana seperti mencuci tangan dengan sabun, membuang sampah pada tempatnya, dan memastikan sirkulasi udara di dalam rumah berjalan lancar. Bersihkan area bermain anak secara rutin dan pastikan tidak ada genangan air yang bisa menjadi sarang nyamuk.",
    category: "Sanitasi",
    author: "Dr. Amanda Larasati",
    authorImageUrl: "https://placehold.co/40x40.png",
    date: "8 Juli 2024",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "clean home"
  },
  {
    id: 4,
    slug: "fase-tumbuh-kembang-balita",
    title: "Memahami Fase Tumbuh Kembang Balita",
    excerpt: "Setiap anak unik, namun ada panduan umum mengenai tahapan tumbuh kembang yang perlu orang tua ketahui.",
    content: "Pada usia 1-3 tahun, anak akan mengalami perkembangan pesat dalam kemampuan motorik, bicara, dan sosial. Stimulasi yang tepat, seperti mengajak anak bermain dan berbicara, sangat penting. Perhatikan tanda-tanda keterlambatan perkembangan dan jangan ragu berkonsultasi dengan ahli.",
    category: "Tumbuh Kembang",
    author: "Dr. Citra Wijaya",
    authorImageUrl: "https://placehold.co/40x40.png",
    date: "5 Juli 2024",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "toddler playing"
  },
];

export const communityPosts = [
  {
    id: 1,
    author: {
      name: "Rina S.",
      title: "Ibu dari 2 anak",
      avatarUrl: "https://placehold.co/48x48.png",
    },
    timestamp: "2 jam lalu",
    content: "Moms, ada tips buat anak yang lagi GTM (Gerakan Tutup Mulut) ga ya? Anakku usia 1.5 tahun lagi susah makan nih. Udah coba berbagai menu tapi dilepeh terus. Help!",
    tags: ["Gizi", "Tanya Jawab"],
    likes: 15,
    comments: 8,
  },
  {
    id: 2,
    author: {
      name: "Fitri A.",
      title: "Pemerhati Gizi",
      avatarUrl: "https://placehold.co/48x48.png",
    },
    timestamp: "1 hari lalu",
    content: "Sharing resep MPASI favorit anakku: Bubur Salmon Brokoli. Salmon kaya akan Omega-3 yang bagus buat otak, dan brokoli sumber serat. Cukup kukus semua bahan lalu haluskan. Anakku lahap banget!",
    tags: ["Resep", "MPASI"],
    likes: 42,
    comments: 12,
  },
];

export const communityEvents = [
    {
        id: 1,
        title: "Penyuluhan Gizi Seimbang & Demo Masak MPASI",
        type: "Edukasi & Workshop",
        date: "Sabtu, 27 Juli 2024",
        time: "09:00 - 12:00 WIB",
        location: "Balai Desa Roban Timur",
        attendees: 35,
        capacity: 50,
        imageUrl: "https://placehold.co/400x200.png",
        imageHint: "community health"
    },
    {
        id: 2,
        title: "Pemeriksaan Kesehatan Gigi Gratis untuk Anak",
        type: "Pemeriksaan Kesehatan",
        date: "Minggu, 4 Agustus 2024",
        time: "10:00 - Selesai",
        location: "Puskesmas Keliling (Depan Balai Desa)",
        attendees: 88,
        capacity: 100,
        imageUrl: "https://placehold.co/400x200.png",
        imageHint: "dental checkup child"
    },
    {
        id: 3,
        title: "Gerakan Jumat Bersih: Ciptakan Lingkungan Sehat",
        type: "Aksi Sosial",
        date: "Jumat, 9 Agustus 2024",
        time: "07:00 - 09:00 WIB",
        location: "Area Sekitar Roban Timur",
        attendees: 21,
        capacity: 100,
        imageUrl: "https://placehold.co/400x200.png",
        imageHint: "community cleaning"
    }
];
