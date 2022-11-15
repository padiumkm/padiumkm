import { NextPage } from "next";
import Head from "next/head";
import parse from "html-react-parser";
import { syaratDanKetentuan } from "../data/syarat-dan-ketentuan";

const SyaratDanKetentuan: NextPage = () => {
  return (
    <div className="space-y-6 text-sm text-primaryText mx-4 lg:mx-80 mt-10 mb-20">
      <Head>
        <title>PaDi UMKM</title>
      </Head>
      <h1 className="text-3xl text-center font-medium mb-10">
        Syarat dan Ketentuan PaDi UMKM
      </h1>
      <p className="italic">
        Selamat datang di bisnis.padiumkm.id (untuk selanjutnya disebut sebagai
        "PaDi UMKM").
      </p>
      <div>
        Syarat & ketentuan ini mengatur mengenai layanan yang diberikan oleh PT
        Metra-Net selaku anak perusahaan PT Telkom Indonesia (Persero) Tbk
        (Telkom) yang didelegasikan untuk mengelola {""}
        <span className="font-bold">PaDi UMKM</span>
        {""} (untuk selanjutnya disebut sebagai "PaDi UMKM"). Pengguna
        diwajibkan membaca dengan utuh syarat dan ketentuan ini sebelum
        mengakses PaDi UMKM lebih lanjut karena terkait dengan hak dan kewajiban
        Pengguna di bawah hukum yang berlaku.
      </div>
      <div>
        Pada saat mendaftar, memiliki akun dan mengakses PaDi UMKM, maka
        Pengguna dianggap telah membaca, mengerti, memahami, menyetujui dan
        terikat secara hukum terhadap semua isi syarat & ketentuan ini. Syarat &
        ketentuan ini merupakan bentuk kesepakatan yang sah antara Pengguna
        dengan PaDi UMKM. Jika Pengguna tidak menyetujui salah satu, sebagian,
        atau seluruh isi syarat & ketentuan, maka Pengguna tidak diperkenankan
        menggunakan layanan dalam PaDi UMKM.
      </div>
      <ol type="A" className="type-a">
        {syaratDanKetentuan.map((syarat, index) => (
          <li key={index} className="ml-4 mb-4">
            {syarat.header ? (
              <h3 className="font-bold uppercase">{syarat.header}</h3>
            ) : null}
            {syarat.body ? (
              <ol className={`ml-4 list-decimal`}>
                {syarat.body.map((body, index) => (
                  <li className="font-normal" key={index}>
                    {parse(body)}
                  </li>
                ))}
              </ol>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SyaratDanKetentuan;
