import type { Advert } from "./types";
import "./advert-item.css";

interface AdvertItemProps {
  advert: Advert;
}
const AdvertItem = ({ advert }: AdvertItemProps) => {
  const { name, sale, price, tags } = advert;

  return (
    <article className="advert">
      <h2>{name}</h2>
      <strong className={sale ? "sell" : "buy"}>{sale ? "Sell" : "Buy"}</strong>
      <data value={price}>
        {new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "EUR",
        }).format(price)}
      </data>
      <ul aria-label="Tags" className="tags-container">
        {tags.map((tag) => (
          <li className="tag">{tag}</li>
        ))}
      </ul>
    </article>
  );
};

export default AdvertItem;
