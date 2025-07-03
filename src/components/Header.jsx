import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/header.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-cyan-900/70 to-transparent opacity-90"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="flex items-center gap-3 mb-8">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-50 rounded-lg border-2 border-cyan-500/30 shadow-lg"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-white">Abonnements </span>
          <span className="text-cyan-400">Premium</span>
        </h1>

        <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
          Obtenez les meilleures offres sur vos services préférés.
          <span className="text-cyan-300"> Comptes partagés </span>
          avec une disponibilité garantie.
        </p>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse">
          <FiChevronDown className="text-cyan-400 text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
