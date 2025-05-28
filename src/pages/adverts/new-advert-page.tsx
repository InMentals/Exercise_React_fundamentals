import { useState, type ChangeEvent, type FormEvent } from "react";
import Page from "../../components/layout/page";
import Button from "../../components/ui/button";
import FormField from "../../components/ui/form-field";
import { createAdvert } from "./service";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import type { PreAdvert } from "./types";
import RadioSelection from "../../components/ui/radio-selection";
import CheckBoxSelection from "../../components/ui/checkbox-selection";

function NewAdvertPage() {
  const [advertInfo, setAdvertInfo] = useState({
    name: "",
    price: "",
    sale: "sell",
  });
  const [tags, setTags] = useState<string[]>([]);

  const { name, price } = advertInfo;

  const navigate = useNavigate();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setAdvertInfo((prevAdvertInfo) => ({
      ...prevAdvertInfo,
      [event.target.name]: event.target.value,
    }));
  }

  function handleTagsChange(event: ChangeEvent<HTMLInputElement>) {
    if (tags.includes(event.target.value)) {
      setTags(tags.filter((tag) => tag != event.target.value));
    } else {
      setTags([...tags, event.target.value]);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const preAdvert: PreAdvert = {
      name: advertInfo.name,
      sale: (advertInfo.sale === "sell").toString(),
      price: advertInfo.price,
      tags: tags.toString(),
    };

    try {
      const createdAdvert = await createAdvert(preAdvert);
      navigate(`/adverts/${createdAdvert.id}`);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        if (error.status === 401) {
          navigate("/login", { replace: true });
        }
      }
    }
  }

  return (
    <Page title="">
      <div>
        <form onSubmit={handleSubmit}>
          <FormField
            type="text"
            name="name"
            label="Title"
            value={name}
            onChange={handleChange}
          />
          <FormField
            type="number"
            name="price"
            label="Price"
            value={price}
            onChange={handleChange}
          />
          <RadioSelection
            options={["sell", "buy"]}
            name={"sale"}
            selectedValue={advertInfo.sale}
            onChange={handleChange}
          />
          <input type="file"></input>
          <CheckBoxSelection
            options={["lifestyle", "mobile", "motor", "work"]}
            name="tags"
            selectedValue={tags}
            onChange={handleTagsChange}
          />
          <div>
            <span></span>
            <Button type="submit" $variant="primary">
              Publish advert
            </Button>
          </div>
        </form>
      </div>
    </Page>
  );
}

export default NewAdvertPage;

//TODO: Enable and disable button once all mandatory fields are fullfiled. (class 5, 1:35:00)

//TODO: Save picture

//TODO: Load tags from the api
