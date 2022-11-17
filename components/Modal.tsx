import Image from "next/image";
import { useState } from "react";

type Modal= {
    children: string;
    className: string;
    disabled: boolean;
}
const Modal = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="w-full py-2 bg-primary text-white rounded-lg disabled:bg-tertiery disabled:text-gray-400 hover:bg-opacity-70" 
        onClick={()=>setShow(true)}
      >
      </button>

      {show ? (
        <div className="flex flex-col sm:flex-row justify-center items-center md:m-8 space-x-4">
            <div className="relative w-40 h-40 cursor-pointer p-4">
                <Image src={"/alert-success-icon.svg"} 
                    alt="logo"
                    className="w-full h-full"/>
            </div>
            <div className="flex flex-col text-primaryText space-y-6 w-[314px] max-w-[314px]">
                <div className="space-y-3">
                    <div className="text-2x1 font-[700] text-center sm:text-left">Konfirmasi Email Anda</div>
                    <div className="text-base text-center sm:text-left">
                        Terima kasih telah melakukan registrasi, cek email anda untuk melakukan aktivitas akun PaDi UMKM 
                    </div>
                </div>
                <div className="flex justify-center sm:justify-end space-x-4">
                    <button onClick={() => {
                            setShow(false);}}
                            className="whitespace-nowrap py-2 px-7 border rounded-lg text-white bg-secondary-70 hover:bg-secondary-40 text-base font-bold">
                            Kembali ke beranda
                    </button>
                </div>
            </div>
        </div>
      ): null}
    </>
  );
}
export default  Modal;