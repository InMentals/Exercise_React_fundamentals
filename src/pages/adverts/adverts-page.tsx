import { getLatestAdverts } from "./service";
import { useEffect, useState } from "react";
import type { Advert } from "./types";
import AdvertItem from "./advert-item";
import Button from "../../components/ui/button";
import Page from "../../components/layout/page";
import { Link } from "react-router";

//TODO: handle connection error?
//TODO: do we want to hanlde loadig state? (class 4, 3:42 min)
//TODO: handleOnClick to navigate to new advert page
//TODO: implement filters
const EmptyList = () => (
  <div>
    <p>There are no adverts published</p>
    <Button $variant="primary">Publish new advert</Button>
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
    <Page title="Adverts:">
      <div>
        <h1>Adverts Page</h1>
        {adverts.length ? (
          <ul>
            {adverts.map((advert) => (
              <li key={advert.id}>
                <Link to={`/adverts/${advert.id}`}>
                  <AdvertItem advert={advert} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </Page>
  );
}

export default AdvertsPage;
