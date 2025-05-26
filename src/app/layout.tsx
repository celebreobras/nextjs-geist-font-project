import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sistema de Gestão de Contratos | Celebre Obras",
  description: "Sistema corporativo para gestão de contratos e ativos",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50`}>
        <div className="min-h-screen flex">
          <Sidebar />
          <div className="flex-1 ml-64">
            <Header />
            <main className="mt-16 p-8">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-xl shadow-sm p-6 min-h-[calc(100vh-9rem)]">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
