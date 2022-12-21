export interface IModalAlert {
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

export interface IModalProfile {
  /**
   * Name user
   * @type string
   * @example
   * <Modal name="Name" />
   * @default undefined
   * @required
   */
  name: string;
  /**
   * Email user
   * @type string
   * @example
   * <Modal email="Email" />
   * @default undefined
   * @required
   */
  email: string;
}

export interface ICategory {
  name: string;
  subCategory: {
    name: string;
  }[];
}

export interface IRespCategory {
  id: number;
  category_name: string;
  subCategory: string;
  createdAt: string;
  updatedAt: string;
}