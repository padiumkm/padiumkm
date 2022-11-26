import { deleteCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { hideProfile } from "../../lib/slice/sliceModal";
import { deleteProfile } from "../../lib/slice/sliceProfile";
import { RootState } from "../../lib/store";
import Button from "../button/Button";
import { IModalProfile } from "./IModal";

const Profile: React.FC<IModalProfile> = ({ name, email }) => {
  const { showProfile } = useSelector((state: RootState) => state.ModalReducer);
  const router = useRouter();
  const dispatch = useDispatch();

  const list = [
    {
      name: "Pembayaran",
      link: "/transaction/payment",
      icon: "/credit-card.svg",
    },
    {
      name: "Daftar Transaksi",
      link: "/transaction",
      icon: "/transaction.svg",
    },
    {
      name: "Alamat Pengiriman",
      link: "/dashboard/address",
      icon: "/map.svg",
    },
  ];

  const handleLogout = () => {
    deleteCookie("token");
    dispatch(deleteProfile());
    dispatch(hideProfile());
    router.replace("/login");
  };

  return (
    <>
      {showProfile ? (
        <div className="absolute overflow-hidden cursor-default mt-10 origin-top-right right-0 w-[396px] bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <div className="text-gray-700 block px-4 py-2 text-sm">
              <div className="flex items-center justify-between space-x-3">
                <div className="relative w-16 h-10">
                  <Image
                    src={"/avatar.svg"}
                    alt="profile"
                    fill
                    sizes="16"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-full overflow-hidden">
                  <p className="text-primaryText whitespace-nowrap">{name}</p>
                  <p className="text-[#8D8D97] text-xs">Buyer Retail</p>
                </div>
                <Button
                  primary
                  size="small"
                  className="text-xs whitespace-nowrap"
                  onClick={() => router.push("/dashboard/profile")}
                >
                  Lihat Profile
                </Button>
              </div>
            </div>
            <div className="border-t-2 w-full mx-4 my-2" />
            {list.map((item, index) => (
              <Link href={item.link} key={index}>
                <div className="flex items-center space-x-4 px-4 py-2 cursor-pointer hover:bg-tertiery">
                  <div className="relative w-6 h-6">
                    <Image src={item.icon} alt={item.name} fill />
                  </div>
                  <p>{item.name}</p>
                </div>
              </Link>
            ))}
            <div className="border-t-2 w-full mx-4 my-2" />
            <div
              className="flex items-center space-x-4 px-4 py-2 cursor-pointer hover:bg-tertiery"
              onClick={handleLogout}
            >
              <div className="relative w-6 h-6">
                <Image src={"/logout.svg"} alt="logout" fill />
              </div>
              <p>Keluar</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Profile;
