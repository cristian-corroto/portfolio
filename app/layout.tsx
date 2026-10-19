import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

// Cuando la web esté publicada, define NEXT_PUBLIC_SITE_URL con su dirección real
// (por ejemplo https://cristian-corroto.netlify.app) para que la vista previa al compartir funcione.
const urlSitio = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const titulo = "Cristian Corroto · Desarrollador junior";
const descripcion =
  "Portfolio de Cristian Corroto: desarrollador junior (DAM) en Madrid. Java, desarrollo web y desarrollo asistido por IA. Busco prácticas (FCT) o un puesto junior.";

export const metadata: Metadata = {
  metadataBase: new URL(urlSitio),
  title: titulo,
  description: descripcion,
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: titulo,
    description: descripcion,
    siteName: "Cristian Corroto",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Cristian Corroto · Desarrollador junior" }],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descripcion,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
