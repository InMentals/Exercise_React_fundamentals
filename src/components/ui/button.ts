import styled from "styled-components";

const accentColor = "var(--main-brand-color)";

const Button = styled.button<{ $variant: "primary" | "secondary" }>`
  cursor: pointer;
  border-radius: 9999px;
  background-color: ${(props) =>
    props.$variant === "primary" ? accentColor : "white"};
  border-style: solid;
  color: ${(props) => (props.$variant === "primary" ? "white" : accentColor)};
  border-width: 1px;
  border-color: ${accentColor};
  display: inline-flex;
  align-items: center;
  font: inherit;
  font-weight: bold;
  min-height: 36px;
  justify-content: center;
  min-width: 72px;
  outline-style: none;
  padding: 0 30px;
  text-decoration: none;
  transition: background-color 0.3s;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  &:hover {
    background-color: ${(props) =>
      props.$variant === "primary"
        ? "var(--main-brand-color)"
        : "var(--main-brand-color-light)"};
  }
`;
Button.displayName = "Button";

export default Button;
