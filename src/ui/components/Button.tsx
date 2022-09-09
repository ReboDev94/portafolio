import React, { ReactNode } from "react";
import classNames from "classnames";

interface IButtonProps {
  children: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit";
  variant?: "primary" | "dark";
}
const Button: React.FC<IButtonProps> = ({
  children,
  disabled = false,
  type = "button",
  variant = "primary",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames("px-2 py-1 border font-bold", {
        "text-r-primary border-r-primary": variant === "primary",
        "text-r-dark border-r-dark": variant === "dark",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
