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
      return `Menampilkan ${startItem} - ${endItem} dari ${searchResult?.pagination.total} hasil`;
    }
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

    if (path.length > 1) {
      const query = path[1].split("&page=")[0].split("=");
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
  }, [router.asPath.split("&page=")[0]]);

  return (
    <div className="my-8 space-y-8">
      <BreadCrumb breadcrumbs={breadcrumbs} />
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-[30px] lg:flex-row px-5 md:px-14">
        <div className="w-full lg:w-1/4 relative">Ini Kategori</div>
        <div className="w-full lg:w-3/4">{children}</div>
      </div>
    </div>
  );
};

export default SearchLayout;
