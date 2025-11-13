"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading product...</p>;
  if (!product) return <p className="text-center mt-10 text-red-600">Product not found.</p>;

  return (
    <div className="max-w-3xl mx-auto mt-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex justify-center mb-8">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="h-72 w-auto object-contain"
          priority
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {product.title}
      </h1>

      <p className="text-lg font-semibold text-blue-700 mb-5">
        Category: {product.category}
      </p>

      <p className="text-gray-700 leading-relaxed text-base mb-8">
        {product.description}
      </p>

      <div className="flex justify-between items-end pt-5 border-t border-gray-200">
        <div>
          <span className="text-sm font-medium text-gray-500">Price:</span>
          <p className="text-green-600 text-3xl font-bold">${product.price}</p>
        </div>

        {product.rating && (
          <div className="text-right">
            <p className="text-lg font-bold text-yellow-500">
              ⭐ {product.rating.rate}
            </p>
            <span className="text-sm text-gray-500">
              Based on {product.rating.count} reviews
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
