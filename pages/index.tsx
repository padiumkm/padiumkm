import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/Layout/Main";
import { IProductCard } from "../components/productCard/IProductCard";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const SwiperProduct = dynamic(() => import("../components/Swiper/Product"));
  const SwiperCategory = dynamic(() => import("../components/Swiper/Category"));
  const FAQ = dynamic(() => import("../components/FAQ/FAQ"));

  const products: IProductCard[] = [
    {
      id: "1",
      name: "Ini Produk",
      price: 10000,
      image: ["https://picsum.photos/200"],
      location: "Jakarta",
      produkDalamNegeri: true,
      tkdn: {
        name: "TKDN",
        value: 10,
      },
      review: 4,
      rating: 4,
      sold: 100,
      avail: 50,
    },
  ];

  const categories: { name: string; icon: string }[] = [
    {
      name: "Elektronik",
      icon: "/elektronik.webp",
    },
    {
      name: "Jasa Konstruksi & Renovasi",
      icon: "/konstruksi-renovasi.webp",
    },
    {
      name: "Pertukangan",
      icon: "/pertukangan.webp",
    },
    {
      name: "Office & Stationery",
      icon: "/office-stationery.webp",
    },
    {
      name: "Jasa Perawatan Peralatan & Mesin",
      icon: "/perawatan-peralatan-mesin.webp",
    },
    {
      name: "Souvenir & Merchandise",
      icon: "/souvenir-merchandise.webp",
    },
    {
      name: "Jasa Event Organizer",
      icon: "/event-organizer.webp",
    },
    {
      name: "Jasa Mandor & Tenaga Kerja Lainnya",
      icon: "/mandor-tenaga-lainnya.webp",
    },
    {
      name: "Jasa Percetakan & Media",
      icon: "/percetakan-media.webp",
    },
    {
      name: "Kesehatan",
      icon: "/kesehatan.webp",
    },
  ];

  for (let i = 0; i < 8; i++) {
    products[i] = products[0];
  }

  return (
    <section className="space-y-10 sm:space-y-16 px-5 lg:px-28 py-6">
      <Head>
        <title>PaDi UMKM</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bersama PaDi UMKM, mari tingkatkan pertumbuhan ekonomi UMKM untuk Indonesia yang lebih maju."
        />
      </Head>
      <div className="relative w-full h-full">
        <div className="relative w-full">
          <div className="aspect-w-4 aspect-h-1 w-full overflow-hidden relative text-sm">
            <Image
              src={"/banner.webp"}
              width={1440}
              height={360}
              alt="banner"
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
          <div className="absolute ml-6 mb-1 bottom-3 flex space-x-1">
            <div className="rounded-full p-1 px-5 bg-gray-100 border"></div>
            <div className="rounded-full p-1 bg-gray-100 border"></div>
            <div className="rounded-full p-1 bg-gray-100 border"></div>
            <div className="rounded-full p-1 bg-gray-100 border"></div>
            <div className="rounded-full p-1 bg-gray-100 border"></div>
          </div>
        </div>
      </div>
      <SwiperCategory title="Kategori" data={categories} />
      <SwiperProduct title={"Bersama UMKM Majukan Negeri"} data={products} />
      <SwiperProduct title={"Promo Operasi Pasar Murah"} data={products} />
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-6">
          Keuntungan Bergabung di PaDi UMKM B2B
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="w-full rounded-lg shadow-sm bg-tertiery text-primaryText py-4 space-y-5">
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <Image src={"/keuntungan-1.svg"} fill alt="gambar" />
              </div>
            </div>
            <div className="space-y-2 px-4">
              <h3 className="font-bold text-center">Kemudahan Pembiayaan</h3>
              <p className="text-sm text-center">
                UMKM bisa mengajukan permintaan pembiayaan dari BUMN terpercaya,
                seperti, Bank Mandiri, BRI, Pegadaian & PNM.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-sm bg-tertiery text-primaryText py-4 space-y-5">
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <Image src={"/keuntungan-2.svg"} fill alt="gambar" />
              </div>
            </div>
            <div className="space-y-2 px-4">
              <h3 className="font-bold text-center">Kepastian Pembayaran</h3>
              <p className="text-sm text-center">
                Termonitor langsung oleh manajemen dan kementrian BUMN.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-sm bg-tertiery text-primaryText py-4 space-y-5">
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <Image src={"/keuntungan-3.svg"} fill alt="gambar" />
              </div>
            </div>
            <div className="space-y-2 px-4">
              <h3 className="font-bold text-center">
                Pasar yang Pasti di Perusahaan BUMN
              </h3>
              <p className="text-sm text-center">
                Mendapatkan pelanggan tetap dari perusahaan BUMN.
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-sm bg-tertiery text-primaryText py-4 space-y-5">
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <Image src={"/keuntungan-4.svg"} fill alt="gambar" />
              </div>
            </div>
            <div className="space-y-2 px-4">
              <h3 className="font-bold text-center">
                Saran dan Penilaian Produk
              </h3>
              <p className="text-sm text-center">
                Mendapat masukan langsung untuk meningkatkan kualitas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </section>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
