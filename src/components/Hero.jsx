import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'
import profile from '../assets/profile.jpg'

export default function Hero(){
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* left: image */}
      <div className="flex justify-center w-50% h-50% md:justify-start object-cover rounded-full overflow-hidden">
        <img src={profile} alt="Alessandro" className="avatar-lg shadow-lg" w-full h-full/>
      </div>

      {/* right: text */}
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hi, I’m <span className="accent">Alessandro Kevin Aprilio</span>.</h1>
        <p className="text-slate-300 text-lg mb-6 leading-relaxed">
          Software Engineering student at BINUS University. Passionate about technology, problem solving, and building impactful solutions.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/CV ATS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded shadow text-xl"
          >
            CV
          </a>
        </div>
      </div>
    </div>
  )
}
