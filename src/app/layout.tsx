import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeRegistry } from "@/components/ThemeRegistry"
import { QueryProvider } from "@/components/QueryProvider"
import { Toaster } from "react-hot-toast"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Auth Demo",
  description: "A simple authentication demo using Next.js and MUI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "mui" }}>
          <QueryProvider>
            {children}
            <Toaster position="top-right" />
          </QueryProvider>
        </ThemeRegistry>
      </body>
    </html>
  )
}

