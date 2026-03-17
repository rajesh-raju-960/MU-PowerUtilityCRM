import { useEffect, useRef, useState } from "react";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");
  const messageEndRef = useRef(null)

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior : 'smooth'})
  })

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
        }
  }


  return (
    <div className="flex gap-3 pt-4 border-t border-gray-700" ref={messageEndRef}>
      <input
        className="flex-1 p-2 rounded bg-[#0b0f19] border border-gray-700"
        placeholder="Type a reply..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={handleSend}
        className="bg-indigo-600 px-4 rounded hover:bg-indigo-500"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;