import { useState } from "react";
import { useNavigate } from "react-router-dom";
import customersData from "../../data/customers";

const Customers = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = customersData.filter((c) =>
    c.firstName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold mb-4">
                Onboarded Customers
            </h2>


        {/* Search */}
        <input
            className="mb-4 p-2 w-full max-w-sm rounded bg-[#0b0f19] border border-gray-700"
            placeholder="Search customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

    </div>

      {/* Table */}
      <div className="bg-[#121826] rounded-xl overflow-hidden flex flex-col">
        <table className="w-full text-left">
          <thead className="bg-[#1a2235]">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          
            <tbody>
                {filtered.map((c) => (
                <tr key={c.id} className="border-t border-gray-800 hover:bg-[#1a2235] transition">
                    <td className="p-3">{c.firstName} {c.lastName}</td>
                    <td className="p-3">{c.email}</td>
                    <td className="p-3">{c.phone}</td>

                    <td className="p-3">
                    <button
                        onClick={() => navigate(`/admin/customers/${c.id}`)}
                        className="bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-500"
                    >
                        View Details
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>

        </table>
      </div>
    </div>
  );
};

export default Customers;