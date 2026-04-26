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
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 50% 20%, #1e293b 0%, #020617 45%, #000 100%)",
        color: "white",
        padding: "80px 20px",
      }}
    >
      <section
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-block",
            padding: "8px 14px",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "999px",
            color: "#93c5fd",
            background: "rgba(255,255,255,0.04)",
            marginBottom: "22px",
            fontSize: "13px",
          }}
        >
          AI Tokan Intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: "clamp(42px, 7vw, 86px)",
            lineHeight: "0.95",
            margin: "0 auto",
            maxWidth: "900px",
            letterSpacing: "-0.06em",
            fontWeight: 700,
          }}
        >
          Understand perception.
          <br />
          Without the noise.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: "620px",
            margin: "24px auto 38px",
            color: "#94a3b8",
            fontSize: "17px",
            lineHeight: "1.7",
          }}
        >
          Enter a topic, group, profession, culture, or idea — get a careful,
          neutral AI analysis of common stereotypes, context, and nuance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "10px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 30px 100px rgba(37, 99, 235, 0.22)",
            display: "flex",
            gap: "10px",
          }}
        >
          <input
            placeholder="Try: architects, Ukrainians, luxury buyers..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            style={{
  flex: 1,
  padding: "18px 20px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(2,6,23,0.8)",
  color: "white",
  outline: "none",
  fontSize: "15px",
  boxShadow: "0 0 0px rgba(37,99,235,0)",
  transition: "all 0.25s ease"
}}
onFocus={(e) =>
  (e.currentTarget.style.boxShadow =
    "0 0 0 2px rgba(37,99,235,0.6), 0 0 25px rgba(37,99,235,0.4)")
}
onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          />

          <motion.button
            onClick={handleSubmit}
            disabled={loading}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: loading ? 1 : 1.03 }}
            style={{
              padding: "0 26px",
              borderRadius: "16px",
              background: loading
                ? "rgba(255,255,255,0.08)"
                : "linear-gradient(135deg, #2563eb, #7c3aed)",
              color: "white",
              border: "none",
              fontSize: "15px",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              minWidth: "130px",
              boxShadow: loading
                ? "none"
                : "0 15px 40px rgba(37, 99, 235, 0.35)",
            }}
          >
            {loading ? "Thinking..." : "Analyze"}
          </motion.button>
        </motion.div>

        {(loading || result) && (
          <motion.div
            key={result || "loading"}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            style={{
              margin: "46px auto 0",
              maxWidth: "820px",
              textAlign: "left",
              background: "rgba(2,6,23,0.72)",
              backdropFilter: "blur(18px)",
              padding: "30px",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#dbeafe",
              lineHeight: "1.75",
              fontSize: "15px",
              boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
            }}
          >
            {loading ? (
              <div style={{ textAlign: "center", color: "#93c5fd" }}>
                ⚡ Analyzing perception patterns...
              </div>
            ) : (
              result.split("\n").map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  style={{ marginBottom: "14px" }}
                >
                  {line}
                </motion.p>
              ))
            )}
          </motion.div>
        )}
      </section>
    </main>
  );
}