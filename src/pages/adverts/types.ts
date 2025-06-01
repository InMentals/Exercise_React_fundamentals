export interface Advert {
  name: string;
  sale: boolean;
  price: number;
  tags: string[];
  userId: string;
  createdAt: string;
  id: string;
  photo: string;
}

export interface PreAdvert {
  name: string;
  sale: string;
  price: string;
  tags: string;
  photo: File;
}
