import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ModalProvider from "@/components/providers/modal-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://project-javohir.netlify.app/"),
  title: "Google drive",
  description: "Google drive web application clone created by Javohir",
  authors: [
    {
      name: "Javohir Xamdamboyev",
      url: "https://project-javohir.netlify.app/",
    },
  ],
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "Google drive",
    description: "Google drive web application clone created by Javohir",
    type: "website",
    url: "https://project-javohir.netlify.app/",
    locale: "uz_UZ",
    images: "https://media.graphassets.com/MZeDZ6H8TbqoBaVufEge",
    countryName: "Uzbekistan",
    siteName: "Google Drive",
    emails: "userjon800@gmail.com",
  },
  keywords:
    "Google Drive, Google drive web, Google drive clone, Google drive web application, samar badriddinov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressContentEditableWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute={"class"}
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="google-drive"
          >
            <Toaster position="top-center" />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
