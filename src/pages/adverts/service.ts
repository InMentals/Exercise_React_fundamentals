import { client } from "../../api/client";
import type { Advert, PreAdvert } from "./types";

const ADVERTS_URL = "/api/v1/adverts";

export const getLatestAdverts = async () => {
  const response = await client.get<Advert[]>(ADVERTS_URL);
  return response.data;
};

export const getAdvert = async (advertId: string) => {
  const url = `${ADVERTS_URL}/${advertId}`;
  const response = await client.get<Advert>(url);
  return response.data;
};

export const createAdvert = async (advert: PreAdvert) => {
  const formData = new FormData();
  formData.append("name", advert.name);
  formData.append("sale", advert.sale);
  formData.append("price", advert.price);
  formData.append("tags", advert.tags);
  if (advert.photo) formData.append("photo", advert.photo);

  const response = await client.post<Advert>(ADVERTS_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getTags = async () => {
  const url = `${ADVERTS_URL}/tags`;
  const response = await client.get<string[]>(url);
  return response.data;
};

export const deleteAdvert = async (advertId: string) => {
  const url = `${ADVERTS_URL}/${advertId}`;
  const response = await client.delete<Advert>(url);
  return response.data;
};
