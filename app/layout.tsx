import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKY Barbearia | Visagismo em João Pessoa",
  description: "Corte, barba, visagismo, prótese capilar e Spa do Noivo em Manaíra, João Pessoa. Agende sua experiência SKY.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
