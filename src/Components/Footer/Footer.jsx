import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaPaperPlane,
} from "react-icons/fa6";

import googlePlay from "../../assets/googlePlay.png";
import appStore from "../../assets/appStore.png";
import logo from "../../assets/logo.png"; // تأكد من أن المسار صحيح

const Footer = () => {
  return (
    <footer className="w-full bg-[#034833] text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Section 1: About */}
        <div className="text-center md:text-left mb-6 md:mb-0 max-w-xs">
          {/* Logo Added */}
          <img
            src={logo}
            alt="Aoun Logo"
            className="h-40 mx-auto md:mx-0 mb-2"
          />
          <h2 className="text-xl font-bold">Aoun</h2>
          <p className="text-sm mt-2">
            Aoun is an online aggregator. We do not participate in transactions
            between our users; they create and manage all requests within our
            app independently.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <FaFacebookF className="text-xl cursor-pointer hover:text-gray-400" />
            <FaInstagram className="text-xl cursor-pointer hover:text-gray-400" />
            <FaXTwitter className="text-xl cursor-pointer hover:text-gray-400" />
            <FaLinkedin className="text-xl cursor-pointer hover:text-gray-400" />
          </div>
        </div>

        {/* Section 2: Download App */}
        <div className="text-center">
          <h2 className="text-lg font-semibold">Download App</h2>
          <div className="flex space-x-2 mt-2">
            <img
              src={googlePlay}
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
            <img
              src={appStore}
              alt="App Store"
              className="h-10 cursor-pointer"
            />
          </div>
        </div>

        {/* Section 3: Newsletter */}
        <div className="text-center max-w-xs">
          <h2 className="text-lg font-semibold">Subscribe to Our Newsletter</h2>
          <p className="text-sm mt-2">
            Stay updated with our latest news and offers.
          </p>
          <div className="flex mt-3 bg-black rounded-full overflow-hidden border border-gray-600">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 flex-grow bg-black text-white outline-none"
            />
            <button className="bg-green-500 p-3 flex items-center justify-center">
              <FaPaperPlane className="text-white text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white mt-6 pt-4 text-center text-sm">
        <p>© Aoun 2024 | All Rights Reserved</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="underline hover:text-gray-400">
            Terms & Conditions
          </a>
          <a href="#" className="underline hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="underline hover:text-gray-400">
            Help Center
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
