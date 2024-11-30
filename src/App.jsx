import React from "react";

function App() {
  const links = [
    { id: 1, title: "Web Profile", url: "https://fadlibilal.netlify.app/" },
    { id: 2, title: "GitHub", url: "https://github.com/fadlibilal" },
    { id: 3, title: "LinkedIn", url: "https://www.linkedin.com/in/fadli-bilal/" },
    { id: 4, title: "Instagram", url: "https://instagram.com/fadlibilal_" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 text-gray-900 flex flex-col items-center justify-center px-4">
      {}
      <div className="text-center">
        <div className="relative group">
          <img
            src="/img/prof.png"
            alt="Profile"
            className="w-36 h-36 rounded-full mx-auto mb-6 border-[6px] border-blue-300 shadow-[0_8px_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_12px_25px_rgba(0,0,0,0.4)] transition-shadow duration-500"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-blue-900 tracking-wide drop-shadow-lg">
          Fadli Bilal Afifuddin
        </h1>
        <p className="text-blue-700 mt-2 text-sm italic">
          Student - Universitas 17 Agustus 1945 Surabaya
        </p>
      </div>

      {}
      <div className="mt-10 w-full max-w-md space-y-6">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-center py-4 px-6 rounded-lg shadow-md text-white font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-lg duration-300"
          >
            {link.title}
          </a>
        ))}
      </div>

      {}
      <footer className="mt-12 text-blue-600 text-xs">
        © {new Date().getFullYear()} Fadli Bilal Afifuddin. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
