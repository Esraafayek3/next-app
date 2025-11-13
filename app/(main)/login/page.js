export default function Login() {
  return (
    <section
      className="
        flex items-center justify-center 
        min-h-[calc(100vh-80px)] 
        px-4 sm:px-6 lg:px-8
      "
    >
      <div className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">
          Login to Your Account 
        </h1>

        <form className="flex flex-col space-y-4">
          <div className="text-left">
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="text-left">
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-gray-600 text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
}
