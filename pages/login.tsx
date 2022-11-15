import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

type LoginCard = {
  title: string;
  description: string;
  image: string;
};

const Login: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [selectedCard, setSelectedCard] = useState<number>(0);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const loginCards: LoginCard[] = [
    {
      title: "Pasti Untung di PaDi UMKM!",
      description: "Berbagai promo dan penawaran menarik setiap bulannya!",
      image: "/login-card-1.svg",
    },
    {
      title: "Semua Tersedia!",
      description:
        "PaDi UMKM menyediakan berbagai kebutuhan yang diperlukan sehari-hari! Dari mulai kebutuhan kantor hingga kebutuhan pribadi, semua bisa ditemukan dalam satu pasar digital!",
      image: "/login-card-2.svg",
    },
    {
      title: "Belanja Cepat",
      description:
        "Dengan berbagai kemudahan berbelanja di PaDi UMKM, proses transaksi pembelanjaan menjadi cepat dan efisien tanpa harus melewati proses yang merepotkan.",
      image: "/login-card-3.svg",
    },
  ];

  return (
    <section className="flex justify-center items-center lg:h-screen bg-whiteBackground">
      <Head>
        <title>Login | PaDi UMKM</title>
      </Head>
      <div className="max-w-screen-lg w-full bg-white rounded-lg lg:flex overflow-hidden h-fit">
        <div className="relative bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] lg:max-w-screen-sm w-full hidden lg:flex flex-col justify-center items-center space-y-7 p-10">
          <div className="flex justify-center items-center flex-1">
            <Image
              src={loginCards[selectedCard].image}
              alt={loginCards[selectedCard].image}
              width={500}
              height={500}
              className="relative w-[300px] h-[270px]"
            />
          </div>
          <div className="space-y-4 flex-1 min-h-[144px] text-white text-center">
            <h2 className="text-2xl font-bold">
              {loginCards[selectedCard].title}
            </h2>
            <p className="font-normal">
              {loginCards[selectedCard].description}
            </p>
          </div>
          <div className="flex space-x-1 absolute bottom-3 mb-1">
            {loginCards.map((_, index) => (
              <div
                className={`rounded-full p-1 ${
                  index === selectedCard ? "w-6 bg-white" : "bg-gray-200"
                }`}
                key={index}
              ></div>
            ))}
          </div>
          <div
            className={`absolute flex justify-between px-5 ${
              selectedCard > 0 && "left-0"
            } ${selectedCard < loginCards.length - 1 && "right-0"}`}
          >
            {selectedCard > 0 && selectedCard <= loginCards.length - 1 && (
              <span
                className="cursor-pointer"
                onClick={() => setSelectedCard(selectedCard - 1)}
              >
                <div className="bg-white hover:bg-opacity-70 text-[#808C92] p-2 rounded-full">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                  </svg>
                </div>
              </span>
            )}
            {selectedCard < loginCards.length - 1 && (
              <span
                className="cursor-pointer"
                onClick={() => setSelectedCard(selectedCard + 1)}
              >
                <div className="bg-white hover:bg-opacity-70 text-[#808C92] p-2 rounded-full">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                  </svg>
                </div>
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-screen lg:h-full p-10">
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-primaryText font-bold">Login</h2>
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
            <div className="w-full space-y-2 mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-primaryText"
              >
                Kata Sandi
              </label>
              <div className="relative">
                <input
                  {...register("password", { required: true })}
                  name="password"
                  type={isHidden ? "password" : "text"}
                  placeholder="Masukkan Kata Sandi"
                  className={`${
                    errors.password && "border-red-500"
                  } appearance-none border rounded w-full py-2 px-3 focus:outline-none`}
                />
                <span
                  className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2"
                  onClick={() => setIsHidden(!isHidden)}
                >
                  {isHidden ? (
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="cursor-pointer"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="cursor-pointer"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </span>
              </div>
              <span className="text-red-500 text-xs">
                {errors.password?.type === "required" &&
                  "Kata sandi wajib diisi"}
              </span>
            </div>
            <div className="w-full mb-6">
              <button
                className="w-full py-2 bg-primary text-white rounded-lg disabled:bg-tertiery disabled:text-gray-400 hover:bg-opacity-70"
                disabled={errors.email || errors.password ? true : false}
              >
                Login
              </button>
            </div>
          </form>
          <div className="w-full mb-6">
            <p className="text-center text-sm text-primaryText">
              Lupa Kata Sandi?{" "}
              <span className="text-primary font-semibold text-sm cursor-pointer hover:text-opacity-70">
                <Link href={"/forgot-password"}>Tekan Disini</Link>
              </span>
            </p>
          </div>
          <div className="w-full mb-6">
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-black border-opacity-30"></div>
              <span className="flex-shrink mx-4 text-gray-400">Atau</span>
              <div className="flex-grow border-t border-black border-opacity-30"></div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-primaryText text-center text-sm">
              Belum Punya Akun?{" "}
              <span className="text-primary font-semibold text-sm cursor-pointer hover:text-opacity-70">
                <Link href={"/register-as"}>Daftar Sekarang</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
