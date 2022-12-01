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
        <div className="w-full lg:w-1/4 relative">Ini Kategori</div>
        <div className="w-full lg:w-3/4">{children}</div>
      </div>
    </div>
  );
};

export default SearchLayout;
