import React, { useState, useEffect } from "react";

type Product = {
  id: string;
  handle: string;
  title: string;
  images: { url: string; altText?: string }[];
};

const mockData = {
  products: [
    {
      id: "1",
      handle: "product-1",
      title: "Product One",
      images: [
        {
          url: "https://via.placeholder.com/300x200?text=Product+One",
          altText: "Product One Image",
        },
      ],
    },
    {
      id: "2",
      handle: "product-2",
      title: "Product Two",
      images: [
        {
          url: "https://via.placeholder.com/300x200?text=Product+Two",
          altText: "Product Two Image",
        },
      ],
    },
    {
      id: "3",
      handle: "product-3",
      title: "Product Three",
      images: [
        {
          url: "https://via.placeholder.com/300x200?text=Product+Three",
          altText: "Product Three Image",
        },
      ],
    },
  ],
};

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(mockData.products);
  }, []);

  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <a
            href={`/products/${product.handle}`}
            key={product.id}
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.title}
              className="rounded-xl mb-2"
            />
            <h3 className="text-lg font-medium">{product.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
