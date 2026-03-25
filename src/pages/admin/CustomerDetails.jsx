import { useParams, useNavigate, useLocation } from "react-router-dom";
import customersData from "../../data/customers";


const CustomerDetails = () => {
  // const { id } = useParams();
  // const customer = customersData.find((c) => c.id === id);
  const navigate = useNavigate();


  const { state } = useLocation();  
  const customer = state?.customer;

  if (!customer) {
    return <div>Error: Customer data not available</div>; // in case there's no customer data
  }


  return (
    <div>
      <div  className="flex justify-between items-center mb-4 border-b border-gray-700 pb-4">      
        <div className="flex items-center gap-4 ">
        <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
            <span className="text-xl">←</span>
            
        </button>

        <h2 className="text-2xl font-semibold">
            Customer Details
        </h2>
        </div>
        <button
              onClick={() => alert(customer.firstName + " "+ "will be converted to customer")}
              className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500 ">
              Convert to Customer
        </button>
      </div>


      <div className="grid grid-cols-2 gap-4 bg-[#121826] p-6 rounded-xl">

        <Field label="First Name" value={customer.firstName} />
        <Field label="Last Name" value={customer.lastName} />
        <Field label="Email" value={customer.email} />
        <Field label="Phone" value={customer.phone || "Unavailable"} />
        <Field label="Address" value={customer.address || "Unavailable"} />
        <Field label="City" value={customer.city || "Unavailable"} />
        <Field label="County" value={customer.county || "Unavailable"} />
        <Field label="Eircode" value={customer.eircode || "Unavailable"} />
        <Field label="Provider" value={customer.provider || "Unavailable"} />
        <Field label="MPRN" value={customer.mprn || "Unavailable"} />
        <Field label="Meter Number" value={customer.meterNumber || "Unavailable"} />
        <Field label="Reading" value={customer.reading || "Unavailable"} />

      </div>
    </div>
  );
};

const Field = ({ label, value }) => (
  <div>
    <p className="text-gray-400 text-sm">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);

export default CustomerDetails;