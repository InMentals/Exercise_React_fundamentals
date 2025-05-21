import { getLatestAdverts } from "./service";
import { useEffect, useState } from "react";
import type { Advert } from "./types";
import Layout from "../../components/layout/layout";

function AdvertsPage() {
  const [adverts, setAdverts] = useState<Advert[]>([]);

  useEffect(() => {
    async function getAdverts() {
      const adverts = await getLatestAdverts();
      setAdverts(adverts);
    }
    getAdverts();
  }, []);

  return (
    <Layout title="Adverts:">
      <div>
        <h1>Adverts Page</h1>
        <ul>
          {adverts.map((advert) => (
            <li key={advert.id}>
              <h2>{advert.name}</h2>
              <strong>{advert.sale ? "Sale" : "Buy"}</strong>
              <data value={advert.price}>
                {new Intl.NumberFormat("es-ES", {
                  style: "currency",
                  currency: "EUR",
                }).format(advert.price)}
              </data>
              <img src="foto.jpg" alt={advert.name} />
              <ul aria-label="Tags">
                {advert.tags.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default AdvertsPage;
