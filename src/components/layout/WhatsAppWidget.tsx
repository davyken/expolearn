import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = message.trim();
    if (!text) return;
    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
    setMessage("");
    setOpen(false);
  };

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3">
      {open ? (
        <div
          role="dialog"
          aria-label="Discuter sur WhatsApp"
          className="animate-pop w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-card"
        >
          <div className="flex items-center justify-between bg-[#25D366] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <MessageCircle aria-hidden="true" className="size-5" />
              <p className="text-sm font-bold">Discuter sur WhatsApp</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer le chat WhatsApp"
              className="flex size-7 items-center justify-center rounded-full transition-colors hover:bg-white/20"
            >
              <X aria-hidden="true" className="size-4" />
            </button>
          </div>

          <div className="space-y-3 p-4">
            <p className="text-sm text-muted-foreground">
              Écrivez votre message : il s'ouvrira dans WhatsApp, prêt à être envoyé à ExpoLearn.
            </p>
            <textarea
              rows={3}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Votre message…"
              className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-ring/15 focus:outline-none"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={!message.trim()}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5b] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send aria-hidden="true" className="size-4" />
              Envoyer sur WhatsApp
            </button>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Fermer le chat WhatsApp" : "Discuter sur WhatsApp"}
        className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform duration-300 hover:scale-105"
      >
        {open ? (
          <X aria-hidden="true" className="size-6" />
        ) : (
          <>
            <span
              aria-hidden="true"
              className="animate-pulse-glow absolute inset-0 -z-10 rounded-full bg-[#25D366]"
            />
            <MessageCircle aria-hidden="true" className="size-7" />
          </>
        )}
      </button>
    </div>
  );
}
