type SyaratDanKetentuan = {
  header?: string;
  body?: string[] | [];
};

export const syaratDanKetentuan: SyaratDanKetentuan[] = [
  {
    header: "Pendahuluan",
    body: [
      `<span className="font-bold">PaDi UMKM</span>, yakni platform
            pencarian Produk yang ditawarkan dan dijual oleh Usaha Mikro Kecil
            dan Menengah dengan konsep <span className="italic">Business to Business Commerce Marketplace</span>.`,
      `<span className="font-bold">Pengguna</span> adalah UMKM dan/atau
            Pembeli, merupakan pihak yang dapat mengakses serta menggunakan
            layanan PaDi UMKM.`,
      `<span className="font-bold">Pembeli</span> adalah Pengguna terdaftar
            di dalam PaDi UMKM yang akan melakukan permintaan dan pembelian atas
            Produk yang dijual oleh UMKM di PaDi UMKM.`,
      `<span className="font-bold">UMKM</span> adalah Pengguna terdaftar
            yang melakukan tindakan buka toko dan melakukan penawaran Produknya
            kepada Pembeli melalui PaDi UMKM.`,
      `<span className="font-bold">Produk</span> adalah Produk barang
            dan/atau jasa yang ditawarkan oleh UMKM untuk dipesan/ dibeli oleh
            Pembeli melalui PaDi UMKM.`,
      `<span className="font-bold">Deskripsi Produk</span> adalah suatu
            uraian yang meliputi kata, angka, gambar maupun materi dalam bentuk
            apapun yang dapat menjelaskan detil Produk secara jelas, lengkap,
            tepat dan mudah dimengerti oleh Pembeli ketika akan melakukan
            transaksi pembelian Produk yang sekurang-kurangnya terdiri dari nama
            dan spesifikasi teknis Produk, Harga Dasar, stok/ kuantiti Produk
            yang tersedia, layanan purna jual seperti detil tahapan proses retur
            maupun garansi Produk apabila terdapat kendala dikemudian hari.`,
      `<span className="font-bold">Transaksi</span> adalah aktivitas jual
            beli yang dilakukan oleh Pembeli dan UMKM yang difasilitasi melalui
            platform PaDi UMKM.`,
      `<span className="font-bold">Harga Dasar</span> adalah nilai dalam
            satuan mata uang Rupiah atas satuan Produk yang dijual oleh UMKM di
            PaDi UMKM.`,
      `<span className="font-bold">Total Pembayaran</span> adalah nilai
            akhir Transaksi dalam satuan mata uang Rupiah yang wajib dibayar
            oleh Pembeli, yang mana nominal tersebut meliputi Harga Dasar Produk
            dengan dikalikan jumlah Produk yang dibeli, biaya pengiriman Produk
            maupun biaya lain yang dipersyaratkan, termasuk namun tidak terbatas
            pada Pajak yang berlaku pada Transaksi tersebut.`,
      `<span className="font-bold">Purchase Order</span> adalah dokumen
            pemesanan yang memuat konfirmasi detil pembelian Produk yang dibuat
            Pembeli kepada UMKM melalui platform PaDi UMKM.`,
      `<span className="font-bold">Invoice</span> adalah dokumen pemesanan
            yang memuat jumlah nominal dari transaksi, yang terbit secara
            otomatis melalui platform PaDi UMKM.`,
      `<span className="font-bold">Berita Acara Serah Terima</span> adalah
            dokumen yang menunjukkan bahwa pembeli sudah menerima produk dari
            UMKM atas transaksi di platform PaDi UMKM.`,
      `<span className="font-bold">
              Pembayaran Dimuka/<span className="italic">Cash Before Delivery</span>
            </span>
            adalah metode yang mengharuskan Pembeli melakukan pembayaran
            transaksi sesuai dengan nilai Total Pembayaran sebelum Produk
            dikirimkan.`,
      `<span className="font-bold">Pembayaran Tempo/<span className="italic">Term of Payment</span></span>
            adalah metode yang mengharuskan Pembeli melakukan pembayaran
            transaksi sesuai dengan nilai Total Pembayaran paling lambat ___ x
            24 jam (sesuai dengan pemilihan durasi tempo) setelah Produk
            diterima oleh Pembeli yang dibuktikan dengan terbitnya dokumen
            Berita Acara Serah Terima dan
            <span className="italic">Invoice</span>.`,
      `<span className="font-bold">Lokasi Pengiriman</span> adalah tempat
            yang ditunjuk oleh Pembeli sebagai tujuan pengiriman Produk yang
            tercantum dalam Purchase Order.`,
      `<span className="font-bold">Rekening Transaksi</span> adalah
            rekening bersama yang disepakati oleh PaDi UMKM dan Pengguna untuk
            kelancaran pelaksanaan Transaksi oleh Pengguna.`,
      `<span className="font-bold">Hari Kalender</span> adalah seluruh hari
            berdasarkan kalender Masehi, termasuk hari Sabtu, Minggu, dan hari
            libur nasional Republik Indonesia.`,
      `<span className="font-bold">Hari Kerja</span> adalah Hari Kalender
            kecuali hari Sabtu, hari Minggu dan hari libur nasional Republik
            Indonesia, pada waktu kantor perbankan buka untuk menjalankan
            kegiatan usahanya dalam melaksanakan transaksi kliring antar bank.`,
    ],
  },
  {
    header: "Pendaftaran Akun",
    body: [
      `Pengguna memahami, menyetujui dan menyatakan diri adalah pihak yang secara hukum cakap dan mampu untuk mengikatkan dirinya dalam sebuah perjanjian yang sah berdasarkan ketentuan peraturan perundang-undangan, termasuk dalam hal mendaftarkan akun Pengguna dalam sistem PaDi UMKM.`,
      `Pengguna memahami dan menyetujui bahwa setiap proses pendaftaran akun, diperlukan adanya beberapa informasi mengenai identitas Pengguna termasuk namun tidak terbatas pada kartu tanda penduduk, kartu pegawai, nomor telepon seluler, alamat surat elektronik, dokumen dasar kewenangan Pengguna (misalnya surat kuasa, surat penetapan, dll), dokumen legalitas perusahaan serta identitas lainnya yang diperlukan dari pengguna, baik dalam format badan usaha berbadan hukum atau non badan hukum maupun perorangan.`,
      `Pengguna memahami dan menyetujui bahwa proses pendaftaran akun yang dilakukan oleh utusan/perwakilan/ kuasa dari Pengguna adalah pihak yang berwenang secara sah berdasarkan ketentuan peraturan perundang-undangan dan/atau anggaran dasar yang mengikat Pengguna secara langsung, secara sah bertindak untuk dan atas nama, termasuk namun tidak terbatas pada menandatangani segala bentuk dokumen baik yang tercetak pada selembar kertas maupun dokumen dalam bentuk digital/tercetak secara elektronik, yang diterbitkan untuk keperluan pendaftaran akun di PaDi UMKM dan berwenang untuk memberikan informasi serta instruksi yang relevan terkait Transaksi.`,
      `Pengguna memahami dan menyetujui bahwa Pengguna wajib mengelola akun secara mandiri, wajib menjaga kerahasiaan akun dan <span className="italic">password</span> serta keamanannya secara mandiri untuk semua aktivitas yang terjadi dalam akun Pengguna, wajib memastikan bahwa Pengguna telah keluar dari akun di akhir setiap sesi dan segera memberitahu secara tertulis melalui e-mail kepada PaDi UMKM jika ada penggunaan tanpa izin atas akun Pengguna.`,
      `Pengguna memahami dan menyetujui bahwa PaDi UMKM tidak pernah meminta username dan password akun maupun kode <span className="italic">Short Message Service</span> (SMS) verifikasi atau kode <span className="italic">One Time Password</span> (OTP) akun Pengguna dengan alasan apapun, oleh karena itu PaDi UMKM menghimbau Pengguna agar tidak memberikan data tersebut maupun data penting lainnya kepada pihak yang secara melanggar hukum dan tidak bertanggung jawab baik yang mengatasnamakan PaDi UMKM dan atau pihak lain yang tidak dapat dijamin keamanannya.`,
      `Pengguna memahami, menyetujui dan menyatakan bahwa PaDi UMKM tidak bertanggung jawab atas kerugian (langsung dan tidak langsung) ataupun kendala yang timbul atas penyalahgunaan akun Pengguna yang disebabkan oleh kelalaian Pengguna, termasuk namun tidak terbatas pada meminjamkan dan atau memberikan akses akun kepada pihak lain, mengakses <span className="italic">link</span> / tautan yang diberikan oleh pihak lain pada PaDi UMKM, memberikan kode verifikasi OTP, <span className="italic">password</span> atau <span className="italic">email</span> kepada pihak lain maupun kelalaian Pengguna lainnya yang mengakibatkan kerugian dan atau kendala terhadap akun Pengguna.`,
      `Pengguna memahami dan menyetujui bahwa PaDi UMKM tidak memungut biaya pendaftaran akun kepada Pengguna.`,
      `Pengguna memahami dan menyetujui bahwa PaDi UMKM memiliki kewenangan untuk melakukan tindakan tegas yang dianggap perlu terhadap akun Pengguna, baik sementara maupun permanen apabila terindikasi adanya tindakan kecurangan dalam bertransaksi dan atau pelanggaran terhadap syarat dan ketentuan PaDi UMKM.`,
      `PaDi UMKM memiliki kewenangan untuk melakukan penyesuaian jumlah transaksi toko, penyesuaian jumlah reputasi, dan/atau melakukan proses moderasi/menutup akun Pengguna, jika diketahui atau diduga adanya kecurangan oleh Pengguna yang bertujuan memanipulasi data transaksi Pengguna demi meningkatkan reputasi toko (review dan atau jumlah transaksi). Contohnya adalah melakukan proses belanja ke toko sendiri dengan menggunakan akun pribadi atau akun pribadi lainnya.`,
      `Pengguna memahami dan menyetujui bahwa untuk mempergunakan fasilitas keamanan <span className="italic">one time password</span> (OTP) maka penyedia jasa telekomunikasi terkait dapat sewaktu-waktu mengenakan biaya kepada Pengguna dengan nominal sebagai berikut (i) Rp 500 ditambah pajak 10% untuk Indosat, Tri, XL, Smartfren, dan Esia; (ii) Rp 200 ditambah pajak 10% untuk Telkomsel.`,
      `Pengguna tidak memiliki hak untuk mengubah alamat <span className="italic">email</span> yang telah didaftarkan sebelumnya, dalam hal Pengguna bermaksud melakukan perubahan alamat email maka dapat mengirimkan permintaan melalui <span className="italic">customer service</span> PaDi UMKM.`,
    ],
  },
];
