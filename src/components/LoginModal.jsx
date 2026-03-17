import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    navigate("/admin/tickets");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-[#121826] p-6 rounded-xl w-[350px]">
        <h2 className="text-xl mb-4 font-semibold">Agent Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded bg-[#0b0f19] border border-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded bg-[#0b0f19] border border-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-indigo-600 py-2 rounded hover:bg-indigo-500"
          >
            Login
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;