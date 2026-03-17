const MessageBubble = ({ msg }) => {
  const isAgent = msg.sender === "agent";

  return (
    <div className={`flex ${isAgent ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-lg max-w-[60%] ${
          isAgent
            ? "bg-indigo-600"
            : "bg-[#0b0f19] border border-gray-700"
        }`}
      >
        {msg.text}
      </div>
    </div>
  );
};

export default MessageBubble;