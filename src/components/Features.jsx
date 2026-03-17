const Features = () => {
  return (
    <section className="py-20 px-10">
      <h2 className="text-3xl text-center mb-12 font-semibold">
        Core Capabilities
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[#121826] p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Customer 360</h3>
          <p className="text-gray-400">
            Unified view of all customer data and interactions.
          </p>
        </div>

        <div className="bg-[#121826] p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Smart Tariffs</h3>
          <p className="text-gray-400">
            Compare energy plans and recommend best options.
          </p>
        </div>

        <div className="bg-[#121826] p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Field Operations</h3>
          <p className="text-gray-400">
            Manage workforce and track service requests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;