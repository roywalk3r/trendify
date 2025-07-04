import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Inter, Bruno_Ace } from "next/font/google"
import NavBar from "@/components/nav-bar"
import "./globals.css"
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
})

const bruno = Bruno_Ace({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-bruno-ace",
    display: "swap",
})

export const metadata: Metadata = {
    title: "Trendify",
    description: "Your one stop shop for all things fashion",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ClerkProvider>
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${bruno.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
        </body>
        </html>
        </ClerkProvider>
    )
}
