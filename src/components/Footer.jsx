import {
  FiTwitter,
  FiYoutube,
  FiFacebook,
  FiInstagram,
  FiGithub,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer bg-gray-900 border-t border-cyan-900/50 text-white p-6 md:p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-12 w-auto rounded-lg border-2 border-cyan-500/30 shadow-lg"
          />
          <div>
            <p className="text-lg md:text-xl font-semibold text-cyan-400">
              360-Tech
            </p>
            <p className="text-sm text-gray-400">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
        </div>

        <nav className="flex gap-6 text-2xl">
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <FiTwitter />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <FiYoutube />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <FiFacebook />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <FiInstagram />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <FiGithub />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
