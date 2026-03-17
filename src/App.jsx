import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import AdminLayout from "./pages/admin/AdminLayout";
import Customers from "./pages/admin/Customers";
import CustomerDetails from "./pages/admin/CustomerDetails"
import Tickets from "./pages/admin/Tickets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Admin layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="customers" element={<Customers />} />
            <Route path="customers/:id" element={<CustomerDetails />} />
          <Route path="tickets" element={<Tickets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;