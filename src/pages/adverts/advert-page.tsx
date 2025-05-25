import Page from "../../components/layout/page";
import { useParams } from "react-router";

function AdvertPage() {
  const params = useParams();
  return <Page title="Advert detail">Advert detail {params.advertId} </Page>;
}

export default AdvertPage;
