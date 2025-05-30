import type { ComponentProps } from "react";
import FormField from "../../components/ui/form-field";
import RadioSelection from "../../components/ui/radio-selection";

interface FilterFormProps extends ComponentProps<"form"> {
  name: string;
  selectedSaleValue: string;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterForm = ({
  name,
  selectedSaleValue,
  onFilterChange,
  ...props
}: FilterFormProps) => {
  return (
    <form {...props}>
      <fieldset>
        <legend>Filter</legend>
        <FormField
          type="text"
          label="Advert name"
          value={name}
          name="name"
          onChange={onFilterChange}
        />
        <RadioSelection
          options={["all", "sell", "buy"]}
          name={"sale"}
          selectedValue={selectedSaleValue}
          onChange={onFilterChange}
        />
        <button type="submit">Apply filter</button>
        <button type="reset">Clear filter</button>
      </fieldset>
    </form>
  );
};

export default FilterForm;
