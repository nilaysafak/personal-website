import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kişisel Web Sitem",
  description: "Kendimi tanıtan kişisel web sitem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Kişisel Web Sitem</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="hover:text-gray-300">Ana Sayfa</Link>
                </li>
                <li>
                  <Link href="/hakkimda" className="hover:text-gray-300">Hakkımda</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4 flex-grow">
          {children}
        </main>
        <footer className="bg-gray-800 text-white mt-auto">
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Hakkımda</h3>
                <p className="text-gray-300 text-sm">
                  Modern web teknolojileri konusunda uzmanlaşmış, yenilikçi çözümler üreten bir yazılım geliştiricisi.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><Link href="/" className="hover:text-white">Ana Sayfa</Link></li>
                  <li><Link href="/projelerim" className="hover:text-white">Projelerim</Link></li>
                  <li><Link href="/hakkimda" className="hover:text-white">Hakkımda</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Teknolojiler</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Node.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">İletişim</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>
                    <a href="mailto:contact@example.com" className="hover:text-white">
                      contact@example.com
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
              <p>&copy; {new Date().getFullYear()} Kişisel Web Sitem. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
