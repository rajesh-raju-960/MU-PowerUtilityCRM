import TicketCard from "./TicketCard";

const TicketList = ({ tickets, onSelect, selected }) => {
  return (
    <div className="flex flex-col gap-3">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onClick={() => onSelect(ticket)}
          active={selected?.id === ticket.id}
        />
      ))}
    </div>
  );
};

export default TicketList;