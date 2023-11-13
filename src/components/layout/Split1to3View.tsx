import React, { ReactElement, ReactNode } from "react";

interface Split1to3ViewProps {
  children: ReactElement[];
}
const Split1to3View = ({ children }: Split1to3ViewProps) => {
  const [LeftChild, RightChild] = children;
  return (
    <div className="flex flex-row">
      <div className="basis-1/4">{LeftChild}</div>
      <div className="basis-3/4">{RightChild}</div>
    </div>
  );
};

export default Split1to3View;
