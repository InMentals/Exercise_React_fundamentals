import { useEffect, useState } from "react";
import Page from "../../components/layout/page";
import { useParams, useNavigate } from "react-router";
import type { Advert } from "./types";
import { getAdvert } from "./service";
import { AxiosError } from "axios";
//TODO: do we want to hanlde loadig state? (class 4, 3:42 min)

function AdvertPage() {
  const params = useParams();
  const [advert, setAdvert] = useState<Advert | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!params.advertId) {
      return;
    }
    getAdvert(params.advertId)
      .then((advert) => setAdvert(advert))
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.status === 404) {
            navigate("/not-found", { replace: true });
          }
        }
      });
  }, [params.advertId]);
  return (
    <Page title="Advert detail">
      Advert detail {params.advertId} - {advert?.name}
    </Page>
  );
}

export default AdvertPage;

//TODO: show all the details
//TODO: build delete button
