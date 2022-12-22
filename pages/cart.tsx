import { NextPageWithLayout } from "./_app";
import MainLayout from "../components/Layout/Main";
import Head from "next/head";
import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../lib/store";
import Image from "next/image";
import Link from "next/link";
import { SlPencil } from "react-icons/Sl";
import Counter from "../components/detailProduct/Counter";
import { decreseQuantity, increaseQuantity, removeFromCart } from "../lib/slice/sliceCart";
import { useClickOutside } from "../hooks/useClickOutside";
import Button from "../components/button/Button";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

const Cart: NextPageWithLayout = () => {
  const cart = useSelector((state: RootState) => state.CartReducer.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState<number>(0);
  const [selectedId, setSelectedId] = useState<string[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const token = getCookie("token");
  const router = useRouter();

  const domNode = useClickOutside(() => {
    setShow(false);
  });

  const onCheckAll = () => {
    if (selectedId.length === cart.length) {
      setSelectedId([]);
    } else {
      setSelectedId(cart.map((item) => item.product.item.id));
    }
  };

  const onCheck = (id: string) => {
    if (selectedId.includes(id)) {
      setSelectedId(selectedId.filter((item) => item !== id));
    } else {
      setSelectedId([...selectedId, id]);
    }
  };

  const onIncrease = async (id: number) => {
    dispatch(increaseQuantity(id));
    await fetch(`http://localhost:9003/api/v1/cart/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        quantity: cart.find((item) => item.id === id)!.product.quantity + 1,
      }),
    });
  };

  const onDecrease = async (id: number) => {
    if (cart.find((item) => item.id === id)!.product.quantity <= 1) {
      return;
    }
    dispatch(decreseQuantity(id));
    await fetch(`http://localhost:9003/api/v1/cart/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        quantity: cart.find((item) => item.id === id)!.product.quantity - 1,
      }),
    });
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, item) => {
        if (selectedId.includes(item.product.item.id)) {
          return acc + item.product.item.price * item.product.quantity;
        }
        return acc;
      }, 0)
    );
  }, [selectedId, cart]);

  return (
    <div
      className="flex flex-col lg:min-h-screen py-10 px-5 lg:px-28 relative"
      ref={domNode}
    >
      <Head>
        <title>Keranjang | PaDi UMKM</title>
      </Head>
      <h1 className="mt-6 mb-8 text-2xl font-bold">Keranjang</h1>
      {cart[0].product.item.name === "" ? (
        <div className="flex flex-col justify-center items-center py-16 space-y-4">
          <div className="flex justify-center items-center relative w-96 h-96">
            <Image src={"/empty-cart.svg"} fill alt="No Cart" />
          </div>
          <h3 className="font-bold text-lg">Belum ada barang</h3>
          <p>
            Silakan belanja dan tambahkan ke keranjang terlebih dahulu untuk
            melanjutkan transaksi
          </p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 space-x-0 lg:space-x-16 w-full">
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="divide-y-[4px]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <input
                    className="h-4 w-4 cursor-pointer accent-secondaryBlue"
                    type="checkbox"
                    name="select-all"
                    id="select-all"
                    onChange={onCheckAll}
                    checked={selectedId.length === cart.length}
                  />
                  <h2 className="text-primaryText font-semibold">
                    Pilih Semua
                  </h2>
                </div>
                <div className="font-bold text-red-600 cursor-pointer" onClick={() => dispatch(removeFromCart(selectedId))}>
                  Hapus
                </div>
              </div>
              <div className="divide-y-[4px]">
                {cart.map((item, index) => (
                  <div className="divide-y-[1px] text-primaryText" key={index}>
                    <div className="py-4 w-full">
                      <div className="flex flex-col w-full justify-between mb-6 space-y-4 md:flex-row md:items-center md:space-y-0">
                        <div className="flex items-center space-x-4 space-y-6 w-full">
                          <input
                            className="h-4 w-4 cursor-pointer accent-secondaryBlue"
                            type="checkbox"
                            name="select"
                            id="select"
                            checked={selectedId.includes(item.product.item.id)}
                            onChange={() => onCheck(item.product.item.id)}
                          />
                          <div className="relative w-20 h-20 rounded-lg">
                            <Image
                              src={item.product.item.image[0]}
                              layout="fill"
                              objectFit="cover"
                              alt="Product Image"
                              className="rounded-lg"
                            />
                          </div>
                          <Link href={`/product/${item.product.item.id}`}>
                            <div className="space-y-1">
                              <h2 className="font-semibold">
                                {item.product.item.name.toUpperCase()}
                              </h2>
                              <p>{item.product.item.avail} Tersedia</p>
                              <p className="font-semibold">
                                Rp{item.product.item.price}
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="w-full space-y-5 text-primaryText mb-4">
                          <div>
                            <div className="items-center space-x-4">
                              {show ? (
                                <input
                                  className="appearance-none z-30 border rounded-lg w-96 py-2 px-3 my-2 text-grey-darker focus:outline-none outer"
                                  placeholder="Catatan"
                                  onClick={() => setShow(true)}
                                />
                              ) : (
                                <button
                                  onClick={() => setShow(true)}
                                  className="flex items-center text-secondaryBlue font-semibold space-x-3 cursor-pointer"
                                >
                                  <SlPencil className="w-6 h-6" />
                                  <div>Catatan Untuk Penjual</div>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                        <div>
                          <Counter
                            quantity={item.product.quantity}
                            increase={() => onIncrease(item.id)}
                            decrease={() => onDecrease(item.id)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 relative">
            <div className="flex flex-col justify-between rounded-md w-full sticky top-36 border border-[#DEE3ED] bg-white text-primaryText p-8">
              <div className="divide-y-2">
                <div className="flex justify-between pb-6 font-semibold">
                  <h2>Total Harga</h2>
                  <p>Rp{total}</p>
                </div>
                <div className="pt-6">
                  <Button disabled={selectedId.length === 0} primary onClick={() => router.push("/checkout")}>
                    Beli ({selectedId.length})
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Cart.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Cart;
