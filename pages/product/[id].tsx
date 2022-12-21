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
import {useState} from "react";



const ProductDetail: NextPageWithLayout = () => {
    const products: IProductCard = {
      name: "Ini Produk",
      price: 10000,
      image: "https://picsum.photos/200",
      location: "Jakarta",
      produkDalamNegeri: true,
      tkdn: {
        name: "TKDN",
        value: 10,
      },
      review: 4,
      rating: 4,
      sold: 100,
      avail: 50,
    };
    const [show, setShow] = useState(true);
    const [qty, setQty] = useState(1);

    const handleIncre = () => {
        setQty((prevQty) => prevQty + 1);
      };
    
      const handleDecre = () => {
        if (qty > 1) {
          setQty((prevQty) => prevQty - 1);
        }
      };

    return (
        <div className="flex flex-col h-full py-10">
            <div className="flex flex-col h-full pb-10 px-5 lg:px-28 xl:flex-row">
                <div className="flex flex-col h-full pb-10 xl:flex-row flex-[3]">
                    {/* image */}
                    <div className="flex flex-col items-center xl:w-[432px]">
                        <div className="flex flex-col items-center justify-center ">
                            <div className="h-full w-96 relative bg-gray-400">
                                <img src={"/produk.webp"}/>
                            </div>
                        </div>
                        <div className="flex flex-col w-full relative py-10"></div>
                        <button className="flex justify-center items-center hover:scale-110 transition-all space-x-[10px] mb-10 lg:mb-0" >
                            <div className="flex justify-center items-center text-paletteText-primary">
                                <BsFillShareFill size={30} className="pr-2"/>
                                    <div>Bagikan</div>
                            </div>
                        </button>
                    </div>
                    {/* info */}
                    <div className=" w-full mx-0 lg:mx-10">
                        <Card 
                            price={products.price}
                            name={products.name}
                            avail={products.avail}
                            sold={products.sold}
                            rating={products.rating} image={""} location={""} review={0}
                        />
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
                                    <button onClick={()=>setShow(!show)} className="flex items-center text-secondaryBlue font-[700] space-x-3 cursor-pointer">
                                        <SlPencil className="w-6 h-6"/>
                                            <div>Keterangan Tambahan</div>
                                    </button>
                                    {show?(
                                    <input className="appearance-none border rounded-lg w-96 py-2 px-3 my-2 text-grey-darker focus:outline-none"
                                            placeholder="Catatan"/>
                                    ):null}
                                </div>
                            </div>
                        </div>
                        {/* button */}
                        <div className="flex flex-col h-full space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row ">
                            <Link href={"/"}><Button className="h-10 px-8 border-secondary-70 w-96 ">Chat</Button></Link>
                            <Link href={"/"}><Button primary className="h-10 px-5 border-secondary-70 w-96">Tambah Keranjang</Button></Link>
                        </div>
                    </div>
                </div>
                {/* Pengiriman */}
                <div className="flex-[1] mt-5 lg:mt-0">
                    <div className="border-[1px] rounded-2xl p-5 mx-0 space-y-8 lg:mx-0">
                        <div className="text-primaryText font-[600]">Pengiriman</div>
                        <div className="flex items-start space-x-4">
                            <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-xl text-paletteText-inactive" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"></path><circle cx="256" cy="192" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle></svg></div>
                            <div className="flex flex-col space-y-4 text-primaryText">
                                <div className="space-y-1">
                                    <div className="text-sm text-paletteText-inactive">DIkirim Dari</div>
                                    <div className="text-sm dont-[600] text-paletteText-inactive">Jakarta</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-sm text-paletteText-inactive">Pengiriman Ke</div>
                                    <div className="whitespace-normal mb-4">-</div>
                                    <div>
                                        <button className="text-secondaryBlue font-bold cursor-pointer">Ubah Alamat</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-xl text-paletteText-inactive" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="3" width="15" height="13"></rect>
                                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                                </svg>
                            </div>
                            <div className="flex flex-col space-y-4 text-primaryText text-sm">
                                <div className="space-y-1">
                                    <div className="text-primaryText-inactive text-sm">Ongkir</div>
                                    <div className="text-primaryText text-sm font-[600]">0</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-primaryText-inactive text-sm">Estimasi Tiba</div>
                                    <div className="text-primaryText text-sm font-[600]">s/d</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-primaryText-inactive text-sm">Kurir</div>
                                    <span>
                                        <span className="flex items-center space-x-2 cursor-pointer">
                                            <div className="text-paletteText-primary text-sm font-[600]">
                                            </div>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
                                <img src="/toko.webp"/>
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="text-base font-semibold text-primaryText cursor-pointer">Toko Ini</div>
                                <div className="flex text-sm text-primaryText-inactive">Lokasi
                                        <div className="flex mx-2 "><BsClock className="mr-2 mt-1"/>Terakhir Online</div>
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
                                        <div className="text-xs flex-nowrap">{products.rating}</div>
                                    </div>
                                    <div className="text-xs whitespace-nowrap">Rating Ulasan</div>
                                </div>
                                <div className="flex flex-col justify-center items-center space-y-1 px-10">
                                    <div className="flex items-center justify-center space-x-[4.5px]">
                                        <div className="text-sm font-medium flex-nowrap">{products.sold}</div>
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
    return <MainLayout>{page}</MainLayout>
};

export default ProductDetail;
