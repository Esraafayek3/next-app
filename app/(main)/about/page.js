export default function About() {
  return (
    <section
      className="
        flex items-center justify-center 
        min-h-[calc(100vh-80px)]   
        px-4 sm:px-6 lg:px-8
      "
    >
      <div
        className="
          max-w-3xl 
          w-full 
          rounded-2xl 
          p-6 sm:p-8 
          text-center
        "
      >
        <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-700">
          About Us
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
          Welcome to{" "}
          <span className="font-semibold text-blue-600">StyleZone</span> — your
          trusted online store for trendy and high-quality fashion. We believe
          that clothing is more than just fabric — it’s a way to express your
          personality, confidence, and lifestyle.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
          Our mission is simple — to make fashion accessible and enjoyable for
          everyone. We’re constantly updating our store with the latest trends
          and exclusive deals, so you can always stay ahead in style.
        </p>

        <div className="text-center mt-8">
          <p className="text-blue-700 font-semibold text-lg sm:text-xl">
            StyleZone — Wear your confidence
          </p>
        </div>
      </div>
    </section>
  );
}
