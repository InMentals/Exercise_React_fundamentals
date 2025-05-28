export interface Advert {
  name: string;
  sale: boolean;
  price: number;
  tags: string[];
  userId: string;
  updatedAt: string;
  id: string;
}

export interface PreAdvert {
  name: string;
  sale: string;
  price: string;
  tags: string;
}
