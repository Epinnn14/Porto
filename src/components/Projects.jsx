import React from 'react';

const projects = [
  {
    title: 'Project 1',
    github: 'https://github.com/Epinnn14/ZeroWaste/blob/main/AOL-Software%20Engineering.zip',
    description: 'Web yang menjual makanan dari sisa makanan restoran untuk mengurangi limbah makanan dengan harga terjangkau.',
  },
  {
    title: 'Project 2',
    github: 'https://github.com/Epinnn14/Poroto/blob/main/modded',
    description: 'Web yang menampung laporan masyarakat tentang masalah fasilitas umum atau kebutuhan khusus di kota mereka kepada pemerintah setempat.',
  },
  {
    title: 'Project 3',
    github: 'https://github.com/Epinnn14/Poroto/blob/main/HCI.zip',
    description: 'Mendesign sebuah aplikasi sederhana untuk melihat atau membeli tiket di bioskop secara online',
  },
  {
    title: 'Project 4',
    github: 'https://github.com/Epinnn14/Poroto/blob/main/News%20(2).zip',
    description: 'Menggunakan Machine Learning untuk mengklasifikasikan berita sebagai hoaks atau bukan hoaks.',
  },
  {
    title: 'Project 5',
    github: 'https://github.com/Epinnn14/Poroto/blob/main/LAB.zip',
    description: 'Menggunakan Python untuk mengukur atau mendeteksi anomali pada sebuah model machine learning.',
  },
  {
    title: 'Project 6',
    github: 'https://github.com/Epinnn14/Poroto/blob/main/ML_AOL.zip',
    description: 'Membuat model Machine Learning untuk translate English to Japanese dan sebaliknya.',
  },
];

export default function Projects() {
  return (
    <div className="container py-12 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-slate-800 rounded-lg p-6 shadow text-left flex flex-col justify-between">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <div>
              <div className="font-bold text-lg mb-2">{project.title}</div>
              <div className="text-slate-300 mb-4">{project.description}</div>
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-400 hover:underline font-medium"
              >
                Lihat di GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
