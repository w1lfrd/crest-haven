import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crest Haven | Find a place that feels like yours",
  description: "Thoughtful property guidance, exceptional homes, and a better way to find your next place.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
