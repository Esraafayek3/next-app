export const dynamic = "force-dynamic";

import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductDetails({ params }) {
  const { id } = params;

  if (!id) return notFound();

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) return notFound();

  let product;
  try {
    product = await res.json();
  } catch (e) {
    return notFound();
  }

  if (!product || !product.title) return notFound();

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
