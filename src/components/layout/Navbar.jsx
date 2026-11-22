
import { NavLink } from 'react-router';

const links = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Projects', to: '#projects' },
  { label: 'Contact', to: '#contact' },
];

export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="text-xl font-bold">
          Sajid<span className="text-lime-400">.</span>
        </NavLink>

        <div className="hidden gap-6 text-sm text-zinc-400 sm:flex">
          {links.map((link) => (
            <a key={link.to} href={link.to} className="transition-colors hover:text-lime-300">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
