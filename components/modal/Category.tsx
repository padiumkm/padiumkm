import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../lib/slice/sliceCategory";
import { RootState } from "../../lib/store";

const Category: React.FC = () => {
  const { showCategory } = useSelector(
    (state: RootState) => state.ModalReducer
  );
  const { categories } = useSelector(
    (state: RootState) => state.CategoryReducer
  );
  const dispatch = useDispatch();
  const [category, setCategory] = useState<string>(categories[0].name);

  useEffect(() => {
    fetch("http://localhost:9001/api/v1/category/").then((res) => {
      res.json().then((data) => {
        const resp = data.data;
        dispatch(addCategory(resp));
      });
    });
  }, []);

  return (
    <>
      {showCategory ? (
        <div className="overflow-hidden w- right-0 origin-top-right absolute mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none cursor-default z-50 top-8 left-0 w-fit">
          <div className="py-1">
            <div className="flex w-full max-h-[400px]">
              <div className="w-[320px] md:w-[320px] overflow-y-auto">
                {categories.map((category, index) => (
                  <Link
                    href={{
                      pathname: "/search",
                      query: {
                        category: category.name
                          .toLowerCase()
                          .replaceAll(" ", "-")
                          .replaceAll("&", "and"),
                      },
                    }}
                    key={index}
                  >
                    <div
                      className="hover:bg-tertiery p-2 cursor-pointer rounded-lg whitespace-nowrap"
                      onMouseEnter={() => setCategory(category.name)}
                    >
                      {category.name}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="w-[400px] overflow-y-auto p-4 hidden md:block">
                <div className="space-y-1">
                  {categories
                    .find((item) => item.name === category)
                    ?.subCategory.map((subCategory, index) => (
                      <Link
                        href={{
                          pathname: "/search",
                          query: {
                            category: category
                              .toLowerCase()
                              .replaceAll(" ", "-")
                              .replaceAll("&", "and"),
                            subcategory: subCategory.name
                              .toLowerCase()
                              .replaceAll(" ", "-")
                              .replaceAll("&", "and"),
                          },
                        }}
                        key={index}
                      >
                        <div className="font-[400] text-primaryText cursor-pointer hover:text-secondaryBlue">
                          {subCategory.name}
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Category;
