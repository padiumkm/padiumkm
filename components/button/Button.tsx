interface IButton {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   * @default 'medium'
   * @type 'small' | 'medium'
   * @example
   * <Button size="small">Small</Button>
   * <Button size="medium">Medium</Button>
   * @default 'medium'
   * @optional
   */
  size?: "small" | "medium";
  /**
   * Disable button
   * @type boolean
   * @example
   * <Button disabled>Click me</Button>
   * <Button disabled={false}>Click me</Button>
   * @default false
   * @optional
   */
  disabled?: boolean;
  /**
   * Optional click handler
   * @type function
   * @example
   * <Button onClick={handleClick}>Click me</Button>
   * @default undefined
   * @optional
   */
  onClick?: () => void;
  /**
   * children component
   * @type React.ReactNode
   * @example
   * <Button>Click me</Button>
   * @default undefined
   * @optional
   */
  children?: React.ReactNode;
  /**
   * Custom class name
   * @type string
   * @example
   * <Button className="custom-class">Click me</Button>
   * @default undefined
   * @optional
   */
  className?: string;
}

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

  const sizeClass = size === "small" ? "px-6" : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 rounded-lg font-semibold disabled:bg-tertiery disabled:text-gray-400 ${mode} ${sizeClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
