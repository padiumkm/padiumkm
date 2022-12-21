interface IAlertMessage {
  message: string;
  isShow: boolean;
  setIsShow: () => void;
}

const AlertMessage: React.FC<IAlertMessage> = ({ message, isShow, setIsShow }) => {
  return (
    <>
      {isShow ? (
        <div className="w-full mb-6">
          <div className="bg-red-100 flex items-center justify-between py-4 px-3 rounded-xl space-x-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-red-500 text-[24px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm21 312h-42V235h42v125zm0-166h-42v-42h42v42z"></path>
            </svg>
            <p className="text-xs text-left text-primaryText w-full">
              {message}
            </p>
            <svg
              onClick={setIsShow}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-red-300 text-xl cursor-pointer"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"></path>
            </svg>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AlertMessage;
