import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IBreadCrumb {
  href: string;
  label: string;
}

const SearchLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const BreadCrumb = dynamic(() => import("../breadcrumb/Breadcrumb"));

  const router = useRouter();
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

    if (path.length > 1) {
      const query = path[1].split("=");
      if (query[0] === "category") {
        const category = query[1].replaceAll("-", " ").replaceAll("and", "&");
        const label = category.charAt(0).toUpperCase() + category.slice(1);
        setBreadcrumbs((prevBreadcrumb) => [
          ...prevBreadcrumb,
          { href: router.asPath, label },
        ]);
      }
    } else {
      setBreadcrumbs(initialBreadcrumbs);
    }
  }, [router.asPath]);

  console.log(breadcrumbs);

  return (
    <div className="my-8 space-y-8">
      <BreadCrumb breadcrumbs={breadcrumbs} />
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-[30px] lg:flex-row px-5 md:px-14">
        <div className="w-full lg:w-[320px] relative space-y-3 divide-y overflow-y-scroll
                        h-[420px] max-h-[420px] xl:h-[680px] p-0 md:p-4 no-scrollbar">
          {/* Harga */}
          <div className="flex flex-col false">
            <div className="flex items-center justify-between false">
              <div className="text-sm font-bold text-primaryText">Rentang Harga</div>
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
                                      placeholder="Contoh: 100.000" 
                                      pattern="^[0-9]*$" />
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
                                      placeholder="Contoh: 500.000" 
                                      pattern="^[0-9]*$" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lokasi */}
          <div className="flex flex-col pt-4">
              <div className="flex items-center justify-between false">
                <div className="text-sm font-bold text-primaryText">Lokasi</div>
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
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-0">
                    <input type="checkbox" className="cursor-pointer accent-secondary-70"/>
                  </div>
                </div>
              </div>
          </div>

          {/* Sertifikat */}
          <div className="flex flex-col pt-4">
              <div className="flex items-center justify-between false">
                <div className="text-sm font-bold text-primaryText">Sertifikat</div>
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
            </div>
            <div className="mt-4 space-y-2 text-primaryText"></div>
          </div>
        
        </div>
        <div className="w-full lg:w-3/4">{children}</div>
      </div>
    </div>
  );
};

export default SearchLayout;
