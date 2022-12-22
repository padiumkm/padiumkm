import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/Layout/Main";
import Link from "next/link";
import Button from "../../components/button/Button";
import Counter from "../../components/detailProduct/Counter";
import Card from "../../components/detailProduct/Card";
import { BsFillShareFill, BsClock } from "react-icons/bs";
import { SlPencil } from "react-icons/Sl";
import { IProductCard } from "../../components/productCard/IProductCard";
import Review from "../../components/detailProduct/Review";
import { useState } from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import Alert from "../../components/modal/Alert";
import { hideAlert, showAlert } from "../../lib/slice/sliceModal";

interface IProduct {
  product: IProductCard;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const ProductDetail: NextPageWithLayout<IProduct> = ({ product }) => {
  const [show, setShow] = useState(false);
  const [qty, setQty] = useState(1);
  const [indexImg, setIndexImg] = useState(0);
  const token = getCookie("token");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleIncre = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const handleDecre = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  let domNode = useClickOutside(() => {
    setShow(false);
  });

  const addToCart = async () => {
    if (token) {
      const res = await fetch(
        `http://localhost:9003/api/v1/cart/${product.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        const data = await res.json().then((data) => data.data[0]);

        // const cart = {
        //   id: data.id,
        //   product: {
        //     item: product,
        //     quantity: data.quantity + qty,
        //     notes: "",
        //   },
        // };

        // dispatch(updateQuantity(cart));

        const res2 = await fetch(
          `http://localhost:9003/api/v1/cart/${data.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              quantity: data.quantity + qty,
            }),
          }
        );

        if (res2.status === 200) {
          dispatch(showAlert());
        }
      } else if (res.status === 409) {
        const res2 = await fetch(`http://localhost:9003/api/v1/cart/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            itemId: product.id,
            quantity: qty,
          }),
        });
        if (res2.status === 200) {
          dispatch(showAlert());
        }
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flex flex-col lg:h-screen py-10 relative">
      <Head>
        <title>PaDi UMKM</title>
      </Head>
      <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50">
        <Alert
          header={"Berhasil"}
          body={"Berhasil menambahkan barang"}
          icon={"success.svg"}
          button={[
            {
              text: "Ok",
              onClick: () => {
                dispatch(hideAlert());
              },
              primary: true,
            },
          ]}
        />
      </div>
      <div
        className="flex flex-col h-full pb-10 px-5 lg:px-28 xl:flex-row"
        ref={domNode}
      >
        <div className="flex flex-col h-full pb-10 xl:flex-row flex-[3]">
          {/* image */}
          <div className="flex flex-col items-center xl:w-[432px]">
            <div className="flex flex-col items-center justify-center ">
              <div className="h-96 w-96 relative bg-gray-400">
                <Image
                  src={product.image[indexImg]}
                  fill
                  alt={product.name}
                  className="object-cover"
                />
              </div>
              <div className="flex gap-3 mt-5">
                {product.image.map((img, index) => (
                  <div
                    className={`relative w-20 h-20 cursor-pointer ${
                      index === indexImg && "border-2 border-secondaryBlue"
                    }`}
                    key={index}
                    onMouseEnter={() => setIndexImg(index)}
                  >
                    <Image src={img} fill alt="Image" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full relative py-10"></div>
            <button className="flex justify-center items-center hover:scale-110 transition-all space-x-[10px] mb-10 lg:mb-0">
              <div className="flex justify-center items-center text-paletteText-primary">
                <BsFillShareFill size={30} className="pr-2" />
                <div>Bagikan</div>
              </div>
            </button>
          </div>
          {/* info */}
          <div className=" w-full mx-0 lg:mx-10">
            <Card {...product} />
            {/* counter */}
            <div className="w-full space-y 5 text-primaryText mb-4">
              <div className="font-semibold mb-2">Jumlah</div>
              <div className="flex">
                <div className="relatif flex items-center border-[1px] text-primaryText rounded-sm leading-tight w-40 false">
                  <Counter
                    quantity={qty}
                    increase={handleIncre}
                    decrease={handleDecre}
                  />
                </div>
              </div>
            </div>
            {/* Note */}
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
                      className="flex items-center text-secondaryBlue font-[700] space-x-3 cursor-pointer"
                    >
                      <SlPencil className="w-6 h-6" />
                      <div>Keterangan Tambahan</div>
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* button */}
            <div className="flex flex-col h-full space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row">
              <Link href={"/"}>
                <Button className="h-10 w-60">Chat</Button>
              </Link>
              <Button primary className="h-10 w-60" onClick={addToCart}>
                Tambah Keranjang
              </Button>
            </div>
          </div>
        </div>
        {/* Pengiriman */}
        <div className="flex-[1] mt-5 lg:mt-0">
          <div className="border-[1px] rounded-2xl p-5 mx-0 space-y-8 lg:mx-0">
            <div className="text-primaryText font-[600]">Pengiriman</div>
            <div className="flex items-start space-x-4">
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-xl text-paletteText-inactive"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                  ></path>
                  <circle
                    cx="256"
                    cy="192"
                    r="48"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  ></circle>
                </svg>
              </div>
              <div className="flex flex-col space-y-4 text-primaryText">
                <div className="space-y-1">
                  <div className="text-sm text-paletteText-inactive">
                    DIkirim Dari
                  </div>
                  <div className="text-sm dont-[600] text-paletteText-inactive">
                    Jakarta
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-paletteText-inactive">
                    Pengiriman Ke
                  </div>
                  <div className="whitespace-normal mb-4">-</div>
                  <div>
                    <button className="text-secondaryBlue font-bold cursor-pointer">
                      Ubah Alamat
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-xl text-paletteText-inactive"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <div className="flex flex-col space-y-4 text-primaryText text-sm">
                <div className="space-y-1">
                  <div className="text-primaryText-inactive text-sm">
                    Ongkir
                  </div>
                  <div className="text-primaryText text-sm font-[600]">0</div>
                </div>
                <div className="space-y-1">
                  <div className="text-primaryText-inactive text-sm">
                    Estimasi Tiba
                  </div>
                  <div className="text-primaryText text-sm font-[600]">s/d</div>
                </div>
                <div className="space-y-1">
                  <div className="text-primaryText-inactive text-sm">Kurir</div>
                  <span>
                    <span className="flex items-center space-x-2 cursor-pointer">
                      <div className="text-paletteText-primary text-sm font-[600]"></div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* toko */}
      <div className="flex pb-10 px-5 md:px-0">
        <div className="w-full lg:mx-28 border-[1px] space-y-4 border-borderCard-textFieldBorder rounded-lg p-4">
          <div className="flex justify-between w-full">
            <div className="flex items-center space-x-8">
              <div className="relative w-[56px] h-[56px] flex-none">
                <img src="/toko.webp" />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="text-base font-semibold text-primaryText cursor-pointer">
                  Toko Ini
                </div>
                <div className="flex text-sm text-primaryText-inactive">
                  Lokasi
                  <div className="flex mx-2 ">
                    <BsClock className="mr-2 mt-1" />
                    Terakhir Online
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-20">
              <div className="hidden items-center justify-around divide-x-[1px] lg:flex divide-[#EBEBED]">
                <div className="flex flex-col justify-center items-center space-y-1 px-10">
                  <div className="flex items-center justify-center space-x-[4.5px]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      className="text-[#F89E35]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                    <div className="text-xs flex-nowrap">{product.rating}</div>
                  </div>
                  <div className="text-xs whitespace-nowrap">Rating Ulasan</div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-1 px-10">
                  <div className="flex items-center justify-center space-x-[4.5px]">
                    <div className="text-sm font-medium flex-nowrap">
                      {product.sold}
                    </div>
                  </div>
                  <div className="text-xs whitespace-nowrap">Total Order</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Deatil dan Review */}
      {/* <div className="w-full px-5">
                <div className="border-b border-borderCard-divider lg:mx-28">
                    <ul className="flex flex-wrap -mb-px space-x-6">
                        <li>Ulasan</li>
                        <li>Review</li>
                    </ul>

                    <Review/>
                </div>
            </div> */}
    </div>
  );
};

ProductDetail.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default ProductDetail;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await fetch(`http://localhost:9002/api/v1/item/all/1`);
  const data = await res.json().then((data) => data.data.data);

  const paths = data.map((item: IProductCard) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<IProduct, Params> = async (
  context
) => {
  const { id } = context.params!;
  const res = await fetch(`http://localhost:9002/api/v1/item/${id}`);

  const product: IProductCard = await res.json().then((data) => {
    return {
      id: data.data[0].id,
      name: data.data[0].name,
      price: data.data[0].price,
      image: [data.data[0].image, "https://picsum.photos/200"],
      rating: 4,
      sold: data.data[0].sold,
      avail: data.data[0].available_stock,
      location: data.data[0].location,
      review: 10,
    };
  });
  return {
    props: {
      product,
    },
  };
};
