import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "../components/Layout/Main";
import Head from "next/head";
import { useSelector } from "react-redux";
import { RootState } from "../lib/store";
import Button from "../components/button/Button";
import Image from "next/image";

const Checkout: NextPageWithLayout = () => {
  const user = useSelector((state: RootState) => state.ProfileReducer.user);
  const cart = useSelector((state: RootState) => state.CartReducer.cart);

  return (
    <div className="flex flex-col lg:min-h-screen py-10 px-5 lg:px-28 relative">
      <Head>
        <title>Checkout | PaDi UMKM</title>
      </Head>
      <div className="space-y-12">
        <h1 className="mt-6 mb-8 text-2xl font-bold">Pengiriman</h1>
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0">
          <div className="flex-[3] space-y-8">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col justify-between rounded-md border border-[#DEE3ED] bg-white shadow-md text-primaryText p-8 space-y-4">
                <div className="space-y-6">
                  <h2 className="font-bold text-xl text-black">
                    Alamat Pengiriman
                  </h2>
                  <div className="space-y-1 text-sm">
                    <div className="font-bold space-x-3">
                      <span>{user.name}</span>
                      <small className="font-normal">(Kos Wisma Elok)</small>
                    </div>
                    <p>082234908633</p>
                    <p>
                      Kos Wisma Elok, Sukapura, Dayeuhkolot, Bandung, Jawa
                      Barat, 40267
                    </p>
                  </div>
                </div>
                <Button>Pilih Alamat Lain</Button>
              </div>
            </div>
            {cart.map((item, index) => (
              <div className="flex flex-col space-y-8" key={index}>
                <div className="flex flex-col justify-between rounded-md border border-[#DEE3ED] bg-white shadow-md text-primaryText p-8 space-y-4">
                  <div className="divide-y-4">
                    <div className="divide-y pb-6">
                      <div className="pb-6 space-y-4">
                        <div className="flex items-center space-x-2">
                          <div className="relative w-12 h-12">
                            <Image
                              src={"https://picsum.photos/200"}
                              fill
                              alt="Toko"
                              className="rounded-md"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-sm font-semibold">
                              Toko Keren
                            </h3>
                            <p className="text-xs">Bandung</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="relative w-16 h-16">
                            <Image
                              src={item.product.item.image[0]}
                              fill
                              alt="Toko"
                              className="rounded-md"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-sm font-semibold">
                              {item.product.item.name}
                            </h3>
                            <p className="text-xs">
                              {item.product.quantity} pcs
                            </p>
                            <p className="text-sm font-semibold">
                              Rp
                              {item.product.quantity * item.product.item.price}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center text-sm space-x-2">
                            <h3 className="font-semibold">Kode Referensi</h3>
                            <span className="text-xs bg-gray-100 p-1 rounded-md">
                              Tidak Wajib
                            </span>
                          </div>
                          <input
                            type="text"
                            className="border border-[#DEE3ED] rounded-md p-2 mt-2"
                            placeholder="123QWERT"
                          />
                        </div>
                      </div>
                      <select className="w-full" name="kurir" id="kurir">
                        <option value="jne">
                            JNE Reguler (Rp 11.000,00)
                        </option>
                      </select>
                    </div>
                    <div className="flex justify-between font-semibold pt-4">
                        <h2>Subtotal</h2>
                        <h2>Rp{item.product.quantity * item.product.item.price + 11000}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-[3] relative"></div>
        </div>
      </div>
    </div>
  );
};

Checkout.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Checkout;
