import type { ComponentProps } from "react";

interface FormFieldProps extends ComponentProps<"input"> {
  label: string;
}

const FormField = ({ label, ...props }: FormFieldProps) => {
  return (
    <div>
      <label>
        <span>{label}</span>
        <input {...props} />
      </label>
    </div>
  );
};

export default FormField;
