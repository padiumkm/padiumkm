export interface IProductCard {
  /**
   * The product name.
   * @default undefined
   * @required
   * @type string
   * @example
   * <ProductCard name="Product Name" />
   */
  name: string;
  /**
   * The product price.
   * @default undefined
   * @required
   * @type number
   * @example
   * <ProductCard price={100000} />
   */
  price: number;
  /**
   * The product image.
   * @default undefined
   * @required
   * @type string
   * @example
   * <ProductCard image="https://source.unsplash.com/random" />
   */
  image: string;
  /**
   * The seller location.
   * @default undefined
   * @required
   * @type string
   * @example
   * <ProductCard location="Jakarta" />
   */
  location: string;
  /**
   * The product certification.
   * @default undefined
   * @optional
   * @type boolean
   * @example
   * <ProductCard certification-image.png="New" />
   */
  produkDalamNegeri?: boolean
  /**
   * The product TKDN.
   * @default undefined
   * @optional
   * @type object
   * @example
   * <ProductCard tkdn={{name: "TKDN", value: 10}} />
   */
  tkdn?: { name: "TKDN"; value: number };
  /**
   * The product review.
   * @default undefined
   * @required
   * @type number
   * @example
   * <ProductCard review={10} />
   */
  review: number;
  /**
   * The product rating.
   * @default undefined
   * @required
   * @type number
   * @example
   * <ProductCard rating={4.5} />
   */
  rating: number;
  /**
   * The product sold.
   * @default undefined
   * @required
   * @type number
   * @example
   * <ProductCard sold={10} />
   */
  sold: number;
}
