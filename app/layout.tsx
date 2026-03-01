import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Профиль пользователя',
  description: 'Страница профиля пользователя с Tailwind и shadcn/ui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-gray-50`}>
        <header className="bg-white shadow-md py-4">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <span className="font-bold text-xl">Платформа</span>
            <nav className="space-x-4">
              <a href="/" className="text-gray-600 hover:text-gray-900">Главная</a>
              <a href="/profile" className="text-gray-600 hover:text-gray-900">Профиль</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-white border-t border-gray-200 mt-10">
          <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <span className="font-bold">Лого</span>
              <span>© 2026 Название. Все права защищены</span>
            </div>
            <div className="flex space-x-4 mb-2 md:mb-0">
              <a href="#">О нас</a>
              <a href="#">Поддержка</a>
              <a href="#">Блог</a>
              <a href="#">Вакансии</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400">Конфиденциальность</a>
              <a href="#" className="text-gray-400">Условия использования</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}