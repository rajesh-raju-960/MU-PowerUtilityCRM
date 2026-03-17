import { useState } from "react";
import LoginModal from "./LoginModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="text-center py-28 px-6">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
        Energy & Utility CRM Platform
      </h1>

      <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
        Manage customers, optimize operations, and deliver smarter energy services.
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-500"
        >
          Agent Login
        </button>
      </div>

      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Hero;