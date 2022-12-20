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

  return (
    <div className="my-8 space-y-8">
      <BreadCrumb breadcrumbs={breadcrumbs} />
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-[30px] lg:flex-row px-5 md:px-14">
        <div className="w-full lg:w-1/4 relative">
          <div className="space-y-3 divide-y overflow-y-scroll h-[420px] max-h-[420px] xl:h-[680px] xl:max-h-[680px] p-0 md:p-4 no-scrollbar">
            Ini Kategori
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
            <div>Ini Filter</div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SearchLayout;
