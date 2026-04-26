"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    console.log("CLICKED");
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <main style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>AI Stereotypes Generator</h1>

      <input
  placeholder="Enter something..."
  value={input}
  onChange={(e) => setInput(e.target.value)}
  style={{
    padding: "12px",
    width: "300px",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#111",
    color: "white"
  }}
/>

      <br /><br />

      <button
  onClick={handleSubmit}
  disabled={loading}
  style={{
    marginTop: "15px",
    padding: "12px 24px",
    borderRadius: "12px",
    background: loading ? "#222" : "#2563eb",
    color: "white",
    border: "none",
    fontSize: "14px",
    cursor: loading ? "not-allowed" : "pointer",
    transition: "all 0.2s ease",
    opacity: loading ? 0.7 : 1
  }}
>
  {loading ? "⚡ Thinking..." : "Generate"}
</button>

      <motion.div
  key={result || "empty"}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  style={{
    marginTop: "40px",
    maxWidth: "700px",
    textAlign: "left",
    background: "#0a0a0a",
    padding: "25px",
    borderRadius: "16px",
    border: "1px solid #1a1a1a",
    color: "#ddd",
    lineHeight: "1.7",
    fontSize: "14px",
    marginLeft: "auto",
    marginRight: "auto",
  }}
>

  {loading ? (
    <p>Thinking...</p>
  ) : (
    result.split("\n").map((line, i) => (
      <motion.p
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: i * 0.05 }}
      >
        {line}
      </motion.p>
    ))
  )}
</motion.div>
    </main>
  );
}
