import Link from "next/link";

export default function Home() {
  
  return (
    <section
      className="
        flex flex-col items-center justify-center 
        min-h-[calc(100vh-80px)] 
        px-4 sm:px-6 lg:px-8
        text-center
      "
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-700">
        Welcome to <span className="text-blue-600">StyleZone</span>
      </h1>

      <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed max-w-2xl">
        Discover the latest trends in fashion with our curated collections for men and women.  
        From casual essentials to elegant outfits, <span className="font-semibold">StyleZone</span> brings style and comfort together.  
        Explore our store and find your perfect look today!
      </p>

      <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed max-w-2xl">
        We offer high-quality clothing that reflects your personality and lifestyle.  
        Enjoy exclusive deals, new arrivals, and a seamless shopping experience tailored just for you.
      </p>

      <div className="mt-6">
        <Link
          href="/products"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
