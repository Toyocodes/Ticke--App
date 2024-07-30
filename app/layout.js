import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './(components)/Nav'
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Ticket System",
  description: "Creating a functional ticketing system.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <div className="flex flex-col h-screen max-h-screen">
        <Nav />

        <div className="flex-grow overflow-y-auto bg-page text-default-text">
          {children}
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </body>
  </html>
  )
}
