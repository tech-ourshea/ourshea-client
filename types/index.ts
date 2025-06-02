export type ProductPartnersType = {
  name: string;
  logo: string;
};

export type ProductImagesType = {
  small: string;
  medium: string;
  large: string;
  banner: string;
};

export type ProductType = {
  name: string;
  slug: string;
  url: string;
  images: ProductImagesType;
  details: string[];
  features: Object;
  benefits: string[];
  specifications?: Object;
  ingredients?: Object;
  applications?: Object;
  storage?: string[];
  "Minimum Order Quantity (MOQ)"?: string;
  "Lead Time"?: string;
};
