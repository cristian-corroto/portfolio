import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import Movimiento from "@/components/Movimiento";
import "./globals.css";

// Archivo tiene anchura variable: estrecha para los rótulos, normal para el texto.
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], display: "swap", variable: "--font-archivo" });

// Cuando la web esté publicada, define NEXT_PUBLIC_SITE_URL con su dirección real
// (por ejemplo https://cristian-corroto.netlify.app) para que la vista previa al compartir funcione.
const urlSitio = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const titulo = "Cristian Corroto · Desarrollador junior";
const descripcion =
  "Portfolio de Cristian Corroto: desarrollador junior (DAM) en Madrid. Java, desarrollo web y desarrollo asistido por IA.";

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
  themeColor: "#07080c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={archivo.variable}>
      <body className="font-sans antialiased">
        <Movimiento>{children}</Movimiento>
      </body>
    </html>
  );
}
