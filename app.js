// app.js
const express = require("express");

const app = express();
app.use(express.json());

// In-memory store
const events = new Map();

// Simulated event stream
function simulateEventStream() {
  setInterval(() => {
    const event = {
      txHash: "0x" + Math.random().toString(16).slice(2),
      from: "0xabc",
      to: "0xdef",
      amount: Math.floor(Math.random() * 100),
    };

    processEvent(event);
  }, 3000);
}

// Idempotent processor
function processEvent(event) {
  if (events.has(event.txHash)) {
    console.log("Duplicate event ignored:", event.txHash);
    return;
  }

  events.set(event.txHash, event);
  console.log("Processed event:", event.txHash);
}

// API endpoints
app.get("/events", (req, res) => {
  res.json(Array.from(events.values()));
});

app.get("/events/:txHash", (req, res) => {
  const event = events.get(req.params.txHash);
  if (!event) return res.status(404).json({ error: "Not found" });
  res.json(event);
});

app.get("/address/:address", (req, res) => {
  const result = Array.from(events.values()).filter(
    (e) => e.from === req.params.address || e.to === req.params.address
  );
  res.json(result);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  simulateEventStream();
});