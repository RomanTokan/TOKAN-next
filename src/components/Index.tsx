"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResult("");

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    const data = await res.json();
    setResult(data.result || data.error || "");
    setLoading(false);
  };

  return (
  <main style={{ position: "relative", height: "100vh", color: "white" }}>
    
    {/* Background */}
    <img
  src="/interier.jpg"
  alt="Luxury interior"
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.45)",
  }}
/>

    {/* Overlay */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85))"
      }}
    />

    {/* Content */}
    <div
      style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "900px",
        margin: "0 auto",
        paddingTop: "220px",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "56px", fontWeight: 700 }}>
        Seamless AI Insight,
        <br />
        Unbiased Perspective.
      </h1>

      <p style={{ marginTop: "20px", color: "#cbd5f5" }}>
        Analyze stereotypes instantly with AI
      </p>

      {/* INPUT + BUTTON */}
      <div style={{ marginTop: "30px", display: "flex", gap: "10px", justifyContent: "center" }}>
        <input
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder="Try: smart systems, home theater..."
  onFocus={(e) =>
    (e.currentTarget.style.boxShadow =
      "0 0 0 2px rgba(37,99,235,0.6), 0 0 20px rgba(37,99,235,0.4)")
  }
  onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
  style={{
    padding: "14px",
    width: "400px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    outline: "none",
    transition: "all 0.2s ease"
  }}
/>

        <button
  onClick={handleSubmit}
  disabled={loading}
  style={{
    padding: "14px 24px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    color: "white",
    fontWeight: 600,
    cursor: loading ? "not-allowed" : "pointer",
    boxShadow: "0 10px 30px rgba(124,58,237,0.4)"
  }}
>
  {loading ? "Thinking..." : "Analyze"}
</button>
      </div>

      {/* RESULT */}
      {result && (
        <div
  style={{
    marginTop: "40px",
    maxWidth: "700px",
    marginInline: "auto",
    padding: "24px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.1)",
    lineHeight: "1.7"
  }}
>
          {result}
        </div>
      )}
    </div>
  </main>
  );
}