"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Migración Banco AI
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-12">
          Presentación de Manuel Coy
        </p>

        {/* Presentación Condensada */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Presentación Condensada
          </h2>
          <div className="flex gap-2 mb-4">
            <a
              href="/Resumen.pdf"
              download
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
            >
              Descargar
            </a>
            <a
              href="/Resumen.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg"
            >
              Abrir
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="/Resumen.pdf"
              className="w-full h-[600px]"
              title="Presentación Condensada"
            />
          </div>
        </div>

        {/* Presentación Detallada */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Presentación Detallada
          </h2>
          <div className="flex gap-2 mb-4">
            <a
              href="/Presentacion_Manuel_Coy.pdf"
              download
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
            >
              Descargar
            </a>
            <a
              href="/Presentacion_Manuel_Coy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg"
            >
              Abrir
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="/Presentacion_Manuel_Coy.pdf"
              className="w-full h-[600px]"
              title="Presentación Detallada"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
