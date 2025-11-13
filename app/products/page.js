import Link from "next/link";
import Image from "next/image";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-10">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group rounded-2xl bg-white shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-contain max-h-48 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 flex-grow">
                <h2 className="font-semibold text-gray-800 text-lg line-clamp-2 min-h-[56px]">
                  {product.title}
                </h2>

                <p className="text-blue-600 font-bold text-lg mt-2">
                  ${product.price}
                </p>
              </div>
            </div>

            <div className="p-4 pt-0">
              <button className="w-full border border-blue-500 text-blue-600 font-semibold bg-blue-50 hover:bg-blue-100 py-2 rounded-lg transition">
                View Details
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
