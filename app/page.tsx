"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"condensada" | "detallada">("condensada");

  const presentations = {
    condensada: {
      title: "Presentación Condensada",
      file: "/Resumen.pdf",
    },
    detallada: {
      title: "Presentación Detallada",
      file: "/Presentación_Manuel_Coy.pdf",
    },
  };

  const current = presentations[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Migración Banco AI
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Presentación de Manuel Coy
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab("condensada")}
            className={`px-6 py-3 font-medium rounded-lg transition-colors ${
              activeTab === "condensada"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
            }`}
          >
            Presentación Condensada
          </button>
          <button
            onClick={() => setActiveTab("detallada")}
            className={`px-6 py-3 font-medium rounded-lg transition-colors ${
              activeTab === "detallada"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
            }`}
          >
            Presentación Detallada
          </button>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href={current.file}
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Descargar PDF
          </a>
          <a
            href={current.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Ver en nueva pestaña
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <iframe
            key={current.file}
            src={current.file}
            className="w-full h-screen"
            title={current.title}
          />
        </div>

        <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>Si el PDF no se carga correctamente, usa el botón de descarga o ver en nueva pestaña</p>
        </div>
      </div>
    </div>
  );
}
