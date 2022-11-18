import { NextPage } from "next";
import Head from "next/head";
import parse from "html-react-parser";
import { syaratDanKetentuan } from "../data/syarat-dan-ketentuan";

const KebijakanPrivasi: NextPage = () => {
    return (
        <div className="space-y-6 text-sm text-primaryText mx-4 lg:mx-80 mt-10 mb-20">
            <Head>
                <title>PaDi UMKM</title>
            </Head>
            <h1 className="text-3xl text-center font-medium mb-10">
                Kebijakan Privasi
            </h1>
            <div className="space-y-3">
                <div className="text-2x1 text-primaryText">Kebijakan Keamanan Data</div>
                <div>Kebijakan Keamanan Data Pribadi oleh PaDi UMKM telah sesuai dengan Peraturan Menteri Komunikasi dan Informatika Republik Indonesia Nomor 4 Tahun 2016 tentang Sistem Manajemen Pengamanan Informasi, kebijakan ini mengatur mengenai Pengelolaan, Pengumpulan, Penggunaan, penampilan data pribadi Pemilik Akun (selanjutnya disebut Pengguna).</div>
            </div>
            <div className="space-y-3">
                <div className="text-2x1 text-primaryText">Ruang Lingkup Kebijakan</div>
                <div>Ruang Lingkup Kebijakan ini mencakup Data Pribadi Pengguna, yakni:</div>
                <ul className="ml-4">
                    <li className="custom-list-type-dot">Nama lengkap</li>
                    <li>Alamat pengiriman</li>
                    <li>Alamat email</li>
                </ul>
            </div>
        </div>
    );
};

export default KebijakanPrivasi;