import { getLatestAdverts } from "./service";
import { useEffect, useState } from "react";
import type { Advert } from "./types";
import Layout from "../../components/layout/layout";
import AdvertItem from "./advert-item";
import Button from "../../components/ui/button";

const EmptyList = () => (
  <div>
    <p>There are no adverts published</p>
    <Button $variant="primary">Create tweet</Button>
  </div>
);

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
        {adverts.length ? (
          <ul>
            {adverts.map((advert) => (
              <li key={advert.id}>
                <AdvertItem advert={advert} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </Layout>
  );
}

export default AdvertsPage;
