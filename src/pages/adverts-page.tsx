const adverts = [
  {
    name: "Volkswagen Golf",
    sale: true,
    price: 20000,
    tags: ["motor"],
    userId: 1,
    updatedAt: "2021-03-15T18:23:57.579Z",
    id: 1,
  },
  {
    name: "Iphone 14",
    sale: false,
    price: 1000,
    tags: ["mobile", "lifestyle"],
    userId: 1,
    updatedAt: "2021-03-15T18:24:56.773Z",
    id: 2,
  },
];

function AdvertsPage() {
  return (
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
  );
}

export default AdvertsPage;
