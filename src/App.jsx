import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CategoriesAndPackages from "./components/CategoriesAndPackages";
import Payment from "./components/Payment";
import Form from "./components/Form";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Header />

      <main className="space-y-32 pb-32">
        {/* Section 1: Categories & Packages - Enhanced */}
        <section
          id="packages"
          className="relative pt-28 pb-24 bg-gradient-to-b from-gray-900 to-gray-800"
        >
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600">
                  Premium Subscriptions
                </span>
              </h2>
              <div className="w-24 h-1 bg-cyan-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Choose your favorite service and discover exclusive package
                options
              </p>
            </div>
            <CategoriesAndPackages />
          </div>
        </section>

        {/* Section 2: Payment Methods - Enhanced */}
        <section className="relative pt-28 pb-24 bg-gray-800 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
                  Secure Payment
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Multiple trusted payment methods for your convenience
              </p>
            </div>
            <Payment />
          </div>
        </section>

        {/* Section 3: Order Form (unchanged) */}
        <section className="pt-28 pb-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-5xl mx-auto px-6">
            <Form />
          </div>
        </section>
      </main>

      <Footer />

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1f2937",
            color: "#ffffff",
            border: "1px solid #164e63",
            borderRadius: "0.5rem",
          },
        }}
      />
    </div>
  );
}

export default App;
