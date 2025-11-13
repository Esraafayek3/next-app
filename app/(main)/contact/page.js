export default function Contact() {
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
        Contact Us
      </h1>

      <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed max-w-2xl">
        Have questions, feedback, or need assistance?  
        We’re here to help! Reach out to <span className="font-semibold text-blue-600">StyleZone</span> and our team will respond as soon as possible.
      </p>

      <div className="max-w-md w-full text-left space-y-4">
        <p className="text-gray-700">
          <span className="font-semibold text-gray-800">Email:</span>{" "}
          support@stylezone.com
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-800">Phone:</span>{" "}
          +1 (555) 123-4567
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-800">Address:</span>{" "}
          123 Fashion Street, New York, NY, USA
        </p>
      </div>

      
    </section>
  );
}
