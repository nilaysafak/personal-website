import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Hoş Geldiniz</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl text-center">
        Ben Nilay Şafak. Full Stack geliştirici olarak modern web teknolojileri ile 
        çalışıyor ve kullanıcı dostu uygulamalar geliştiriyorum.
      </p>
    </div>
  );
}
