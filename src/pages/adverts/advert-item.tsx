import type { Advert } from "./types";

interface AdvertItemProps {
  advert: Advert;
}
const AdvertItem = ({ advert }: AdvertItemProps) => {
  const { name, sale, price, tags } = advert;

  return (
    <article>
      <h2>{name}</h2>
      <strong>{sale ? "Sale" : "Buy"}</strong>
      <data value={price}>
        {new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "EUR",
        }).format(price)}
      </data>
      <img src="foto.jpg" alt={name} />
      <ul aria-label="Tags">
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </article>
  );
};

export default AdvertItem;
