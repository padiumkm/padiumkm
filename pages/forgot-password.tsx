import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthLayout from "../components/Layout/Auth";
import { NextPageWithLayout } from "./_app";

type FormValues = {
  email: string;
};

const ForgotPassword: NextPageWithLayout = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex flex-col xl:justify-center items-center text-primaryText mt-10 xl:mt-0 mb-10 xl:mb-0">
      <Head>
        <title>Forgot Password | PaDi UMKM</title>
      </Head>
      <div className="flex flex-col justify-center items-center max-w-[445px] mx-10 xl:mx-10">
        <div className="flex justify-center items-center mb-4">
          <Image
            src={"/padlock.svg"}
            width={100}
            height={100}
            alt={"padlock"}
            className="w-[100px] h-[100px]"
          />
        </div>
        <h2 className="text-4xl font-bold mb-2">Lupa Kata Sandi?</h2>
        <p className="text-base text-center mb-8">
          Harap masukkan email Anda dan kami akan kirimkan instruksi reset kata
          sandi ke email tersebut.
        </p>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full space-y-2 mb-6">
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
          <div className="w-full mb-6">
            <button
              className="w-full py-2 bg-primaryBlue text-white rounded-lg disabled:bg-tertiery disabled:text-gray-400 hover:bg-secondaryBlue"
              disabled={errors.email ? true : false}
            >
              Reset Kata Sandi
            </button>
          </div>
        </form>
        <div className="pt-5">
          <Link href={"/login"}>
            <div className="cursor-pointer flex items-center justify-center space-x-3 w-auto group">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#182958] group-hover:text-secondaryBlue"
              >
                <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
              </svg>
              <p className="text-[#182958] font-bold group-hover:text-secondaryBlue">
                Kembali ke halaman login
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

ForgotPassword.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default ForgotPassword;
