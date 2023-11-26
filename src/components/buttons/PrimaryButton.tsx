import React, { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  func?: () => {};
  submit?: boolean;
}
const PrimaryButton = ({ children, func, submit }: PrimaryButtonProps) => {
  return (
    <button
      onClick={func}
      type={`${submit ? "submit" : "button"}`}
      className="transition-colors duration-200 rounded bg-primary-500 text-black hover:bg-primary-700 active:bg-primary-900 hover:text-white border-0 hover:border-0 w-52 h-12 "
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
