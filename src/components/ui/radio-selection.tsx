import type { ComponentProps } from "react";

interface RadioSelectionProps extends ComponentProps<"input"> {
  options: string[];
  name: string;
  selectedValue: string;
}

const RadioSelection = ({
  options,
  name,
  selectedValue,
  ...props
}: RadioSelectionProps) => {
  return (
    <fieldset className={name}>
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            id={option}
            name={name}
            value={option}
            checked={option === selectedValue}
            {...props}
          />
          <label htmlFor={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default RadioSelection;
