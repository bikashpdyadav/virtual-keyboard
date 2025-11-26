"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setForm({ name: "", email: "", message: "" });
      toast({
        title: "Transmission sent",
        description: "We logged your holographic inquiry in the LPVK console.",
      });
    } catch (error) {
      console.error("Contact form submission error", error);
      toast({
        title: "Transmission failed",
        description: "Check your connection or MongoDB pipeline.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <SectionWrapper
      eyebrow="Contact"
      title="Beam a message to the LPVK team"
      subtitle="If MongoDB URI is configured, this form persists to the messages collection."
    >
      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6 text-left">
        <div>
          <label className="text-xs uppercase tracking-[0.4em] text-[#00eaff]">Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white focus:border-[#00eaff] focus:outline-none"
            placeholder="Laser keyboard pioneer"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.4em] text-[#00eaff]">Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white focus:border-[#00eaff] focus:outline-none"
            placeholder="you@futuristicteam.io"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.4em] text-[#00eaff]">Message</label>
          <textarea
            required
            value={form.message}
            rows={5}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white focus:border-[#00eaff] focus:outline-none"
            placeholder="Describe your use-case, deployment, or collaboration idea."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full border border-[#00eaff]/40 bg-[#00eaff]/20 px-6 py-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#00eaff] transition hover:border-[#00eaff] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Transmitting…" : "Send Transmission"}
        </button>
      </form>
    </SectionWrapper>
  );
}

