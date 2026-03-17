# 🧪 Blockchain Backend Engineering Assessment

## 🎯 Objective

Build a **backend service that processes blockchain-like events** and exposes them via an API.

This test evaluates your ability to design **event-driven systems**, handle **idempotency**, and follow **professional Git workflows**.

---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/useblocky/blockchain-backend-test.git
cd blockchain-backend-test
npm install
npm start
```

---

## 📌 Requirements

### 1. Single File Constraint (Important)

All application logic must remain in:

```
app.js
```

You may structure your code internally (functions, modules, etc.), but **do not create additional files for core logic**.

---

### 2. Event Processing

The system simulates blockchain events.

Each event contains:

```json
{
  "txHash": "string",
  "from": "string",
  "to": "string",
  "amount": number
}
```

### Your responsibilities:

* Process incoming events
* Store them
* Ensure **idempotency** (no duplicate processing)

👉 `txHash` must be treated as a **unique identifier**

---

### 3. API Endpoints

You must support:

```
GET /events
GET /events/:txHash
GET /address/:address
```

---

### 4. Idempotency (Critical)

If the same event is received multiple times:

* It must **not be stored twice**
* It must **not be processed twice**

---

### 5. Asynchronous Processing

Event handling should be:

* Non-blocking
* Designed with scalability in mind

---

## 🔧 Git & Workflow Requirements

### 1. Branching

* Do NOT commit directly to `main`
* Create a feature branch:

```bash
git checkout -b feature/solution
```

---

### 2. Commits

* Minimum **3 meaningful commits**
* Follow commit message format:

```
type(scope): message
```

Example:

```
feat(indexer): implement idempotent event processing
```

---

## 🚀 Advanced Features (Optional, Strong Signal)

Implement at least **2** of the following:

* Retry mechanism for failed processing
* Event ordering handling
* Rate limiting
* Caching layer
* Webhook callback on new event
* Basic persistence (DB instead of memory)

---

## 📦 Submission Guidelines

* Push your branch to the repository
* Open a Pull Request to `main`

Your PR should include:

* Clear commit history
* Working implementation
* Updated README (if needed)

---

## 🧠 Evaluation Criteria

You will be evaluated on:

* Code structure (within single-file constraint)
* Event processing design
* Idempotency handling
* API correctness
* Git discipline
* Problem-solving approach

---

## 🚫 What We Are Looking For (Red Flags)

* Duplicate event processing
* Blocking/synchronous design
* Poor commit history (e.g., single commit)
* Ignoring hooks or bypassing them
* Hardcoded or fragile logic

---

## 💬 After Submission

Be prepared to discuss:

* How you would scale this system
* How to handle blockchain re-orgs
* How to ensure exactly-once processing

---

## ⏱️ Expected Time

* 5–8 hours

---

## ✅ Notes

* You are free to use any libraries
* Keep the solution simple but well-structured
* Focus on correctness and clarity over over-engineering
