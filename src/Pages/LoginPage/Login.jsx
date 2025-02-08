import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import heart from "../../assets/heart.png";
import logo from "../../assets/logo.png";
import Footer from "../../Components/Footer/Footer";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      <div className="text-center mb-8">
        <img src={logo} alt="Heart" className="h-36 mx-auto" />
      </div>
      <div className="w-full max-w-md p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-left text-[#034833]">
          Sign in
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-[#034833]">
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-2 text-[#034833]">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-0 right-3 h-full flex items-center text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className=" text-sm underline">
              Forgot your password?
            </a>
          </div>
          <p className="text-center text-sm text-gray-600 mb-4">
            By continuing, you agree to the{" "}
            <a href="#" className=" underline">
              Terms of use
            </a>{" "}
            and{" "}
            <a href="#" className=" underline">
              Privacy Policy
            </a>
            .
          </p>
          <button className="w-full p-3 bg-[#83CD20] text-white font-bold rounded-md hover:bg-[#74b41b]">
            Log in
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="#" className="undelin font-semibold underline">
            Sign up
          </a>
        </p>
      </div>
      <div className="mt-12 mb-20 text-green-600 text-2xl">
        <img src={heart} alt="Heart" className="h-16 mx-auto" />
      </div>
      <Footer />
    </div>
  );
}
