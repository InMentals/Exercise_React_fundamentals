import type { ComponentProps } from "react";
import FormField from "../../components/ui/form-field";
import RadioSelection from "../../components/ui/radio-selection";
import "./filter-form.css";

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
    <div className="filter-form-container">
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
          <div>
            <button type="submit">Apply filter</button>
            <button type="reset">Clear filter</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FilterForm;
