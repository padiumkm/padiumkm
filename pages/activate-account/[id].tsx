import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveProfile } from "../../lib/slice/sliceProfile";
import jwt_decode from "jwt-decode";
import { ThreeDots } from "react-loader-spinner";

interface FormValues {
  password: string;
  confirmPassword: string;
}

interface Token {
  username: string;
  name: string;
  sub: string;
  iat: string;
  exp: string;
  iss: string;
}

const ActivateAccount: NextPage = () => {
  const router = useRouter();
  const { id } = useRouter().query;
  const dispatch = useDispatch();
  const params = id?.toString().split(":");
  const [email, setEmail] = useState("");
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);
  const [isHiddenConfirmPass, setIsHiddenConfirmPass] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  let [userId, emailToken] = params || [];

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const watchInput = watch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!errors.password && !errors.confirmPassword) {
      console.log(data);
      const req = {
        username: email,
        password: data.password,
      };
      fetch("http://localhost:9000/api/v1/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      }).then((res) => {
        if (res.status === 200) {
          fetch("http://localhost:9000/api/v1/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
          }).then((res) => {
            if (res.status === 200) {
              res.json().then((data) => {
                const decoded = jwt_decode<Token>(data.data);
                dispatch(
                  saveProfile({ name: decoded.name, email: decoded.username })
                );
                router.replace("/");
              });
            } else {
              console.log("error");
            }
          });
        }
      });
    }
  };

  useEffect(() => {
    if (params && params.length === 2) {
      [userId, emailToken] = params;
      fetch(`http://localhost:9000/api/v1/user/${userId}`, {
        method: "GET",
      }).then((res) => {
        res.json().then((data) => {
          setEmail(data.data.username);
        });
      });
    }
  }, [params]);

  return (
    <div className="w-full h-screen flex flex-col xl:justify-center items-center text-primaryText mt-10 xl:mt-0 mb-10 xl:mb-0">
      <Head>
        <title>Aktivasi Akun | PaDi UMKM</title>
      </Head>
      <div className="flex flex-col justify-center items-center w-[310px] md:w-[445px]">
        <div className="flex justify-center items-center mb-4">
          <Image
            src={"/padlock.svg"}
            width={100}
            height={100}
            alt={"padlock"}
            className="w-[100px] h-[100px]"
          />
        </div>
        <h2 className="text-4xl font-bold mb-2">Atur Kata Sandi</h2>
        <p className="text-base text-center mb-8">
          Buat password dan aktifkan akun Anda
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
              name="email"
              type="email"
              value={email}
              disabled
              className="appearance-none border rounded w-full py-2 px-3 focus:outline-none"
            />
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
                {...register("password", {
                  required: true,
                  validate: (value) => value.toString().length >= 8,
                })}
                name="password"
                type={isHiddenPassword ? "password" : "text"}
                placeholder="Masukkan Kata Sandi"
                className={`${
                  errors.password && "border-red-500"
                } appearance-none border rounded w-full py-2 px-3 focus:outline-none`}
              />
              <span
                className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2"
                onClick={() => setIsHiddenPassword(!isHiddenPassword)}
              >
                {isHiddenPassword ? (
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
              {errors.password?.type === "required" && "Kata sandi wajib diisi"}
              {errors.password?.type === "validate" &&
                "Kata sandi minimal 8 karakter"}
            </span>
          </div>
          <div className="w-full space-y-2 mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-primaryText"
            >
              Konfirmasi Kata Sandi
            </label>
            <div className="relative">
              <input
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === watchInput.password,
                })}
                name="confirmPassword"
                type={isHiddenConfirmPass ? "password" : "text"}
                placeholder="Masukkan Ulang Kata Sandi"
                className={`${
                  errors.confirmPassword && "border-red-500"
                } appearance-none border rounded w-full py-2 px-3 focus:outline-none`}
              />
              <span
                className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2"
                onClick={() => setIsHiddenConfirmPass(!isHiddenConfirmPass)}
              >
                {isHiddenConfirmPass ? (
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
              {errors.confirmPassword?.type === "required" &&
                "Konfirmasi kata sandi wajib diisi"}
              {errors.confirmPassword?.type === "validate" &&
                "Kata sandi dan konfirmasi kata sandi harus sama"}
            </span>
          </div>
          <div className="w-full space-y-1 mb-4">
            <p className="text-sm">Kata Sandi harus memiliki:</p>
            <div className="flex items-center space-x-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className={`${
                  watchInput.password.length >= 8 &&
                  watchInput.confirmPassword.length >= 8
                    ? "text-green-500"
                    : "text-gray-500"
                }`}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
              <p className="text-sm">Minimal 8 karakter</p>
            </div>
          </div>
          <div className="w-full">
            <button
              className="w-full py-2 bg-primaryBlue text-white rounded-lg disabled:bg-tertiery disabled:text-gray-400 hover:bg-secondaryBlue"
              disabled={
                errors.password || errors.confirmPassword ? true : false
              }
            >
              {isLoading ? (
                <div className="flex items-center justify-center py-2">
                  <ThreeDots color="white" height={8} />
                </div>
              ) : (
                "Simpan dan Masuk"
              )}
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

export default ActivateAccount;
