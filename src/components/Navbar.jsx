const Navbar = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="navbar bg-gray-900 px-6 py-4 border-b border-cyan-900/50">
      <div className="flex items-center gap-3 hover:gap-4 transition-all duration-300">
        <img
          src={`${base}logo.png`}
          alt="Logo"
          className="h-25 rounded-lg border-2 border-cyan-500/30 shadow-lg transition-transform hover:scale-105"
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold text-white tracking-tight">
            360-Tech
          </span>
          <span className="text-xs text-cyan-400/80 font-mono">
            Abonnement simplifié
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
