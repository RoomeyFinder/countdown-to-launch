import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })
// todo
export const metadata: Metadata = {
  title: "RoomeyFinder | Coming Soon",
  description: "We make finding your perfect living situation one less hassle.",
  keywords: "roommate, living situation, housing, accommodation, room, finder, room finder, roomie, roomey, room",
  robots: "index, follow",
  openGraph: {
    title: "RoomeyFinder | Coming Soon",
    description:
      "We make finding your perfect living situation one less hassle.",
    url: "https://roomeyfinder.com",
    images: [
      "https://pbs.twimg.com/profile_images/1742258368595595265/O5znt_ZT_400x400.jpg",
    ],
    type: "website",
    ttl: 3000,
    locale: "en-NG",
    alternateLocale: "en-US",
    countryName: "Nigeria",
    determiner: "a",
    emails: "exploitenomah@gmail.com",
    siteName: "RoomeyFinder",
    phoneNumbers: "09011288423",
  },
  twitter: {
    title: "RoomeyFinder | Coming Soon",
    description:
      "We make finding your perfect living situation one less hassle.",
    site: "roomeyfinder",
    images: [
      "https://pbs.twimg.com/profile_images/1742258368595595265/O5znt_ZT_400x400.jpg",
    ],
    creator: "exploitenomah",
    creatorId: "945750336823873537",
  },
  icons: [
    {
      url: "/rf-logo.png",
      sizes: "64x64",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        {children}{" "}
        <Toaster
          toastOptions={{ position: "top-center", style: { fontSize: "18px" } }}
        />
      </body>
    </html>
  )
}
