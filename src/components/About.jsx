import React from 'react';
import Experience from './Experience';

export default function About() {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="card flex flex-col items-center w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-slate-300 leading-relaxed mb-2 w-full text-justify">
            Hai, saya Alessandro Kevin Aprilio, mahasiswa Computer Science-Software Engineering di BINUS University. Saya percaya bahwa teknologi memiliki kekuatan untuk menciptakan perubahan positif. Melalui aplikasi yang saya kembangkan, saya ingin memberikan solusi yang tidak hanya inovatif tetapi juga bermanfaat bagi masyarakat.
          </p>
          <p className="text-slate-300 leading-relaxed w-full text-justify">
            Saya selalu mencari kesempatan untuk berkolaborasi dan berkontribusi pada proyek-proyek yang dapat menciptakan dampak sosial yang signifikan. Mari terhubung dan ciptakan perubahan bersama!
          </p>
        </div>
      </div>

      {/* Experience ditampilkan di bawah About Me */}
      <Experience />
    </>
  );
}
