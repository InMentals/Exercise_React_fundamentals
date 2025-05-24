import Page from "../../components/layout/page";
import Button from "../../components/ui/button";
import FormField from "../../components/ui/form-field";

function NewAdvertPage() {
  return (
    <Page title="">
      <div>
        <form>
          <FormField type="text" name="name" label="Title" value="" />
          <FormField type="number" name="price" label="Price" value="" />
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
