import { privateDecrypt } from "crypto";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";


interface IBreadCrumb {
  href: string;
  label: string;
}

const SearchLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const BreadCrumb = dynamic(() => import("../breadcrumb/Breadcrumb"));

  const router = useRouter();
  const searchResult = useSelector(
    (state: RootState) => state.SearchReducer.searchResult
  );
  const paginationMessage = () => {
    if (searchResult.products.length === 0) {
      return "Tidak ada hasil";
    } else {
      const startItem =
        (searchResult?.pagination.page - 1) * searchResult?.pagination.limit +
        1;
      let endItem = startItem + searchResult?.pagination.limit - 1;
      if (endItem > searchResult?.pagination.total) {
        endItem = searchResult?.pagination.total;
      }
      return `Menampilkan ${startItem} - ${endItem} dari total ${searchResult?.pagination.total} hasil`;
    }
  };
  const translateBreadCrumb = (label: string) => {
    const temp = label.replaceAll("-", " ").replaceAll("and", "&");
    return temp.charAt(0).toUpperCase() + temp.slice(1);
  };

  const initialBreadcrumbs: IBreadCrumb[] = [
    {
      href: "/",
      label: "Beranda",
    },
    { href: "/search", label: "Produk" },
  ];
  const [breadcrumbs, setBreadcrumbs] =
    useState<IBreadCrumb[]>(initialBreadcrumbs);

  useEffect(() => {
    const path = router.asPath.split("?");
    const updateBreadcrumb: IBreadCrumb[] = [...initialBreadcrumbs];

    if (path.length > 1) {
      const query = path[1]
        .split("page=")[0]
        .split("=")
        .map((item) => item.split("&")[0].split("="))
        .filter((item) => item[0] !== "category");

      if (query.length > 0) {
        query.map((item, index) => {
          updateBreadcrumb.push({
            href:
              index === 0
                ? router.asPath.split("&subcategory=")[0]
                : router.asPath,
            label: translateBreadCrumb(item[0]),
          });
        });
        setBreadcrumbs(updateBreadcrumb);
      }
    } else {
      setBreadcrumbs(initialBreadcrumbs);
    }
  }, [
    router.asPath.split("category=")[1],
    router.asPath.split("subcategory=")[1],
  ]);

  const [HargaMax, setHargaMax] = useState();
  const [HargaMin, setHargaMin] = useState();
    
  const handleMaxChange = (e) =>{
    setHargaMax(e.target.value)
    console.log(HargaMax)
  }
  const handleMinChange = (e) => {
    setHargaMin(e.target.value)
    console.log(HargaMin)
  }

  // Untuk sort select, tapi datanya belum di sambungin yu
  const [select, setSelect] = useState('')
  const handleSelect=(e)=> {
    setSelect(e.target.value)
    console.log(e.target.value);
  }
  useEffect(()=>{
    if(select === 'hargaMax'){
      price.sort((a, b)=>(a.price)>(b.price))
    }else{
      price.sort((a, b)=>(b.price)>(a.price))
    }
  })
 
  return (
    <div className="my-8 space-y-8">
      <BreadCrumb breadcrumbs={breadcrumbs} />
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-[30px] lg:flex-row px-5 md:px-14">
        <div className="w-full lg:w-[320px] relative">
          <div className="space-y-3 divide-y overflow-y-scroll
                            h-[420px] max-h-[420px] xl:h-[680px] p-0 md:p-4 no-scrollbar">
              {/* Harga */}
              <div className="flex flex-col ">
                <div className="flex items-center justify-between group">
                  <div className="text-sm font-bold text-primaryText list-none">Rentang Harga</div>
                  <span className="group-open:rotate-180 transition-all">
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
                </div>
                <div className="my-6 space-y-4">
                  <div className="h-10 mb-8">
                    <div className="w-full">
                      <div className="flex items-center space-x-1 mb-1 w-full">
                        <label className="block text-gray-700 text-sm font-bold">Harga Terendah</label>
                      </div>
                      <div className="flex border rounded-[8px] w-full py-2 px-3">
                        <input 
                          className="focus:outline-none bg-transparent placeholder:text-[#8F95B2]
                                          text-sm w-full text-primaryText" 
                                          type="number"
                                          placeholder="Contoh: 100.000" 
                                          pattern="^[0-9]*$" 
                                          onChange={handleMinChange}
                                          />
                      </div>
                    </div>
                  </div>
                  <div className="h-10 mb-8">
                    <div className="w-full">
                      <div className="flex items-center space-x-1 mb-1 w-full">
                        <label className="block text-gray-700 text-sm font-bold">Harga Tertinggi</label>
                      </div>
                      <div className="flex border rounded-[8px] w-full py-2 px-3">
                        <input 
                          className="focus:outline-none bg-transparent placeholder:text-[#8F95B2]
                                          text-sm w-full text-primaryText" 
                                          type="number"
                                          placeholder="Contoh: 500.000" 
                                          pattern="^[0-9]*$" 
                                          onChange={handleMaxChange}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Lokasi */}
              <div className="flex flex-col pt-4">
                  <div className="flex items-center justify-between false">
                    <div className="text-sm font-bold text-primaryText">Lokasi</div>
                    <span className="group-open:rotate-180 transition-all">
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
                  </div>
                  <div className="relative mt-4 space-y-3">
                    <div className="flex items-center space-x-4">
                      <div className="p-0">
                        <input type="checkbox" className="cursor-pointer accent-secondary-70"/>
                      </div>
                      <span className="text-primaryText font-[400] cursor-pointer text-xs">Kab. Aceh Barat</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-0">
                        <input type="checkbox" className="cursor-pointer accent-secondary-70"/>
                      </div>
                      <span className="text-primaryText font-[400] cursor-pointer text-xs">Kab. Aceh Timur</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-0">
                        <input type="checkbox" className="cursor-pointer accent-secondary-70"/>
                      </div>
                      <span className="text-primaryText font-[400] cursor-pointer text-xs">Kota Sawahlunto</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-0">
                        <input type="checkbox" className="cursor-pointer accent-secondary-70"/>
                      </div>
                      <span className="text-primaryText font-[400] cursor-pointer text-xs">Kota Solok</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-0">
                        <input type="checkbox" className="cursor-pointer accent-secondary-70"/>
                      </div>
                      <span className="text-primaryText font-[400] cursor-pointer text-xs">Kab. Banyumasin</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-xs font-[400] text-secondaryBlue cursor-pointer">Lihat Semua</span>
                    </div>
                  </div>
              </div>
    
              {/* Rate */}
              <div className="flex flex-col pt-4">
                  <div className="flex items-center justify-between false">
                    <div className="text-sm font-bold text-primaryText">Rating</div>
                    <span className="group-open:rotate-180 transition-all">
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
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex p-0">
                        <input type="checkbox" className="cursor-pointer accent-secondary-70"/>
                      </div>
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
                        <div className="text-xs text-primaryText cursor-pointer">4 Ke Atas</div>
                    </div>
                  </div>
              </div>
    
              {/* Sertifikat */}
              <div className="flex flex-col pt-4">
                  <div className="flex items-center justify-between false">
                    <div className="text-sm font-bold text-primaryText">Sertifikat</div>
                    <span className="group-open:rotate-180 transition-all">
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
                  </div>
                  <div className="text-primaryText text-xs whitespace-nowrap font-[400] my-4 space-y-3">
                    <div className="flex items-center space-x-4">
                      <div className="p-0">
                        <input type="checkbox" className="cursor-pointer accent-secondary-70"/>
                      </div>
                      <span className="text-primaryText font-[400] cursor-pointer">Produk Dalam Negeri</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-0">
                      <input type="checkbox" className="cursor-pointer accent-secondary-70"/>
                    </div>
                    <span className="text-primaryText font-[400] cursor-pointer">TKDN</span>
                  </div>
                  <div className="h-10 mb-8">
                    <div className="w-full">
                      <div className="flex items-center space-x-1 mb-1 w-full">
                        <label className="block text-grey-700 text-sm font-bold">Nilai TKDN (%)</label>
                      </div>
                      <div className="flex border rounded-[8px] w-full py-2 px-3">
                        <input className="focus:outline-none bg-transparent paleceholder:text-[#8F95B2] text-sm w-full text-primaryText"
                                pattern="^[0-9]*$"/>
                      </div>
                    </div>
                  </div>
              </div>
    
              {/* Kategori */}
              <div className="flex flex-col pt-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="font-bold text-primaryText">Kategori</div>
                  <span className="group-open:rotate-180 transition-all">
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
                </div>
                <div className="mt-4 space-y-2 text-primaryText"></div>
              </div>
            
          </div>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="border-b border-gray-400">
            <ul className="flex flex-wrap -mb-px space-x-6">
              <li className="mr-2">
                <div
                  className="inline-block py-4 text-center cursor-pointer text-secondaryBlue rounded-t-lg border-b-4 border-secondaryBlue active font-bold"
                  aria-current="page"
                >
                  Produk
                </div>
              </li>
              <li className="mr-2">
                <div
                  className="inline-block py-4 text-center cursor-pointer text-paletteText-inactive border-b-2 border-transparent hover:border-gray-300' hover:text-gray-600 hover:border-gray-300"
                  aria-current="page"
                >
                  Toko
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-between my-6 md:flex-row md:space-y-0">
            <div>
              {paginationMessage()} untuk{" "}
              <span className="font-semibold">
                {breadcrumbs[breadcrumbs.length - 1].label}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative text-sm text-primaryText font-[700]">Urutkan:</div>
              {/* Sorting */}
              <div>
                <select className=" py-2 px-4 border text-gray-500 bg-gray-100 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full dark:bg-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option >Urutkan Berdasarkan</option>
                  <option value="ulasan">Ulasan</option>
                  <option value="hargaMin">Harga Terendah</option>
                  <option value="hargaMax">Harga Tertinggi</option>
                </select>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SearchLayout;
