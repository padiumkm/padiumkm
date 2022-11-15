import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const RegisterAs: NextPage = () => {
  return (
    <section className="flex justify-center items-center lg:h-screen bg-whiteBackground">
      <Head>
        <title>Register | PaDi UMKM</title>
      </Head>
      <div className="max-w-screen-lg w-full bg-white rounded-lg lg:flex overflow-hidden">
        <div className="flex flex-col justify-center items-center h-screen lg:h-full w w-full p-10">
          <div className="w-full mb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-primaryText font-bold">
                Daftar Sebagai
              </h2>
              <Link href={"/"}>
                <Image
                  src={"/logo.svg"}
                  width={100}
                  height={100}
                  className="relative w-24 h-24 cursor-pointer"
                  alt="Logo"
                  priority={true}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <Link href={"/register"}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 w-full bg-tertiery rounded-lg py-3 px-5 sm:space-x-5 cursor-pointer hover:bg-gray-200 mb-4">
                <div className="flex justify-center items-center">
                  <Image
                    src={"/buyer.svg"}
                    alt="buyer"
                    width={24}
                    height={24}
                    className="relative w-16 h-16"
                  />
                </div>
                <div className="flex flex-col justify-center text-primaryText space-y-1">
                  <h3 className="font-bold text-lg text-center sm:text-left">
                    Pembeli Retail
                  </h3>
                  <p className="text-base text-center sm:text-left">
                    Dapatkan diskon dan promo menarik setiap hari
                  </p>
                </div>
              </div>
            </Link>
            <Link href={"https://seller.padiumkm.id/register"}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 w-full bg-tertiery rounded-lg py-3 px-5 sm:space-x-5 cursor-pointer hover:bg-gray-200 mb-4">
                <div className="flex justify-center items-center">
                  <Image
                    src={"/seller.svg"}
                    alt="seller"
                    width={24}
                    height={24}
                    className="relative w-16 h-16"
                  />
                </div>
                <div className="flex flex-col justify-center text-primaryText space-y-1">
                  <h3 className="font-bold text-lg text-center sm:text-left">
                    Penjual
                  </h3>
                  <p className="text-base text-center sm:text-left">
                    Dapatkan diskon dan promo menarik setiap hari
                  </p>
                </div>
              </div>
            </Link>
            <div className="border border-gray-200 mb-6" />
            <div className="w-full">
              <p className="text-center text-sm text-primaryText">
                Sudah punya akun PaDi UMKM?{" "}
                <Link href={"/login"}>
                  <span className="text-[#182958] font-bold cursor-pointer hover:text-secondaryBlue">
                    Masuk
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="relative text-white bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] w-full hidden lg:flex flex-col justify-center items-center p-10">
          <div className="flex justify-center items-center">
            <Image
              src={"/register-as.svg"}
              width={100}
              height={100}
              alt="register-as"
              className="relative w-[400px] h-[400px]"
            />
          </div>
          <h2 className="text-2xl  font-bold text-center mb-4">
            Bersama PaDi UMKM
          </h2>
          <p className="text-center">
            Mari tingkatkan pertumbuhan ekonomi UMKM untuk Indonesia yang lebih
            maju.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterAs;
