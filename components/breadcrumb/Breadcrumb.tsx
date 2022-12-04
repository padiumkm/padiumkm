import Link from "next/link";

interface IBreadCrumb {
  breadcrumbs: {
    href: string;
    label: string;
  }[];
}

const BreadCrumb: React.FC<IBreadCrumb> = ({ breadcrumbs }) => {
  return (
    <nav className="flex items-center space-x-4 w-full px-5 md:px-14">
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <div className="flex items-center space-x-4" key={index}>
            <Link href={breadcrumb.href}>
              <p
                className={`${
                  index === breadcrumbs.length - 1
                    ? "text-primaryText"
                    : "text-gray-400"
                } text-sm`}
              >
                {breadcrumb.label}
              </p>
            </Link>
            {index < breadcrumbs.length - 1 && (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                className="text-xs text-gray-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default BreadCrumb;
