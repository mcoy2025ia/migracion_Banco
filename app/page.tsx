"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Migración Banco AI
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
          Presentación de Manuel Coy
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="/Resumen.pdf"
            download
            className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-lg"
          >
            Descargar Presentación Condensada
          </a>
          <a
            href="/Presentacion_Manuel_Coy.pdf"
            download
            className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-lg"
          >
            Descargar Presentación Detallada
          </a>
        </div>
      </div>
    </div>
  );
}
