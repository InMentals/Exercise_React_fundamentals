import type { ComponentProps } from "react";

interface CheckBoxSelectionProps extends ComponentProps<"input"> {
  options: string[];
  name: string;
  selectedValue: string[];
}

const CheckBoxSelection = ({
  options,
  name,
  selectedValue,
  ...props
}: CheckBoxSelectionProps) => {
  return (
    <fieldset className={name}>
      <legend>{`${name.charAt(0).toUpperCase() + name.slice(1)}*`}</legend>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            id={option}
            name={option}
            value={option}
            checked={selectedValue.includes(option)}
            {...props}
          />
          <label
            htmlFor={option}
          >{`${option.charAt(0).toUpperCase() + option.slice(1)}`}</label>
        </div>
      ))}
    </fieldset>
  );
};

export default CheckBoxSelection;
