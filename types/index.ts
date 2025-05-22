export type ProductPartnersType = {
  name: string;
  logo: string;
};

export type ProductInformationType = {
  "Product Name": string;
  "INCI Name": string;
  "CAS Number": string;
  "EINECS Number": string;
  REACH: string;
  "Shelf Life": string;
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
  productInformation: ProductInformationType;
  partners: ProductPartnersType[];
};
