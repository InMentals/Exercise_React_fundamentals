import { getLatestAdverts } from "./service";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { Advert } from "./types";
import AdvertItem from "./advert-item";
import { Link } from "react-router";
import FilterForm from "./filter-form";
import Page from "../../components/layout/page";
import "./adverts-page.css";
import LinkButton from "../../components/ui/link-button";

function AdvertsPage() {
  const [adverts, setAdverts] = useState<Advert[]>([]);
  const [filter, setFilter] = useState({ name: "", sale: "all" });
  const [filteredAdverts, setFilteredAdverts] = useState<Advert[]>([]);

  useEffect(() => {
    async function getAdverts() {
      const adverts = await getLatestAdverts();
      setAdverts(adverts);
      setFilteredAdverts(adverts);
    }
    getAdverts();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let applyFilter = adverts.filter((ad) =>
      ad.name.toLocaleLowerCase().includes(filter.name.toLocaleLowerCase()),
    );
    if (filter.sale === "sell")
      applyFilter = applyFilter.filter((ad) => ad.sale);
    if (filter.sale === "buy")
      applyFilter = applyFilter.filter((ad) => !ad.sale);

    setFilteredAdverts(applyFilter);
  }

  function handleReset(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilteredAdverts(adverts);
    setFilter({ name: "", sale: "all" });
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <Page page="adverts">
      <div>
        <FilterForm
          name={filter.name}
          selectedSaleValue={filter.sale}
          onSubmit={handleSubmit}
          onReset={handleReset}
          onFilterChange={handleChange}
        />

        {adverts.length ? (
          <ul className="adverts-container">
            {filteredAdverts.map((advert) => (
              <li key={advert.id}>
                <Link to={`/adverts/${advert.id}`} className="advert-container">
                  <AdvertItem advert={advert} detail={false} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-adverts-container">
            <h2>There are no adverts published</h2>
            <div className="no-adverts-button-container">
              <LinkButton $variant="primary" to="/adverts/new">
                Publish new advert
              </LinkButton>
            </div>
          </div>
        )}
      </div>
    </Page>
  );
}

export default AdvertsPage;
