export interface IModal {
  /**
   * Show modal
   * @type boolean
   * @example
   * <Modal show={true} setShow={setShow} />
   * @default false
   * @required
   */
  show: boolean;
  /**
   * Header modal
   * @type string
   * @example
   * <Modal header="Header" />
   * @default undefined
   * @required
   */
  header: string;
  /**
   * Body modal
   * @type string
   * @example
   * <Modal body="Body" />
   * @default undefined
   * @required
   */
  body: string;
  /**
   * Icon modal
   * @type string
   * @example
   * <Modal icon="success.svg" />
   * @default undefined
   * @@required
   */
  icon: "success.svg" | "error.svg" | "warning.svg";
  /**
   * Button modal
   * @type array
   * @example
   * <Modal button={[{ text: "Button", onClick: () => {}, primary }]} />
   * @default []
   * @required
   */
  button: {
    text: string;
    onClick: () => void;
    primary?: boolean;
  }[];
}
