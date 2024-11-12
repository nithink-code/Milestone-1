import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        {/* Logo and Description */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h2 className="text-2xl font-semibold">YourBrand</h2>
          <p className="mt-2 text-gray-400">
            Bringing you closer to the best in design and development. Stay
            connected and explore more.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-4 flex space-x-4 text-gray-400">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaTwitter className="text-3xl text-blue-400 hover:text-blue-600" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <i className="ri-facebook-fill text-2xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-800" />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Team Project.</p>
      </div>
    </footer>
  );
};

export default Footer;
