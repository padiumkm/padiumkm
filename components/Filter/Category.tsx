import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

const FilterCategory: React.FC = () => {
  const categories = useSelector(
    (state: RootState) => state.CategoryReducer.categories
  );
  const history = useRouter();

  return (
    <div className="w-full lg:w-[320px] relative">
      <div className="space-y-3 overflow-y-scroll h-[420px] max-h-[420px] xl:h-[680px] p-0 md:p-4 no-scrollbar">
        <details className="group border-b pb-4" open>
          <summary className="text-base font-bold text-primaryText cursor-pointer list-none flex flex-row justify-between items-center">
            Rentang Harga
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
          </summary>
          <div className="my-6 space-y-4">
            <div className="h-10 mb-8">
              <div className="w-full">
                <div className="flex items-center space-x-1 mb-1 w-full">
                  <label className="block text-gray-700 text-sm font-bold">
                    Harga Terendah
                  </label>
                </div>
                <div className="flex border rounded-[8px] w-full py-2 px-3">
                  <input
                    className="focus:outline-none bg-transparent placeholder:text-[#8F95B2]
                                          text-sm w-full text-primaryText"
                    type="number"
                    placeholder="Contoh: 100.000"
                    pattern="^[0-9]*$"
                    // onChange={handleMinChange}
                  />
                </div>
              </div>
            </div>
            <div className="h-10 mb-8">
              <div className="w-full">
                <div className="flex items-center space-x-1 mb-1 w-full">
                  <label className="block text-gray-700 text-sm font-bold">
                    Harga Tertinggi
                  </label>
                </div>
                <div className="flex border rounded-[8px] w-full py-2 px-3">
                  <input
                    className="focus:outline-none bg-transparent placeholder:text-[#8F95B2]
                                          text-sm w-full text-primaryText"
                    type="number"
                    placeholder="Contoh: 500.000"
                    pattern="^[0-9]*$"
                    // onChange={handleMaxChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </details>

        <details className="group border-b pb-4" open>
          <summary className="text-base font-bold text-primaryText cursor-pointer list-none flex flex-row justify-between items-center">
            Lokasi
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
          </summary>
          <div className="relative mt-4 space-y-3">
            <div className="flex items-center space-x-4">
              <div className="p-0">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-secondary-70"
                />
              </div>
              <span className="text-primaryText font-[400] cursor-pointer text-xs">
                Kab. Aceh Barat
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-0">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-secondary-70"
                />
              </div>
              <span className="text-primaryText font-[400] cursor-pointer text-xs">
                Kab. Aceh Timur
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-0">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-secondary-70"
                />
              </div>
              <span className="text-primaryText font-[400] cursor-pointer text-xs">
                Kota Sawahlunto
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-0">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-secondary-70"
                />
              </div>
              <span className="text-primaryText font-[400] cursor-pointer text-xs">
                Kota Solok
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-0">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-secondary-70"
                />
              </div>
              <span className="text-primaryText font-[400] cursor-pointer text-xs">
                Kab. Banyuasin
              </span>
            </div>
            <div className="mt-4">
              <span className="text-xs font-[400] text-secondaryBlue cursor-pointer">
                Lihat Semua
              </span>
            </div>
          </div>
        </details>

        <details className="group border-b pb-4" open>
          <summary className="text-base font-bold text-primaryText cursor-pointer list-none flex flex-row justify-between items-center">
            Rating
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
          </summary>
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex p-0">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-secondary-70"
                />
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
              <div className="text-xs text-primaryText cursor-pointer">
                4 Ke Atas
              </div>
            </div>
          </div>
        </details>

        <details className="group border-b pb-4" open>
          <summary className="text-base font-bold text-primaryText cursor-pointer list-none flex flex-row justify-between items-center">
            Sertifikat
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
          </summary>
          <div className="text-primaryText text-xs whitespace-nowrap font-[400] my-4 space-y-3">
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="cursor-pointer accent-secondary-70"
              />
              <span className="text-primaryText font-[400] cursor-pointer">
                Produk Dalam Negeri
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="cursor-pointer accent-secondary-70"
              />
              <span className="text-primaryText font-[400] cursor-pointer">
                TKDN
              </span>
            </div>
          </div>
          <div className="h-10 mb-8">
            <div className="w-full">
              <div className="flex items-center mb-4 w-full">
                <label className="block text-grey-700 text-sm font-bold">
                  Nilai TKDN (%)
                </label>
              </div>
              <div className="flex border rounded-[8px] w-full py-2 px-3">
                <input
                  className="focus:outline-none bg-transparent paleceholder:text-[#8F95B2] text-sm w-full text-primaryText"
                  pattern="^[0-9]*$"
                />
              </div>
            </div>
          </div>
        </details>

        <details className="group border-b pb-4 space-y-3" open>
          <summary className="text-base mb-2 font-bold text-primaryText cursor-pointer list-none flex flex-row justify-between items-center">
            Kategori
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
          </summary>
          {categories.map((category, index) => (
            <div key={index}>
              {category.subCategory[0].name !== "" ? (
                <details className="group/category space-y-3">
                  <summary className="text-sm font-bold text-primaryText cursor-default list-none flex flex-row justify-between items-center">
                    <p>{category.name}</p>
                    <span className="group-open/category:rotate-180 transition-all cursor-pointer">
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
                  </summary>
                  {category.subCategory.map((subCategory, index) => (
                    <p
                      className="text-xs font-[400] text-primaryText cursor-pointer hover:text-secondaryBlue"
                      key={index}
                      onClick={() =>
                        history.push(
                          `/search?category=${category.name
                            .toLowerCase()
                            .replaceAll(" ", "-")
                            .replaceAll(
                              "&",
                              "and"
                            )}&subcategory=${subCategory.name
                            .toLowerCase()
                            .replaceAll(" ", "-")
                            .replaceAll("&", "and")}`
                        )
                      }
                    >
                      {subCategory.name}
                    </p>
                  ))}
                </details>
              ) : (
                <p
                  className="text-sm font-bold text-primaryText cursor-pointer"
                  onClick={() =>
                    history.push(
                      `/search?category=${category.name
                        .toLowerCase()
                        .replaceAll(" ", "-")
                        .replaceAll("&", "and")}`
                    )
                  }
                >
                  {category.name}
                </p>
              )}
            </div>
          ))}
        </details>
      </div>
    </div>
  );
};

export default FilterCategory;
