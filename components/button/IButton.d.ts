export interface IButton {
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
  size?: "small" | "medium" | "large";
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
