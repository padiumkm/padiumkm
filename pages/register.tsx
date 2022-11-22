import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Modal from "../components/Modal";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/button/Button";

type FormValues = {
  name: string;
  email: string;
  phone: number;
};

const Register: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!errors.name && !errors.email && !errors.phone) {
      console.log(data);
      setShow(true);
    }
  };
  const [show, setShow] = useState(false);
  return (
    <section className="flex justify-center items-center lg:h-screen bg-whiteBackground relative">
      <Head>
        <title>Register | PaDi UMKM</title>
      </Head>
      <div className="absolute z-30">
        <Modal show={show} setShow={setShow} />
      </div>
      {show ? (
        <div className="absolute bg-[#808080] min-h-screen w-full z-20 bg-opacity-80" />
      ) : null}
      <div className="max-w-screen-lg w-full bg-white rounded-lg lg:flex h-fit overflow-hidden">
        <div className="flex flex-col justify-center items-center w-full h-screen lg:h-full p-10">
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-primaryText font-bold">Daftar</h2>
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
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full space-y-2 mb-4">
              <label className="block text-paletteText-primary text-sm font-semibold">
                Nama
              </label>
              <input
                {...register("name", {
                  required: true,
                  pattern: /^[a-zA-Z ]*$/,
                  validate: (value) => value.toString().length >= 2,
                })}
                className={`${
                  errors.name && "border-red-500"
                } appearance-none border rounded w-full py-2 px-3 text-grey-darker focus:outline-none false`}
                id="name"
                type="text"
                placeholder="John"
              />
              <span className="text-red-500 text-xs">
                {errors.name?.type === "required" && "Nama wajib diisi"}
                {errors.name?.type === "validate" && "Nama terlalu pendek"}
              </span>
            </div>
            <div className="w-full space-y-2 mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-primaryText"
              >
                Alamat Email
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
                })}
                name="email"
                type="email"
                placeholder="john@email.com"
                className={`${
                  errors.email && "border-red-500"
                } appearance-none border rounded w-full py-2 px-3 focus:outline-none`}
              />
              <span className="text-red-500 text-xs">
                {errors.email?.type === "required" && "Email wajib diisi"}
                {errors.email?.type === "pattern" && "Format email salah"}
              </span>
            </div>
            <div className="w-full space-y-2 mb-6">
              <label className="block text-paletteText-primary text-sm font-semibold">
                Telepon
              </label>
              <div className="relative items-center w-full border border-borderCard-divider text-paletteText-primary rounded-[8px] px-2 leading-tight sm:flex false">
                <div className="flex items-center relative w-full ">
                  <div className="flex justify-center pr-2 mr-2 border-r border-borderCard-divider text-paletteText-primary text-sm h-1/2">
                    +62
                  </div>
                  <div className="w-full h-full">
                    <input
                      {...register("phone", {
                        required: true,
                        pattern: /^[0-9]*$/,
                        validate: (value) => value.toString().length >= 8,
                      })}
                      autoComplete="none"
                      className={`${
                        errors.phone && "border-red-500"
                      } py-2 text-primaryText text-sm w-full focus:outline-none`}
                      name="phone"
                      type="number"
                      placeholder="81234567890"
                    />
                  </div>
                </div>
              </div>
              <span className="text-red-500 text-xs">
                {errors.phone?.type === "required" &&
                  "Nomor Telepon wajib diisi"}
                {errors.phone?.type === "pattern" &&
                  "Format Nomor Telepon salah"}
                {errors.phone?.type === "validate" &&
                  "Nomor Telepon minimal 8 karakter"}
              </span>
            </div>

            <div className="w-full mb-8">
              <Button
                primary
                disabled={
                  errors.name || errors.email || errors.phone ? true : false
                }
              >
                Daftar
              </Button>
            </div>
            <div className="w-full mb-2">
              <p className="text-center text-sm text-primaryText">
                Dengan mendaftar, saya menyetujui{" "}
                <span className="text-primary text-sm cursor-pointer hover:text-opacity-70">
                  <Link href={"/syarat-dan-ketentuan"}>
                    Syarat dan Ketentuan
                  </Link>
                </span>
              </p>
              <p className="text-center text-sm text-primaryText">
                serta{" "}
                <span className="text-primary text-sm cursor-pointer hover:text-opacity-70">
                  <Link href={"/kebijakan-privasi"}>Kebijakan Privasi</Link>
                </span>
              </p>
            </div>
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="w-full">
              <p className="text-center text-sm text-primaryText">
                Sudah punya akun PaDi UMKM?{" "}
                <span className="text-primaryBlue font-semibold text-sm cursor-pointer hover:text-secondaryBlue">
                  <Link href={"/login"}>Masuk</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="relative bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] lg:max-w-screen-sm w-full hidden lg:flex flex-col justify-center items-center p-10">
          <div className="space-y-4">
            <div className="text-2xl text-white font-bold text-left">
              Belanja Efisien Kemana Saja
            </div>
            <div className="text-white text-left">
              Dengan berbagai kemudahan berbelanja di PaDi UMKM, proses
              transaksi pembelanjaan menjadi cepat dan efisien tanpa harus
              melewati proses yang merepotkan. Barang akan sampai kemana pun
              yang Anda inginkan dengan aman.
            </div>
          </div>
          <div className="flex justify-center items-center flex-1">
            <Image
              src={"/login-card-1.svg"}
              alt={""}
              width={500}
              height={500}
              className="relative w-[300px] h-[270px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
