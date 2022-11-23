import { IButton } from "./IButton";

const Button: React.FC<IButton> = ({
  primary = false,
  size = "medium",
  onClick,
  children = "Click me",
  disabled = false,
  className = "",
}) => {
  const mode = primary
    ? "bg-primaryBlue hover:bg-opacity-70 text-white"
    : "border border-primaryBlue hover:bg-primaryBlue text-primaryText hover:text-white";

  const sizeClass = size === "small" ? "px-6" : "w-full";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-2 rounded-lg font-semibold disabled:bg-tertiery disabled:text-gray-400 ${mode} ${sizeClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
