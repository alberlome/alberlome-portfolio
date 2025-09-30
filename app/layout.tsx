import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Alberlome - Senior Engineering Manager | Senior Frontend Developer | SCRUM Master",
  description:
    "Desarrollador Frontend especializado con más de 15 años de experiencia. Ofrezco servicios como Frontend Developer, SCRUM Master y Team Leader freelance.",
  generator: "v0.app",
  keywords: ["Frontend Developer", "SCRUM Master", "Team Leader", "React", "Angular", "JavaScript", "TypeScript", "Freelance"],
  authors: [{ name: "Alberlome" }],
  openGraph: {
    title: "Alberlome - Senior Engineering Manager | Senior Frontend Developer | SCRUM Master",
    description: "Desarrollador con más de 15 años de experiencia, especializado en Frontend. Líder de equipos usando SCRUM. Servicios freelance profesionales.",
    type: "website",
    locale: "es_ES",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
