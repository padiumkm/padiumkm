import { useEffect, useState } from "react";
import Swiper from "swiper";
import { Swiper as SwiperComp, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ProductCard from "../ProductCard";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const Product = () => {
  const [swiper, setSwiper] = useState<Swiper>();
  const [swiperState, setSwiperState] = useState({
    isBeginning: true,
    isEnd: false,
  });
  const [width] = useWindowSize();
  const ARRAY_LIST: number[] = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="relative w-full">
      <div className="flex flex-col">
        <div className="flex justify-between mb-6">
          <div className="flex items-center justify-between lg:justify-start w-full lg:w-fit">
            <h2 className="text-xl sm:text-2xl font-bold text-primaryText">
              Bersama UMKM Majukan Negeri
            </h2>
            <div className="flex items-center space-x-3 ml-8 cursor-pointer">
              <span className="sm:text-lg font-bold text-secondaryBlue">
                Lihat Semua
              </span>
              <div className="font-bold">
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
            </div>
          </div>
          <div className="space-x-3 hidden lg:flex items-center">
            <button
              className={`p-2 border rounded-md ${
                swiperState.isBeginning
                  ? "border-gray-300 text-gray-400"
                  : "border-primaryBlue bg-primaryBlue text-white"
              }`}
              disabled={swiperState?.isBeginning}
              onClick={() => swiper?.slidePrev()}
            >
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
            </button>
            <button
              className={`p-2 border rounded-md ${
                swiperState.isEnd
                  ? "border-gray-300 text-gray-400"
                  : "border-primaryBlue bg-primaryBlue text-white"
              }`}
              disabled={swiperState?.isEnd}
              onClick={() => swiper?.slideNext()}
            >
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
            </button>
          </div>
        </div>
      </div>
      <SwiperComp
        onBeforeInit={(swipper) => setSwiper(swipper)}
        onSlideChange={(swipper) => setSwiperState({ ...swipper })}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          370: {
            slidesPerView: 2,
          },
          720: {
            slidesPerView: 3,
          },
          950: {
            slidesPerView: 4,
          },
          1020: {
            slidesPerView: 5,
          },
          1210: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={5}
      >
        {ARRAY_LIST.map((item) => (
          <SwiperSlide className="p-0.5" key={item}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </SwiperComp>
    </div>
  );
};

export default Product;
