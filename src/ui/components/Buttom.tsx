import React, { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
}

const Buttom: React.FC<IButtonProps> = ({ children }) => {
  return (
    <button className="p-2 border border-r-primary text-r-primary font-bold">
      {children}
    </button>
  );
};

export default Buttom;
