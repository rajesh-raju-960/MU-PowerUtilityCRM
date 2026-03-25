import { useState } from "react";
import TicketList from "../../components/tickets/TicketList";
import TicketDetails from "../../components/tickets/TicketDetails";
import ticketsData from "../../data/tickets";


const Tickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(ticketsData[0]);
  
  return (
    <div className="flex gap-6 h-[75vh]">

      {/* Left Panel */}
      <div className="w-[30%] bg-[#121826] rounded-xl p-4 overflow-y-auto">
        <TicketList
          tickets={ticketsData}
          onSelect={setSelectedTicket}
          selected={selectedTicket}
        />
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-[#121826] rounded-xl p-6">
        <TicketDetails ticket={selectedTicket} />
      </div>
    </div>
  );
};

export default Tickets;