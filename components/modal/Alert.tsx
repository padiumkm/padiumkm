import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import Button from "../button/Button";
import { IModalAlert } from "./IModal";

const Alert: React.FC<IModalAlert> = ({ header, body, icon, button }) => {
  const { showAlert } = useSelector((state: RootState) => state.ModalReducer);
  return (
    <>
      {showAlert ? (
        <div className="flex flex-col sm:flex-row justify-center items-center md:m-8 space-x-4 bg-white rounded-lg p-6">
          <div
            className={`relative w-40 h-40 p-4 rounded-full ${
              icon === "success.svg"
                ? "bg-green-300"
                : icon === "warning.svg"
                ? "bg-amber-300"
                : icon === "error.svg"
                ? "bg-red-300"
                : ""
            }`}
          >
            <Image
              src={`/${icon}`}
              width={100}
              height={100}
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col text-primaryText space-y-6 w-[314px] max-w-[314px]">
            <div className="space-y-3">
              <div className="text-2xl font-[700] text-center sm:text-left">
                {header}
              </div>
              <div className="text-base text-center sm:text-left">{body}</div>
            </div>
            <div className="flex justify-center sm:justify-end space-x-4">
              {button.map((item, index) => (
                <Button
                  size="medium"
                  primary={item.primary}
                  onClick={item.onClick}
                  key={index}
                >
                  {item.text}
                </Button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Alert;
