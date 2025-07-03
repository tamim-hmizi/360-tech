import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

// Use Vite's base URL to support GitHub Pages or custom base
const BASE = import.meta.env.BASE_URL;

function Footer() {
  return (
    <footer className="footer bg-gray-900 border-t border-cyan-900/50 text-white p-6 md:p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <img
            src={`${BASE}logo.png`}
            alt="Logo"
            className="h-12 w-auto rounded-lg border-2 border-cyan-500/30 shadow-lg"
          />
          <div>
            <p className="text-lg md:text-xl font-semibold text-cyan-400">
              360-Tech
            </p>
            <p className="text-sm text-gray-400">
              Copyright © {new Date().getFullYear()} – Tous droits réservés
            </p>
          </div>
        </div>

        <nav className="flex gap-6 text-2xl">
          <a
            href="https://www.instagram.com/360__tech?igsh=MXMxbDJ5MzlnZGJu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <FiInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@360__tech?_t=ZS-8xiv4EmWATP&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <FaTiktok />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
