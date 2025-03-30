import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col space-y-12">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Merhaba, Ben Nilay Şafak</h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Full Stack Geliştirici & Web Developer
            </p>
          </div>
        </div>
      </section>

      {/* Kişisel Bilgiler */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Hakkımda</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            2 yıllık deneyime sahip bir yazılım geliştiricisiyim. Modern web teknolojileri 
            konusunda uzmanlaşmış olup, kullanıcı dostu ve yenilikçi web uygulamaları 
            geliştirmeye odaklanıyorum.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Konum</h3>
              <p className="text-gray-600 dark:text-gray-300">Konya, Türkiye</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Deneyim</h3>
              <p className="text-gray-600 dark:text-gray-300">2 Yıl</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">E-posta</h3>
              <p className="text-gray-600 dark:text-gray-300">nilaysafak9@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Eğitim</h3>
              <p className="text-gray-600 dark:text-gray-300">Konya Gıda ve Tarım Üniversitesi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 