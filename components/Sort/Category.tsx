import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSorting } from "../../lib/slice/sliceSorting";
import { RootState } from "../../lib/store";

const SortCategory: React.FC<{
  show: boolean;
  setShow: (show: boolean) => void;
}> = ({ show, setShow }) => {
  const initialOption = ["Ulasan", "Harga Terendah", "Harga Tertinggi"];
  // const [show, setShow] = useState<boolean>(false);
  const [option, setOption] = useState<string[]>(initialOption);
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();
  const sorting = useSelector((state: RootState) => state.SortingReducer.sort);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShow(true);
    const value = e.target.value;
    setInput(value);
    if (value === "") {
      setOption(initialOption);
    } else {
      const newOption = initialOption.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setOption(newOption);
    }
  };

  const onSelectOption = (select: string) => {
    console.log(select);

    dispatch(addSorting(select));
    setInput(select);
    setShow(false);
  };

  const onRemoveSorting = () => {
    dispatch(addSorting(""));
    setInput("");
    setShow(false);
  };

  return (
    <details className="group relative" open={show}>
      <summary className="bg-gray-100 py-2 px-4 rounded-lg text-sm text-primaryText list-none flex flex-row justify-between items-center border-2 border-transparent group-open:border-blue-300 hover:border-gray-300">
        <input
          className="bg-transparent focus:outline-none"
          type="text"
          placeholder="Urutkan berdasarkan"
          onClick={() => setShow(true)}
          value={input}
          onChange={onChangeInput}
        />
        {sorting.length > 0 && (
          <span onClick={onRemoveSorting}>
            <svg
              height="20"
              width="20"
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
            </svg>
          </span>
        )}
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
      <div
        className="bg-white border z-20 p-3 rounded-lg shadow-md absolute mt-2 w-full outer"
      >
        <div className="space-y-1 text-sm text-primaryText">
          {option.map((item, index) => (
            <p
              key={index}
              className="cursor-pointer outer"
              onClick={() => onSelectOption(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </details>
  );
};

export default SortCategory;
