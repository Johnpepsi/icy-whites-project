"use client";
import { useState } from "react";

export default function PayDepositButton({ className, children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleClick() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();

      if (res.ok && data.url) {
        window.location.href = data.url;
        return;
      }
      setError(data.error || "Something went wrong. Please try again.");
    } catch (err) {
      setError("Could not reach checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pay-deposit">
      <button type="button" className={className} onClick={handleClick} disabled={loading}>
        {loading ? "Redirecting…" : children || "Pay $50 Deposit"}
      </button>
      {error && <p className="pay-deposit-error">{error}</p>}
    </div>
  );
}
