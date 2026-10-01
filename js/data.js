const caseData = {
  kdrt: {
    title: "Kekerasan dalam Rumah Tangga (KDRT)",
    badge: "Pidana • Kekerasan",
    pengertian: "Kekerasan dalam Rumah Tangga adalah setiap perbuatan terhadap seseorang terutama perempuan yang berakibat timbulnya kesengsaraan atau penderitaan secara fisik, seksual, psikologis, dan/atau penelantaran rumah tangga, termasuk ancaman untuk melakukan perbuatan, pemaksaan, atau perampasan kemerdekaan secara melawan hukum dalam lingkup rumah tangga.",
    pasal: [
      "UU No. 23 Tahun 2004 tentang Penghapusan Kekerasan dalam Rumah Tangga (UU PKDRT).",
      "Pasal 5 UU PKDRT: Larangan kekerasan fisik, psikis, seksual, dan penelantaran rumah tangga.",
      "Pasal 44 UU PKDRT: Kekerasan fisik diancam pidana penjara maksimal 5 tahun atau denda maksimal Rp15 juta. Jika mengakibatkan sakit/luka berat: maksimal 10 tahun. Jika menyebabkan kematian: maksimal 15 tahun.",
      "Pasal 45 UU PKDRT: Kekerasan psikis diancam pidana penjara maksimal 3 tahun atau denda maksimal Rp9 juta.",
      "Pasal 46–48 UU PKDRT: Kekerasan seksual dalam rumah tangga."
    ],
    studi: "Contoh: Suami yang secara berulang memukul istri hingga mengalami luka memar dan trauma psikis. Korban dapat melapor ke polisi, didampingi oleh lembaga perlindungan perempuan, dan pelaku dapat dijerat Pasal 44 UU PKDRT. Hakim juga dapat menjatuhkan pidana tambahan berupa pembatasan gerak pelaku dan program konseling."
  },
  seksual: {
    title: "Kekerasan Seksual",
    badge: "Pidana • Kekerasan",
    pengertian: "Kekerasan seksual mencakup berbagai perbuatan yang menyerang integritas tubuh dan kehormatan seksual seseorang tanpa persetujuan, termasuk pelecehan seksual fisik/non-fisik, perkosaan, perbuatan cabul, dan bentuk kekerasan seksual berbasis elektronik.",
    pasal: [
      "UU No. 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual (UU TPKS).",
      "Pasal 4 UU TPKS: Jenis-jenis tindak pidana kekerasan seksual (pelecehan nonfisik, fisik, pemaksaan kontrasepsi, perkosaan, dll).",
      "KUHP (lama & baru): Pasal tentang perkosaan dan perbuatan cabul (sebelumnya Pasal 285, 289, 290 KUHP lama; kini diatur lebih luas dalam KUHP baru).",
      "UU PKDRT juga mengatur kekerasan seksual dalam lingkup rumah tangga."
    ],
    studi: "Contoh: Pelecehan seksual di tempat kerja atau perkosaan. Korban dapat melapor berdasarkan UU TPKS yang memberikan perlindungan lebih komprehensif, termasuk hak atas restitusi, pendampingan, dan pemulihan. Proses penyidikan mempertimbangkan trauma korban."
  },
  bersama: {
    title: "Kekerasan Secara Bersama-sama",
    badge: "Pidana • Kekerasan",
    pengertian: "Kekerasan yang dilakukan oleh dua orang atau lebih secara bersama-sama (turut serta) terhadap korban. Dalam hukum pidana, perbuatan ini dapat dikualifikasikan sebagai penyertaan (deelneming) sehingga semua pelaku dapat dimintai pertanggungjawaban.",
    pasal: [
      "Pasal 55 KUHP (penyertaan): Mereka yang melakukan, menyuruh melakukan, atau turut serta melakukan perbuatan.",
      "Pasal 170 KUHP: Kekerasan terhadap orang atau barang yang dilakukan secara bersama-sama di muka umum.",
      "Dapat digabung dengan pasal penganiayaan (Pasal 351 dst.) atau pasal kekerasan lainnya tergantung akibat yang ditimbulkan."
    ],
    studi: "Contoh: Sekelompok orang memukuli korban di tempat umum hingga luka-luka. Semua yang terlibat aktif dapat dijerat Pasal 170 jo. Pasal 55 KUHP, dengan ancaman pidana yang lebih berat karena dilakukan secara bersama-sama."
  },
  penganiayaan: {
    title: "Penganiayaan",
    badge: "Pidana • Kekerasan",
    pengertian: "Penganiayaan adalah perbuatan yang dengan sengaja menimbulkan rasa sakit, luka, atau merusak kesehatan orang lain. Dibedakan menjadi penganiayaan biasa, ringan, berat, dan berencana berdasarkan akibat dan unsur kesengajaan.",
    pasal: [
      "Pasal 351 KUHP (lama) / Pasal 466 KUHP baru: Penganiayaan biasa — penjara maksimal ±2 tahun 6–8 bulan. Jika luka berat: maksimal 5 tahun. Jika mati: maksimal 7 tahun.",
      "Pasal 352 KUHP: Penganiayaan ringan — penjara maksimal 3 bulan.",
      "Pasal 353 KUHP: Penganiayaan berencana — penjara maksimal 4 tahun (lebih tinggi jika luka berat/mati).",
      "Pasal 354 KUHP: Penganiayaan berat — penjara maksimal 8 tahun (10 tahun jika mengakibatkan kematian)."
    ],
    studi: "Contoh: Seseorang memukul orang lain hingga mengalami patah tulang (luka berat). Pelaku dapat dijerat Pasal 351 ayat (2) KUHP atau pasal penganiayaan berat, tergantung niat dan akibat yang ditimbulkan. Visum et repertum menjadi bukti penting."
  },
  narkoba: {
    title: "Narkoba (Narkotika)",
    badge: "Pidana • Narkoba",
    pengertian: "Tindak pidana narkotika meliputi perbuatan memiliki, menyimpan, menguasai, menyediakan, memproduksi, mengimpor, mengekspor, mengedarkan, atau menyalahgunakan narkotika. Dibedakan berdasarkan golongan narkotika (I, II, III) dan peran pelaku (pengguna vs pengedar).",
    pasal: [
      "UU No. 35 Tahun 2009 tentang Narkotika.",
      "Pasal 111–112: Memiliki/menyimpan/menguasai Narkotika Golongan I (ancaman penjara 4–12 tahun + denda besar; lebih berat jika jumlah melebihi batas).",
      "Pasal 114: Menjual, membeli, menjadi perantara Narkotika Golongan I (ancaman sangat berat, termasuk seumur hidup/mati untuk jumlah besar).",
      "Pasal 127: Penyalah guna untuk diri sendiri — dapat dikenakan rehabilitasi medis dan sosial setelah asesmen."
    ],
    studi: "Contoh: Seseorang tertangkap membawa sabu-sabu dalam jumlah kecil untuk dikonsumsi sendiri. Setelah asesmen, dimungkinkan menjalani rehabilitasi (Pasal 127). Berbeda dengan pengedar yang membawa jumlah besar untuk diperjualbelikan — ancaman hukumannya jauh lebih berat."
  },
  korupsi: {
    title: "Tindak Pidana Korupsi",
    badge: "Pidana • Korupsi",
    pengertian: "Korupsi adalah perbuatan melawan hukum yang memperkaya diri sendiri/orang lain/korporasi dan merugikan keuangan negara atau perekonomian negara, serta mencakup suap, gratifikasi, penggelapan dalam jabatan, pemerasan, dan benturan kepentingan dalam pengadaan.",
    pasal: [
      "UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001 tentang Pemberantasan Tindak Pidana Korupsi.",
      "Pasal 2: Memperkaya diri secara melawan hukum yang merugikan keuangan negara — penjara seumur hidup atau 4–20 tahun + denda.",
      "Pasal 3: Menyalahgunakan kewenangan karena jabatan yang merugikan keuangan negara — penjara seumur hidup atau 1–20 tahun.",
      "Pasal-pasal suap, gratifikasi, dan penggelapan dalam jabatan (Pasal 5, 11, 12, 12B, dll).",
      "Catatan: Sebagian ketentuan telah disesuaikan dengan KUHP baru (UU 1/2023) yang mulai berlaku 2026."
    ],
    studi: "Contoh: Pejabat yang menerima suap dalam proses tender pengadaan barang/jasa. Dapat dijerat pasal suap dan/atau pasal kerugian negara. Proses sering melibatkan KPK, Kejaksaan, atau Kepolisian, dengan mekanisme pembuktian terbalik pada kasus tertentu."
  },
  hutang: {
    title: "Hutang Piutang",
    badge: "Perdata • Kontrak",
    pengertian: "Sengketa yang timbul dari perjanjian pinjam-meminjam uang atau barang. Jika debitur tidak memenuhi kewajiban (wanprestasi), kreditur dapat menuntut pemenuhan prestasi, ganti rugi, atau eksekusi jaminan melalui pengadilan.",
    pasal: [
      "Pasal 1754 KUHPerdata: Definisi pinjam-meminjam.",
      "Pasal 1320 KUHPerdata: Syarat sah perjanjian (kesepakatan, kecakapan, objek tertentu, sebab yang halal).",
      "Pasal 1338 KUHPerdata: Perjanjian berlaku sebagai undang-undang bagi para pihak.",
      "Pasal 1234, 1243 KUHPerdata: Wanprestasi dan ganti rugi.",
      "UU No. 4 Tahun 1996 tentang Hak Tanggungan (untuk jaminan tanah/bangunan)."
    ],
    studi: "Contoh: Debitur tidak membayar cicilan pinjaman sesuai perjanjian. Kreditur dapat mengajukan gugatan wanprestasi ke Pengadilan Negeri. Jika ada jaminan (misalnya sertifikat tanah dengan hak tanggungan), dapat dilakukan eksekusi lelang melalui mekanisme hukum yang berlaku."
  },
  tanah: {
    title: "Sengketa Tanah",
    badge: "Perdata • Pertanahan",
    pengertian: "Sengketa yang berkaitan dengan kepemilikan, penguasaan, batas, warisan, atau sertifikat tanah. Dapat diselesaikan melalui mediasi, pengadilan negeri, atau melalui Badan Pertanahan Nasional (BPN) untuk aspek administratif.",
    pasal: [
      "UU No. 5 Tahun 1960 tentang Peraturan Dasar Pokok-Pokok Agraria (UUPA).",
      "KUHPerdata (ketentuan tentang hak milik, warisan, dan perbuatan melawan hukum).",
      "Peraturan terkait sertifikasi, peralihan hak, dan penyelesaian sengketa di BPN.",
      "Untuk warisan: KUHPerdata atau Kompilasi Hukum Islam (bagi yang beragama Islam) + UU Perkawinan."
    ],
    studi: "Contoh: Dua saudara bersengketa atas tanah warisan yang belum dibagi. Salah satu pihak menguasai dan menguasai sertifikat. Penyelesaian dapat melalui mediasi keluarga, gugatan di Pengadilan Negeri/Agama, atau permohonan penetapan ahli waris."
  },
  company: {
    title: "Company / Perusahaan",
    badge: "Perdata • Bisnis",
    pengertian: "Sengketa yang timbul dalam kegiatan badan usaha, termasuk perselisihan antar pemegang saham, pelanggaran perjanjian pemegang saham, sengketa kontrak bisnis, pembubaran perusahaan, dan tanggung jawab direksi/komisaris.",
    pasal: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas (UU PT).",
      "KUHPerdata (perikatan dan perjanjian).",
      "UU No. 8 Tahun 1995 tentang Pasar Modal (jika terkait perusahaan terbuka).",
      "Ketentuan tentang perbuatan melawan hukum (Pasal 1365 KUHPerdata)."
    ],
    studi: "Contoh: Pemegang saham minoritas merasa dirugikan karena keputusan RUPS yang tidak transparan. Dapat mengajukan gugatan ke Pengadilan Negeri atau menggunakan mekanisme mediasi/arbitrase jika diatur dalam anggaran dasar atau perjanjian."
  },
  perceraian: {
    title: "Perceraian",
    badge: "Perdata • Keluarga",
    pengertian: "Proses hukum untuk memutuskan ikatan perkawinan. Melibatkan isu hak asuh anak, nafkah, dan pembagian harta bersama (gono-gini). Bagi yang beragama Islam diselesaikan di Pengadilan Agama; non-Muslim di Pengadilan Negeri.",
    pasal: [
      "UU No. 1 Tahun 1974 tentang Perkawinan (sebagaimana diubah).",
      "Kompilasi Hukum Islam (KHI) untuk yang beragama Islam.",
      "Pasal 35–37 UU Perkawinan: Harta bersama.",
      "Pasal 41 UU Perkawinan: Akibat putusnya perkawinan terhadap anak dan mantan suami/istri."
    ],
    studi: "Contoh: Istri mengajukan gugatan cerai karena kekerasan dalam rumah tangga. Pengadilan dapat mengabulkan cerai, menetapkan hak asuh anak, nafkah, dan membagi harta bersama. Jika ada unsur KDRT, dapat digabung dengan proses pidana."
  },
  konsumen: {
    title: "Perlindungan Konsumen",
    badge: "Perdata • Konsumen",
    pengertian: "Perlindungan terhadap hak-hak konsumen atas barang dan/atau jasa. Meliputi hak atas kenyamanan, keamanan, informasi yang benar, dan ganti rugi apabila barang/jasa tidak sesuai atau menimbulkan kerugian.",
    pasal: [
      "UU No. 8 Tahun 1999 tentang Perlindungan Konsumen.",
      "Pasal 4: Hak-hak konsumen.",
      "Pasal 7: Kewajiban pelaku usaha.",
      "Pasal 19: Tanggung jawab pelaku usaha atas ganti rugi.",
      "Mekanisme: BPSK (Badan Penyelesaian Sengketa Konsumen), gugatan perdata, atau laporan ke lembaga terkait."
    ],
    studi: "Contoh: Konsumen membeli produk elektronik yang rusak dalam masa garansi, namun pelaku usaha menolak mengganti. Konsumen dapat mengadu ke BPSK, YLKI, atau mengajukan gugatan ke pengadilan untuk menuntut ganti rugi."
  }
};
