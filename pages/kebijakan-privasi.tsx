import Head from "next/head";
import Layout from "../components/Layout/Main";
import { NextPageWithLayout } from "./_app";

const KebijakanPrivasi: NextPageWithLayout = () => {
  return (
    <div className="space-y-6 text-sm text-primaryText mx-4 lg:mx-80 mt-10 mb-20">
      <Head>
        <title>PaDi UMKM</title>
      </Head>
      <h1 className=" text-3xl text-center font-medium mb-10">
        Kebijakan Privasi
      </h1>
      <div className="space-y-3">
        <h3 className="text-2xl text-primaryText">Kebijakan Keamanan Data</h3>
        <div>
          Kebijakan Keamanan Data Pribadi oleh PaDi UMKM telah sesuai dengan
          Peraturan Menteri Komunikasi dan Informatika Republik Indonesia Nomor
          4 Tahun 2016 tentang Sistem Manajemen Pengamanan Informasi, kebijakan
          ini mengatur mengenai Pengelolaan, Pengumpulan, Penggunaan, penampilan
          data pribadi Pemilik Akun (selanjutnya disebut Pengguna).
        </div>
      </div>
      <div className="space-y-3">
        <div className="text-2xl text-primaryText">Ruang Lingkup Kebijakan</div>
        <div>
          Ruang Lingkup Kebijakan ini mencakup Data Pribadi Pengguna, yakni:
        </div>
        <ul className="ml-4 list-disc">
          <li className="custom-list-type-dot">Nama lengkap</li>
          <li>Alamat pengiriman</li>
          <li>Alamat email</li>
          <li>Nomor Telepon</li>
          <li>Informasi transaksi (produk, jumlah, dan tagihan pembayaran)</li>
          <li>Informasi perusahaan (NPWP, bank, dan rekening)</li>
        </ul>
      </div>
      <div className="space-y-3">
        <div className="text-2xl text-primaryText">
          Bagaimana PaDi UMKM Memperoleh Data Pribadi?
        </div>
        <div>
          PaDi UMKM menerima Data Pribadi melalui{" "}
          <span className="text-blue-400 cursor-pointer">
            <a href={"/"}>https://padiumkm.id</a>
          </span>{" "}
          dan aplikasi yang diunduh oleh Pengguna. PaDi UMKM dapat secara
          langsung menghubungi Pengguna melalui telepon, pesan singkat maupun
          email, untuk meminta informasi tambahan yang cukup untuk memudahkan
          pengiriman barang pada Pengguna. Dalam hal ini, Pengguna dianggap
          telah setuju pada ketentuan kebijakan ini.
        </div>
      </div>
      <div className="space-y-3">
        <div className="text-2xl text-primaryText">
          Bagaimana PaDi UMKM Menggunakan Data Pribadi Pengguna?
        </div>
        <div>
          PaDi UMKM menggunakan Data Pribadi Pengguna dengan maksud dan tujuan
          memastikan kelancaran transaksi, menganalisa penentuan kebijakan oleh
          pemerintah dan Kementerian BUMN, serta meningkat kualitas sistem dan
          pelayanan. Hal ini berlaku untuk:
          <ol className="ml-4 mt-2 list-decimal">
            <li>
              Mengelola transaksi, operasional, dan administrasi PaDi UMKM.
            </li>
            <li>
              Melakukan evaluasi yang berkaitan dengan pengelolaan kategori
              produk, pengembangan fitur, dan pengembangan bisnis lainnya oleh
              PaDi UMKM.
            </li>
            <li>
              Menangani keluhan dan masalah transaksi, pembayaran, dan
              pengiriman barang.
            </li>
            <li>
              Melakukan investigasi terkait perselisihan, penagihan, penipuan,
              dan kerusakan produk.
            </li>
          </ol>
        </div>
      </div>
      <div className="space-y-3">
        <div className="text-2xl text-primaryText">Hubungi PaDi UMKM</div>
        <div>
          Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini dan tidak
          puas dengan cara kami menangani pertanyaan atau keluhan Anda, silakan
          hubungi kami di
          <span className="text-blue-400 cursor-pointer">
            <a href={"https://mail.google.com/"}> cs@padiumkm.id</a>
          </span>
        </div>
      </div>
    </div>
  );
};

KebijakanPrivasi.getLayout = (page) => <Layout>{page}</Layout>;

export default KebijakanPrivasi;
