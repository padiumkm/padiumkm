import Image from "next/image";
import { useRouter } from "next/router";

type Modal = {
  show: boolean;
  setShow: (show: boolean) => void;
};

const Modal = ({ show, setShow }: Modal) => {
  const router = useRouter();

  return (
    <>
      {show ? (
        <div className="flex flex-col sm:flex-row justify-center items-center md:m-8 space-x-4 bg-white rounded-lg p-6">
          <div className="relative w-40 h-40 cursor-pointer p-4">
            <Image
              src={"/success.svg"}
              width={100}
              height={100}
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col text-primaryText space-y-6 w-[314px] max-w-[314px]">
            <div className="space-y-3">
              <div className="text-2xl font-[700] text-center sm:text-left">
                Konfirmasi Email Anda
              </div>
              <div className="text-base text-center sm:text-left">
                Terima kasih telah melakukan registrasi, cek email anda untuk
                melakukan aktivitas akun PaDi UMKM
              </div>
            </div>
            <div className="flex justify-center sm:justify-end space-x-4">
              <button
                onClick={() => {
                  setShow(false);
                  router.replace("/");
                }}
                className="whitespace-nowrap py-2 px-7 border rounded-lg text-white bg-primaryBlue hover:bg-opacity-70 text-base font-bold"
              >
                Kembali ke beranda
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Modal;
