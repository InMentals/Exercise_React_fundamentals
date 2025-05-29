import type { ComponentProps } from "react";

interface DialogProps extends ComponentProps<"form"> {
  text: string;
  onCancel?: () => void;
}

const Dialog = ({ text, onCancel, ...props }: DialogProps) => {
  return (
    <form {...props}>
      <h2>{text}</h2>
      <button type="submit">Delete</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default Dialog;
