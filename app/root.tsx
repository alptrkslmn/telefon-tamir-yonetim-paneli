import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { ThemeProvider } from "~/context/ThemeContext";
import { Toaster } from 'react-hot-toast';
import { Link } from "@remix-run/react";
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { 
    rel: "stylesheet", 
    href: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&family=Ubuntu+Mono:wght@400;700&display=swap" 
  }
];

export default function App() {
  return (
    <html lang="tr" className="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <Outlet />
          <Toaster 
            position="top-right"
            toastOptions={{
              success: {
                style: {
                  background: '#4CAF50',
                  color: 'white',
                },
              },
              error: {
                style: {
                  background: '#F44336',
                  color: 'white',
                },
              },
            }}
          />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <html lang="tr" className="light">
        <head>
          <title>Hata Oluştu!</title>
          <Meta />
          <Links />
        </head>
        <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-md p-8">
              <div className="flex justify-center mb-6">
                <FaExclamationTriangle className="text-8xl text-yellow-500" />
              </div>
              
              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {error.status === 404 ? 'Sayfa Bulunamadı' : 'Bir Hata Oluştu'}
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {error.status === 404 
                  ? 'Aradığınız sayfa maalesef mevcut değil.' 
                  : `Beklenmedik bir hata oluştu: ${error.statusText}`}
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link 
                  to="/" 
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaHome />
                  <span>Ana Sayfaya Dön</span>
                </Link>
                <Link 
                  to="/hizmetler" 
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <FaExclamationTriangle />
                  <span>Hizmetlerimize Göz At</span>
                </Link>
              </div>
            </div>
          </div>
          <Scripts />
        </body>
      </html>
    );
  }

  // Diğer beklenmedik hatalar için
  return (
    <html lang="tr" className="light">
      <head>
        <title>Beklenmedik Hata</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md p-8">
            <div className="flex justify-center mb-6">
              <FaExclamationTriangle className="text-8xl text-red-500" />
            </div>
            
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Beklenmedik Bir Hata Oluştu
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Üzgünüz, sistemde bir sorun oluştu. Lütfen daha sonra tekrar deneyin.
            </p>
            
            <div className="flex justify-center space-x-4">
              <Link 
                to="/" 
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaHome />
                <span>Ana Sayfaya Dön</span>
              </Link>
              <Link 
                to="/hizmetler" 
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <FaExclamationTriangle />
                <span>Hizmetlerimize Göz At</span>
              </Link>
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
