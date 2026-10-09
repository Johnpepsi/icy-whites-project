"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function DepositStatusBanner() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const deposit = searchParams.get("deposit");
    if (deposit === "success" || deposit === "cancelled") {
      setStatus(deposit);
      // Clean the URL so the banner doesn't reappear on refresh/back.
      const url = new URL(window.location.href);
      url.searchParams.delete("deposit");
      window.history.replaceState({}, "", url.pathname + url.hash);
    }
  }, [searchParams]);

  if (!status) return null;

  return (
    <div className={`deposit-banner ${status}`}>
      {status === "success"
        ? "Deposit received — you're all set. A confirmation email is on its way."
        : "Checkout was cancelled — no charge was made. You can try again anytime."}
      <button aria-label="Dismiss" onClick={() => setStatus(null)}>×</button>
    </div>
  );
}
