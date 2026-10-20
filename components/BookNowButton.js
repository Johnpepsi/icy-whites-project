"use client";
import { openCalendlyPopup } from "@/lib/calendly";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function BookNowButton({ className = "btn btn-solid", children = "Book Now" }) {
  return (
    <button type="button" className={className} onClick={() => openCalendlyPopup(CALENDLY_URL)}>
      {children}
    </button>
  );
}
