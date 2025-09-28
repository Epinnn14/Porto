import React from 'react';
import { FaPython, FaHtml5, FaCss3Alt, FaCloud, FaReact, FaJava } from 'react-icons/fa';

const skills = [
  { name: 'Python', icon: <FaPython className="text-blue-400" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Cloud', icon: <FaCloud className="text-sky-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
];

export default function Skills() {
  return (
    <section className="my-8 flex justify-center w-full">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-slate-800 rounded-full w-20 h-20 shadow-md hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-1">{skill.icon}</div>
              <span className="text-xs text-slate-200 font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
