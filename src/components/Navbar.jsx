const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-[#0b0f19]">
      <h1 className="text-xl font-bold">WattWatch CRM</h1>

      <div className="flex gap-6 text-sm text-gray-300">
        <span>Products</span>
        <span>Solutions</span>
        <span>Pricing</span>
        <span>Contact</span>
      </div>

      <button className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-500">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;