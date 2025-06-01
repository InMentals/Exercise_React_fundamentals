import type { ComponentProps } from "react";
import Button from "./button";
import "./dialog.css";

interface DialogProps extends ComponentProps<"form"> {
  text: string;
  display: string;
  onCancel?: () => void;
}

const Dialog = ({ text, display, onCancel, ...props }: DialogProps) => {
  return (
    <div style={{ display: display }} className="dialog-container">
      <form {...props}>
        <h2>{text}</h2>
        <Button $variant="primary" type="submit">
          Delete
        </Button>
        <Button $variant="primary" type="button" onClick={onCancel}>
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default Dialog;
