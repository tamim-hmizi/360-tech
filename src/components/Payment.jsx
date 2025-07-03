import {
  FiSend,
  FiTrendingUp,
  FiCreditCard,
  FiDollarSign,
  FiMap,
} from "react-icons/fi";

const Payment = () => {
  const methods = [
    { name: "D17", icon: <FiSend className="text-4xl" /> },
    { name: "Mybiat", icon: <FiTrendingUp className="text-4xl" /> },
    { name: "UIB App", icon: <FiMap className="text-4xl" /> },
    { name: "Attijari Bank App", icon: <FiCreditCard className="text-4xl" /> },
    { name: "Versement Bancaire", icon: <FiDollarSign className="text-4xl" /> },
    { name: "Versement Postal", icon: <FiDollarSign className="text-4xl" /> },
    { name: "Flouci", icon: <FiCreditCard className="text-4xl" /> },
  ];

  return (
    <div className="p-10 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {methods.map((method, idx) => (
          <div
            key={idx}
            className="card w-full max-w-xs h-40 shadow-xl bg-gray-800 border-2 border-gray-700 hover:border-cyan-400 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20"
          >
            <div className="mb-3 text-cyan-400">{method.icon}</div>
            <h3 className="text-xl font-semibold text-white">{method.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
