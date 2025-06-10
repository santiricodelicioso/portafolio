"use client";
import { useState } from "react";

export default function ContactButtons() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="mt-12 max-w-lg mx-auto flex flex-col items-center space-y-4">
      <a
        href="https://wa.me/573013680010"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 transition"
        style={{ backgroundColor: 'rgb(0,109,119)' }}
      >
        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.18-1.62A12.07 12.07 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.45l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.18.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.2 0-.52.07-.8.36-.28.28-1.06 1.04-1.06 2.54 0 1.5 1.09 2.95 1.24 3.16.15.21 2.14 3.28 5.19 4.47.73.31 1.3.5 1.75.64.74.24 1.41.21 1.94.13.59-.09 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
        Hablar por WhatsApp
      </a>
      <button
        onClick={async (e) => {
          e.preventDefault();
          await navigator.clipboard.writeText('sr.cardona20@gmail.com');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black md:py-4 md:text-lg md:px-10 transition"
        style={{ backgroundColor: 'rgb(131,197,190)' }}
      >
        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z"/></svg>
        sr.cardona20@gmail.com
        {copied && <span className="ml-2 text-sm text-green-200">¡Correo copiado!</span>}
      </button>
      <a
        href="https://www.linkedin.com/in/santiago-ram%C3%ADrez-cardona?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 md:py-4 md:text-lg md:px-10 transition"
        style={{ backgroundColor: 'rgb(237,246,249)' }}
      >
        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        LinkedIn
      </a>
      <a
        href="tel:+573013680010"
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 md:py-4 md:text-lg md:px-10 transition"
        style={{ backgroundColor: 'rgb(255,221,210)' }}
      >
        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
        Llamar
      </a>
    </div>
  );
} 