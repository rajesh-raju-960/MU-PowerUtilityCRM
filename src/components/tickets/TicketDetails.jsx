import { useState, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import Modal from "../common/Modal";

const TicketDetails = ({ ticket }) => {
  const [messages, setMessages] = useState(ticket.messages);
  const [showModal, setShowModal] = useState(false)

  useEffect(()=>{
    setMessages(ticket.messages)
  },[ ticket ])

  const sendMessage = (text) => {
    setMessages([...messages, { sender: "agent", text }]);
  };

  return (
    <div className="flex flex-col h-full">

      {/* Header */}
    <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-4">
        {/* <div>
            <h3 className="text-lg font-semibold">{ticket.user}</h3>
            <p className="text-sm text-gray-400">{ticket.id}</p>
        </div> */}
        <div className="flex items-center gap-4 ">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
            {ticket.user[0]}
            </div>

            <div>
            <h3 className="font-semibold">{ticket.user}</h3>
            <p className="text-sm text-gray-400">{ticket.id}</p>
            <p className="text-sm text-gray-400">Account number : {ticket.userID}</p>
            </div>
        </div>
        <div className="flex items-center gap-4 ">
          <button
              onClick={() => setShowModal(true)}
              className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500">
              Details
          </button>
          <button
              onClick={() => alert(ticket.id + " "+ "ticket will be closed")}
              className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500">
              Close ticket
          </button>
        </div>
    </div>


      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-3">
        {messages.map((msg, index) => (
          <MessageBubble key={index} msg={msg} />
        ))}
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} />

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <h2 className="text-xl font-semibold mb-4">Ticket Details</h2>

            <div className="space-y-3">
            <div>
                <p className="text-gray-400 text-sm">User</p>
                <p>{ticket.user}</p>
            </div>

            <div>
                <p className="text-gray-400 text-sm">Account number</p>
                <p>{ticket.userID}</p>
            </div>


            <div>
                <p className="text-gray-400 text-sm">Ticket ID</p>
                <p>{ticket.id}</p>
            </div>

            <div>
                <p className="text-gray-400 text-sm">Short Description</p>
                <p>{ticket.shortText}</p>
            </div>

            <div>
                <p className="text-gray-400 text-sm">Detailed Description</p>
                <p>{ticket.longText}</p>
            </div>
            </div>
        </Modal>
       )}
    </div>
    
  );
};

export default TicketDetails;