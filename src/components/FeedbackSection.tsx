"use client";

import SectionWrapper from "./SectionWrapper";
import { feedbackHighlights } from "@/data/content";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const categories = ["Research Insight", "Product Feedback", "Collaboration", "Other"];

const FeedbackSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    organization: "",
    category: categories[0],
    message: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error("Failed to send feedback");
      }
      setForm({
        name: "",
        organization: "",
        category: categories[0],
        message: "",
      });
      toast({
        title: "Feedback uplinked",
        description: "Your insight is now part of the LPVK knowledge stream.",
      });
    } catch (error) {
      console.error("Feedback submission error", error);
      toast({
        title: "Transmission interrupted",
        description: "Please retry or check the feedback endpoint.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <SectionWrapper
      eyebrow="Feedback Hub"
      title="Signal boost from our community"
      subtitle="Drop a quick note and browse what researchers and builders are saying about LPVK."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/10 bg-black/40 p-6 text-left">
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00eaff]">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white focus:border-[#00eaff] focus:outline-none"
              placeholder="Dr. A. Sharma"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00eaff]">Organization</label>
            <input
              value={form.organization}
              onChange={(e) => setForm((prev) => ({ ...prev, organization: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white focus:border-[#00eaff] focus:outline-none"
              placeholder="HCI Research Team"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00eaff]">Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white focus:border-[#00eaff] focus:outline-none"
            >
              {categories.map((option) => (
                <option key={option} value={option} className="bg-black text-white">
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00eaff]">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white focus:border-[#00eaff] focus:outline-none"
              placeholder="Share workflows, feature requests, or test insights."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full border border-[#00eaff]/40 bg-[#00eaff]/20 px-6 py-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#00eaff] transition hover:border-[#00eaff] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Transmitting…" : "Send Feedback"}
          </button>
        </form>
        <div className="space-y-4">
          {feedbackHighlights.map((post) => (
            <div key={post.title} className="glass-panel rounded-3xl p-6 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-[#b44cff]">{post.author}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{post.title}</h3>
              <p className="mt-3 text-sm text-white/70">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FeedbackSection;


