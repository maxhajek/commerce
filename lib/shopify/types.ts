export type Maybe<T> = T | null;

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Edge<T> = {
  node: T;
};

export type Cart = Omit<ShopifyCart, 'lines'> & {
  lines: CartItem[];
};

export type CartProduct = {
  id: string;
  handle: string;
  title: string;
  featuredImage: Image;
};

export type CartItem = {
  id: string | undefined;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: CartProduct;
  };
};

export type Collection = ShopifyCollection & {
  path: string;
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Menu = {
  title: string;
  path: string;
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Page = {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: SEO;
  createdAt: string;
  updatedAt: string;
};

export type Product = Omit<ShopifyProduct, 'variants' | 'images'> & {
  variants: ProductVariant[];
  images: Image[];
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};

export type Customer = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type SEO = {
  title: string;
  description: string;
};

export type ShopifyCart = {
  id: string | undefined;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: Connection<CartItem>;
  totalQuantity: number;
};

export type ShopifyCollection = {
  handle: string;
  title: string;
  description: string;
  seo: SEO;
  updatedAt: string;
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: Connection<ProductVariant>;
  featuredImage: Image;
  images: Connection<Image>;
  seo: SEO;
  tags: string[];
  updatedAt: string;
};

export type ShopifyCartOperation = {
  data: {
    cart: ShopifyCart;
  };
  variables: {
    cartId: string;
  };
};

export type ShopifyCreateCartOperation = {
  data: { cartCreate: { cart: ShopifyCart } };
};

export type ShopifyAddToCartOperation = {
  data: {
    cartLinesAdd: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type ShopifyRemoveFromCartOperation = {
  data: {
    cartLinesRemove: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lineIds: string[];
  };
};

export type ShopifyUpdateCartOperation = {
  data: {
    cartLinesUpdate: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      id: string;
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type ShopifyCollectionOperation = {
  data: {
    collection: ShopifyCollection;
  };
  variables: {
    handle: string;
  };
};

export type ShopifyCollectionProductsOperation = {
  data: {
    collection: {
      products: Connection<ShopifyProduct>;
    };
  };
  variables: {
    handle: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

export type ShopifyCollectionsOperation = {
  data: {
    collections: Connection<ShopifyCollection>;
  };
};

export type ShopifyMenuOperation = {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
      }[];
    };
  };
  variables: {
    handle: string;
  };
};

export type ShopifyPageOperation = {
  data: { pageByHandle: Page };
  variables: { handle: string };
};

export type ShopifyPagesOperation = {
  data: {
    pages: Connection<Page>;
  };
};

export type ShopifyProductOperation = {
  data: { product: ShopifyProduct };
  variables: {
    handle: string;
  };
};

export type ShopifyProductRecommendationsOperation = {
  data: {
    productRecommendations: ShopifyProduct[];
  };
  variables: {
    productId: string;
  };
};

export type ShopifyProductsOperation = {
  data: {
    products: Connection<ShopifyProduct>;
  };
  variables: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

export type ShopifyCustomer = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  acceptsMarketing?: boolean;
  addresses?: Connection<Address>;
  orders?: Connection<Order>;
};

export type Address = {
  id: string;
  address1?: string;
  address2?: string;
  city?: string;
  country?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  province?: string;
  zip?: string;
};

export type Order = {
  id: string;
  orderNumber: number;
  processedAt: string;
  totalPrice: Money;
  financialStatus: string;
  fulfillmentStatus: string;
};

export type ShopifyUserError = {
  code?: string;
  field?: string[];
  message: string;
};

export type ShopifyCustomerCreateOperation = {
  data: {
    customerCreate: {
      customer: ShopifyCustomer | null;
      customerUserErrors: ShopifyUserError[];
    };
  };
  variables: {
    input: {
      email: string;
      password: string;
      firstName?: string;
      lastName?: string;
      phone?: string;
      acceptsMarketing?: boolean;
    };
  };
};

export type ShopifyCustomerAccessTokenCreateOperation = {
  data: {
    customerAccessTokenCreate: {
      customerAccessToken: {
        accessToken: string;
        expiresAt: string;
      } | null;
      customerUserErrors: ShopifyUserError[];
    };
  };
  variables: {
    input: {
      email: string;
      password: string;
    };
  };
};

export type ShopifyCustomerAccessTokenDeleteOperation = {
  data: {
    customerAccessTokenDelete: {
      deletedAccessToken: string | null;
      deletedCustomerAccessTokenId: string | null;
      userErrors: ShopifyUserError[];
    };
  };
  variables: {
    customerAccessToken: string;
  };
};

export type ShopifyCustomerRecoverOperation = {
  data: {
    customerRecover: {
      customerUserErrors: ShopifyUserError[];
    };
  };
  variables: {
    email: string;
  };
};

export type ShopifyCustomerResetOperation = {
  data: {
    customerResetByUrl: {
      customer: ShopifyCustomer | null;
      customerAccessToken: {
        accessToken: string;
        expiresAt: string;
      } | null;
      customerUserErrors: ShopifyUserError[];
    };
  };
  variables: {
    password: string;
    resetUrl: string;
  };
};

export type ShopifyCustomerUpdateOperation = {
  data: {
    customerUpdate: {
      customer: ShopifyCustomer | null;
      customerUserErrors: ShopifyUserError[];
    };
  };
  variables: {
    customerAccessToken: string;
    customer: {
      email?: string;
      firstName?: string;
      lastName?: string;
      phone?: string;
      acceptsMarketing?: boolean;
      password?: string;
    };
  };
};

export type ShopifyCustomerOperation = {
  data: {
    customer: ShopifyCustomer | null;
  };
  variables: {
    customerAccessToken: string;
  };
};
