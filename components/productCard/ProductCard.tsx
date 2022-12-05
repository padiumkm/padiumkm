import Image from "next/image";
import { IProductCard } from "./IProductCard";

const ProductCard: React.FC<IProductCard> = ({
  image,
  name,
  price,
  location,
  produkDalamNegeri,
  tkdn,
  review,
  rating,
  sold,
}) => {
  return (
    <div className="flex flex-col min-h-[350px] rounded-lg shadow xl:min-w-[12rem]">
      <div className="min-h-[170px] relative">
        <Image
          src={image || "https://picsum.photos/200"}
          alt={name}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-3 space-y-1.5 text-primaryText overflow-hidden">
        <h2 className="flex-nowrap text-ellipsis number-of-line-1">{name}</h2>
        <p className="font-bold text-sm">{`Rp${price}`}</p>
        <p className="text-xs">{`Kab. ${location}`}</p>
        {produkDalamNegeri ? (
          <div className="rounded-md border border-purple-700 w-fit p-0.5 text-[10px] bg-purple-200 text-purple-700">
            Produk Dalam Negeri
          </div>
        ) : null}
        {tkdn?.name === "TKDN" ? (
          <div className="flex items-center space-x-1 italic text-xs">
            <div className="relative h-3 w-3">
              <Image src={"/favicon.ico"} alt={"logo"} fill />
            </div>
            <p>TKDN</p>
            <p>{tkdn.value}%</p>
          </div>
        ) : null}
        <div className="flex flex-row text-sm space-x-2">
          <div className="flex items-center space-x-1">
            <p className="text-xs">{review}</p>
            <p className="text-xs">Ulasan</p>
          </div>
          <div className="flex flex-row space-x-0.5">
            <div className="flex items-center text-center gap-x-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                className="text-[#F89E35]"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
            </div>
            <p className="text-xs flex-nowrap text-[#6E7C9A]">({rating})</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-xs text-secondaryBlue">
          <p>{sold}</p>
          <p>Terjual</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
