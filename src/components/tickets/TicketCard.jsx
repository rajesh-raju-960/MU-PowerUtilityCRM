const TicketCard = ({ ticket, onClick, active }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg cursor-pointer transition ${
        active ? "bg-indigo-600" : "bg-[#0b0f19] hover:bg-[#1a2235]"
      }`}
    >
      <h3 className="font-semibold">{ticket.id}</h3>
      <p className="text-sm text-gray-400">{ticket.subject}</p>
    </div>
  );
};

export default TicketCard;