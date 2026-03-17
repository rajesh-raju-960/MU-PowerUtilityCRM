const tickets = [
  {
    id: "TCK-001",
    subject: "Power outage in sector 12",
    shortText: "No electricity since morning",
    longText:
      "There has been a power outage since 6 AM affecting multiple houses in sector 12. This is causing issues for daily activities and work-from-home setups.",
    user: "John Doe",
    messages: [
      { sender: "user", text: "There is no electricity since morning" },
      { sender: "agent", text: "We are checking the issue" }
    ]
  },
  {
    id: "TCK-002",
    subject: "Billing issue",
    shortText: "Bill is too high",
    longText:
      "The latest electricity bill is unusually high compared to previous months despite similar usage. Need clarification.",
    user: "Alice",
    messages: [
      { sender: "user", text: "My bill seems too high" }
    ]
  },
  {
    id: "TCK-003",
    subject: "Solar issue",
    shortText: "Solar not working",
    longText:
      "The solar panel system stopped generating power suddenly. No error shown but output is zero.",
    user: "Harry",
    messages: [
      { sender: "user", text: "Solar not working" }
    ]
  }
];

export default tickets;