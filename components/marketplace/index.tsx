"use client";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";

const products = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: "Sample Product",
  price: `$${(Math.random() * 50 + 10).toFixed(2)}`,
  image: "https://via.placeholder.com/150",
}));

export const Marketplace = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Marketplace</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <Card key={product.id} shadow="sm" className="p-3">
            <CardBody className="flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.name}
                className="rounded-lg"
                width={150}
                height={150}
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
            </CardBody>
            <CardFooter className="flex justify-center">
              <Button color="primary" variant="flat">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
