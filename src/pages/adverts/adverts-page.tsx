import { getLatestAdverts } from "./service";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { Advert } from "./types";
import AdvertItem from "./advert-item";
import { Link } from "react-router";
import FilterForm from "./filter-form";

//TODO: handle connection error?
//TODO: do we want to hanlde loadig state? (class 4, 3:42 min)

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
    document.getElementById("publishNewAdvert")!.style.display = "inline-flex";
    document.getElementById("showAdverts")!.style.display = "none";
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let applyFilter = adverts.filter((ad) => ad.name.includes(filter.name));
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
    <div>
      <h1>Adverts Page</h1>
      <FilterForm
        name={filter.name}
        selectedSaleValue={filter.sale}
        onSubmit={handleSubmit}
        onReset={handleReset}
        onFilterChange={handleChange}
      />
      {adverts.length ? (
        <ul>
          {filteredAdverts.map((advert) => (
            <li key={advert.id}>
              <Link to={`/adverts/${advert.id}`}>
                <AdvertItem advert={advert} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Link to="/adverts/new">Publish new advert</Link>
      )}
    </div>
  );
}

export default AdvertsPage;
