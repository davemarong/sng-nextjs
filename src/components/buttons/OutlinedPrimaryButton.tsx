import React, { ReactNode } from "react";

interface OutlinedPrimaryButtonProps {
  children: ReactNode;
  func?: any;
  submit?: boolean;
}
const OutlinedPrimaryButton = ({
  children,
  func,
  submit,
}: OutlinedPrimaryButtonProps) => {
  return (
    <button
      onClick={func}
      type={`${submit ? "submit" : "button"}`}
      className="transition-colors duration-200 rounded border-2 border-primary-500 text-black hover:bg-primary-700 active:bg-primary-900 hover:text-white hover:border-0 w-52 h-12 "
    >
      {children}
    </button>
  );
};

export default OutlinedPrimaryButton;
