"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const links = [
  {
    label: "Email",
    value: "claudine.juan@email.com",
    href: "mailto:claudine.juan@email.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/claudinejuan",
    href: "https://linkedin.com/in/claudinejuan",
  },
  {
    label: "Location",
    value: "Manila, Philippines · Open to remote",
    href: "#",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-[0.18em] uppercase text-neutral-400 font-medium mb-3">
          Get In Touch
        </p>
        <div className="w-8 h-0.5 bg-neutral-900 mb-5" />
        <h2 className="font-serif text-3xl font-bold text-neutral-950 mb-2">
          Let's work together
        </h2>
        <p className="text-sm text-neutral-400 max-w-md mb-10 leading-relaxed">
          Whether you have a project in mind, a role to fill, or just want to
          connect — I'm happy to talk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="flex items-center gap-4 border border-neutral-200 rounded-xl px-4 py-3.5 bg-neutral-50 hover:bg-neutral-100 transition-colors no-underline"
              >
                <div className="w-9 h-9 rounded-lg bg-neutral-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-medium">
                    {l.label[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">
                    {l.label}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">{l.value}</p>
                </div>
              </a>
            ))}
          </div>

          {sent ? (
            <div className="border border-neutral-200 rounded-xl p-8 text-center">
              <p className="font-serif text-2xl text-neutral-900 mb-2">
                Message sent.
              </p>
              <p className="text-sm text-neutral-400">
                I'll get back to you shortly.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <Input
                placeholder="Your name"
                className="rounded-lg border-neutral-200 text-sm"
              />
              <Input
                placeholder="Your email"
                type="email"
                className="rounded-lg border-neutral-200 text-sm"
              />
              <Input
                placeholder="Subject"
                className="rounded-lg border-neutral-200 text-sm"
              />
              <Textarea
                placeholder="Your message..."
                className="rounded-lg border-neutral-200 text-sm resize-none h-28"
              />
              <Button
                onClick={() => setSent(true)}
                className="bg-neutral-900 hover:bg-neutral-700 text-white rounded-lg w-full text-sm font-medium"
              >
                Send Message
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
