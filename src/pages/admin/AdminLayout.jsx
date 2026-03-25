import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const AdminLayout = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const popoverRef = useRef(null);

    useEffect(() => {
    const handleClickOutside = (e) => {
        if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setOpen(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="min-h-screen bg-[#0b0f19] text-white">

        {/* Top Navbar */}
        <div className="flex justify-between items-center px-10 py-4 border-b border-gray-800">
            <h1 className="text-xl font-bold">WattWatch CRM</h1>

            {/* Tabs */}
            <div className="flex gap-6 px-10 py-4">
                <NavLink
                to="/admin/leads"
                className={({ isActive }) =>
                    isActive
                    ? "text-indigo-400 border-b-2 border-indigo-400 pb-2"
                    : "text-gray-400"
                }
                >
                Leads
                </NavLink>

                <NavLink
                to="/admin/tickets"
                className={({ isActive }) =>
                    isActive
                    ? "text-indigo-400 border-b-2 border-indigo-400 pb-2"
                    : "text-gray-400"
                }
                >
                Tickets
                </NavLink>
                <NavLink
                to="/admin/customers"
                className={({ isActive }) =>
                    isActive
                    ? "text-indigo-400 border-b-2 border-indigo-400 pb-2"
                    : "text-gray-400"
                }
                >
                Customers
                </NavLink>
            </div>
    {/* 
            <div className="flex items-center gap-4">
            <span className="text-gray-400">Agent</span>
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                A
            </div>
            </div> */}
            <div className="relative" ref={popoverRef}>
                <div
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex items-center gap-4 cursor-pointer"
                >
                    <span className="text-gray-400">Agent</span>
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                    A
                    </div>
                </div>

                {/* Popover */}
                {open && (
                    <div className="absolute right-0 mt-2 w-40 bg-[#121826] border border-gray-800 rounded-lg shadow-lg z-50">
                    
                    <button
                        onClick={() => {
                        setOpen(false);
                        navigate("/");
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-[#1a2235] transition"
                    >
                        Logout
                    </button>

                    </div>
                )}
            </div>
        </div>



        {/* Page Content */}
        <div className="p-10">
            <Outlet />
        </div>
        </div>
    );
};

export default AdminLayout;