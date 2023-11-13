import React from "react";
import Card from "./Card";
type Product = {
  attributes: {
    Description: string;
    Name: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
};
interface ProductsProps {
  products: Product[];
}
const Products = ({ products }: ProductsProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-x-5 gap-y-10">
      {products?.map((product: Product) => {
        return (
          <Card
            key={product.id}
            name={product.attributes.Name}
            description={product.attributes.Description}
          />
        );
      })}
    </div>
  );
};

export default Products;
