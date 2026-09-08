import { SITE } from "@/constants/site";

export function buildWhatsAppLink(message: string) {
  return `${SITE.whatsappHref}?text=${encodeURIComponent(message)}`;
}
