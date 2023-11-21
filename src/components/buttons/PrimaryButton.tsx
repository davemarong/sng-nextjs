import React, { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  func?: () => {};
}
const PrimaryButton = ({ children, func }: PrimaryButtonProps) => {
  return (
    <button
      onClick={func}
      className="transition-colors duration-200 rounded bg-primary-500 text-black hover:bg-primary-700 active:bg-primary-900 hover:text-white border-0 hover:border-0 w-52 h-12 "
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
