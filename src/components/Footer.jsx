import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="py-8">
      <div className="container text-center text-slate-400">
        <div className="flex justify-center gap-6 text-2xl mb-4">
          <a href="https://github.com/Epinnn14" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/alessandro-kevin-aprilio" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
          <a href="https://www.instagram.com/epinnn14/?__pwa=1" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram /></a>
          <a href="mailto:alessandro@email.com" className="social-icon" title="Email"><FaEnvelope /></a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="social-icon" title="WhatsApp"><FaPhone /></a>
        </div>
        <p>© {new Date().getFullYear()} Alessandro Kevin Aprilio</p>
      </div>
    </footer>
  )
}
