import { useEffect, useState, type FormEvent } from "react";
import Page from "../../components/layout/page";
import { useParams, useNavigate } from "react-router";
import type { Advert } from "./types";
import { deleteAdvert, getAdvert } from "./service";
import { AxiosError } from "axios";
import Button from "../../components/ui/button";
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

  async function handleDelete() {
    if (params.advertId) {
      await deleteAdvert(params.advertId);
      navigate("/", { replace: true });
    }
  }

  return (
    <Page title="Advert detail">
      Advert detail {params.advertId} - {advert?.name}
      <img src={advert?.photo} alt={advert?.name} />
      <Button $variant="primary" onClick={handleDelete}>
        Delete advert{" "}
      </Button>
    </Page>
  );
}

export default AdvertPage;

//TODO: show all the details
//TODO: build delete confirmation
