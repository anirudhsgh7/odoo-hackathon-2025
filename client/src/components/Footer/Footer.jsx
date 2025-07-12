// src/components/Footer/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // If not using React Router, replace with <a href="">

import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

import footLinks from '../../data/footLinks.json'; // Adjust path

const iconMap = {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaXTwitter,
};

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black px-6 md:px-12 pt-20 pb-10 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="col-span-2 flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/logo192.png"
              alt="Logo"
              width={50}
              height={80}
              className="transition-transform duration-300 hover:scale-110"
            />
          </Link>

          <div>
            <p className="text-base font-semibold mb-2">Subscribe to Our Newsletters</p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const email = e.target.email.value;
                try {
                  const res = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email }),
                  });
                  const result = await res.json();
                  alert(result.message || 'Subscription successful');
                  e.target.email.value = '';
                } catch {
                  alert('Subscription failed.');
                }
              }}
              className="flex items-center border border-zinc-900 rounded-full overflow-hidden max-w-sm"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="bg-white text-black px-4 py-2 flex-1 outline-none placeholder:text-zinc-900"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 font-bold hover:bg-teal-400 hover:text-black transition"
              >
                →
              </button>
            </form>
          </div>

          <div>
            <p className="text-base font-semibold mb-2">Follow us</p>
            <div className="flex gap-4 text-xl">
              {footLinks.socialMedia.map(({ label, icon, href }) => {
                const IconComponent = iconMap[icon];
                return IconComponent ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="hover:scale-110 hover:text-teal-400 transition duration-300 cursor-pointer" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-zinc-900">
            {footLinks.usefulLinks.map(({ label, href }) => (
              <li key={label} className="hover:text-purple-500 hover:translate-x-1 transition duration-200">
                <Link to={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold mb-4">More</h4>
          <ul className="space-y-2 text-zinc-900">
            {footLinks.moreLinks.map(({ label, href }) => (
              <li key={label} className="hover:text-blue-500 hover:translate-x-1 transition duration-200">
                <Link to={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="text-zinc-900 leading-relaxed space-y-1">
            {footLinks.contact.addressLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <p className="pt-2">
              📧{' '}
              <a
                href={`mailto:${footLinks.contact.email}`}
                className="underline hover:text-teal-400 transition"
              >
                {footLinks.contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-zinc-900 mt-12 pt-6 border-t border-zinc-900">
        &copy; {new Date().getFullYear()} {footLinks?.copyright}.
      </div>
    </footer>
  );
};

export default Footer;
