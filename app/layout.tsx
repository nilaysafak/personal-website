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
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold">Nilay Şafak</div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">Ana Sayfa</Link>
              </li>
              <li>
                <Link href="/hakkimda" className="hover:text-gray-300">Hakkımda</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto p-4 flex-grow">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Hakkımda</h3>
                <p className="text-gray-300">
                  Full Stack Developer olarak modern web teknolojileri ile çalışıyorum.
                  Yenilikçi ve kullanıcı dostu web uygulamaları geliştirmeye odaklanıyorum.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Hızlı Bağlantılar</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-white">Ana Sayfa</Link>
                  </li>
                  <li>
                    <Link href="/hakkimda" className="text-gray-300 hover:text-white">Hakkımda</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">İletişim</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300">
                    <a href="mailto:nilaysafak9@gmail.com" className="hover:text-white">
                      nilaysafak9@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/nilaysafak" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/nilay-safak" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} Nilay Şafak. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
