import { useEffect, useState, type FormEvent } from "react";
import Page from "../../components/layout/page";
import { useParams, useNavigate } from "react-router";
import type { Advert } from "./types";
import { deleteAdvert, getAdvert } from "./service";
import { AxiosError } from "axios";
import Button from "../../components/ui/button";
import Dialog from "../../components/ui/dialog";
import AdvertItem from "./advert-item";
import "./advert-page.css";
//TODO: do we want to hanlde loadig state? (class 4, 3:42 min)

function AdvertPage() {
  const params = useParams();
  const [advert, setAdvert] = useState<Advert | null>(null);
  const [displayDialog, setDisplayDialog] = useState<string>("none");
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
  }, [navigate, params.advertId]);

  function showDialog() {
    setDisplayDialog("flex");
  }
  function handleCancel() {
    setDisplayDialog("none");
  }

  async function handleDelete(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await deleteAdvert(params.advertId!);
    navigate("/", { replace: true });
  }

  return (
    <Page page="advert">
      <div className="item-detail-container">
        {advert && <AdvertItem advert={advert} detail={true} />}
      </div>
      <div className="delete-button-container">
        <Button $variant="primary" onClick={showDialog}>
          Delete advert
        </Button>
      </div>
      <Dialog
        display={displayDialog}
        text="Are you sure?"
        onSubmit={handleDelete}
        onCancel={handleCancel}
      />
    </Page>
  );
}

export default AdvertPage;

//TODO: show all the details
