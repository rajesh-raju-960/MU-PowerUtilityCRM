import { useParams, useNavigate } from "react-router-dom";
import customersData from "../../data/customers";

const CustomerDetails = () => {
  const { id } = useParams();
  const customer = customersData.find((c) => c.id === id);
  const navigate = useNavigate();

  return (
    <div>
        <div className="flex items-center gap-4 mb-6">
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


      <div className="grid grid-cols-2 gap-4 bg-[#121826] p-6 rounded-xl">

        <Field label="First Name" value={customer.firstName} />
        <Field label="Last Name" value={customer.lastName} />
        <Field label="Email" value={customer.email} />
        <Field label="Phone" value={customer.phone} />
        <Field label="Address" value={customer.address} />
        <Field label="City" value={customer.city} />
        <Field label="County" value={customer.county} />
        <Field label="Eircode" value={customer.eircode} />
        <Field label="Provider" value={customer.provider} />
        <Field label="MPRN" value={customer.mprn} />
        <Field label="Meter Number" value={customer.meterNumber} />
        <Field label="Reading" value={customer.reading} />

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