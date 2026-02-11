/**
 * URL du calendrier de rendez-vous (Calendly, Cal.com, etc.).
 * À définir dans Vercel : NEXT_PUBLIC_BOOKING_URL
 * Exemple : https://calendly.com/votre-compte/rdv-telephone
 */
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL || "/rdv";

/** True si le lien de prise de RDV est externe (ouvrir dans un nouvel onglet) */
export const BOOKING_IS_EXTERNAL =
  typeof BOOKING_URL === "string" && BOOKING_URL.startsWith("http");
