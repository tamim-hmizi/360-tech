import React, { useState } from "react";
import { FiUser, FiPhone, FiMail, FiCheckCircle } from "react-icons/fi";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6 mx-auto text-center bg-gray-900 rounded-box shadow-2xl max-w-4xl">
        <FiCheckCircle className="text-6xl text-cyan-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2 text-white">Thank You!</h2>
        <p className="text-xl mb-6 text-gray-300">
          Your order has been received. We'll contact you shortly with
          activation details.
        </p>
        <button
          className="btn bg-cyan-600 hover:bg-cyan-500 border-none text-white shadow-lg hover:shadow-cyan-500/30 px-8 py-3 text-lg"
          onClick={() => setSubmitted(false)}
        >
          Place Another Order
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 max-w-4xl mx-auto bg-gray-800 rounded-box shadow-2xl border border-gray-700"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">
        Complete Your Order
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg flex items-center text-gray-300">
              <FiUser className="mr-2 text-cyan-400" /> First Name
            </span>
          </label>
          <input
            type="text"
            placeholder="John"
            className="input input-bordered w-full text-lg bg-gray-700 border-gray-600 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg flex items-center text-gray-300">
              <FiUser className="mr-2 text-cyan-400" /> Last Name
            </span>
          </label>
          <input
            type="text"
            placeholder="Doe"
            className="input input-bordered w-full text-lg bg-gray-700 border-gray-600 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
            required
          />
        </div>

        <div className="form-control col-span-1 md:col-span-2">
          <label className="label">
            <span className="label-text text-lg flex items-center text-gray-300">
              <FiPhone className="mr-2 text-cyan-400" /> Mobile Number
            </span>
          </label>
          <input
            type="tel"
            placeholder="+1 234 567 8900"
            className="input input-bordered w-full text-lg bg-gray-700 border-gray-600 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
            required
          />
        </div>

        <div className="form-control col-span-1 md:col-span-2">
          <label className="label">
            <span className="label-text text-lg flex items-center text-gray-300">
              <FiPhone className="mr-2 text-cyan-400" /> WhatsApp Number
            </span>
          </label>
          <input
            type="tel"
            placeholder="+1 234 567 8900"
            className="input input-bordered w-full text-lg bg-gray-700 border-gray-600 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
            required
          />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          type="submit"
          className="btn bg-cyan-600 hover:bg-cyan-500 border-none text-white shadow-lg hover:shadow-cyan-500/30 px-10 py-3 text-lg transition-all duration-300"
        >
          Complete Purchase
        </button>
      </div>
    </form>
  );
};

export default Form;
