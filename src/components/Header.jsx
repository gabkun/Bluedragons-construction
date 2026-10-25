import { useState } from "react";
import logo from "../assets/logo.png";

const navItems = [
  {
    label: "About Us",
    href: "/",
  },
  {
    label: "Projects",
    href: "/about",
  },
  {
    label: "Our Team",
    href: "/services",
  },
  {
    label: "Services",
    href: "/contact",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/55 font-sans text-white backdrop-blur-[2px]">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo and Brand Name */}
        <a
          href="/"
          onClick={closeMobileMenu}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Blue Dragon Design and Construction home"
        >
          {/* Logo Image */}
          <img
            src={logo}
            alt="Blue Dragon logo"
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
          />

          {/* Brand Labels */}
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-bold uppercase tracking-[0.15em] text-white sm:text-[17px]">
              Blue Dragon
            </span>

            <span className="mt-[6px] whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.22em] text-white/85">
              Design &amp; Construction
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap py-2 text-[10px] font-semibold uppercase tracking-[0.04em] text-white/90 transition-colors duration-200 hover:text-amber-400"
            >
              {item.label}
            </a>
          ))}

          {/* Desktop CTA */}
          <a
            href="/contact"
            className="ml-1 inline-flex min-h-[44px] items-center justify-center gap-3 bg-amber-500 px-6 text-[10px] font-bold uppercase tracking-[0.06em] text-slate-950 transition-all duration-300 hover:bg-amber-400"
          >
            Build Now Pay Later

            <span
              aria-hidden="true"
              className="text-base leading-none"
            >
              →
            </span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center border border-white/25 text-white transition hover:border-amber-400 hover:text-amber-400 lg:hidden"
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                strokeLinecap="square"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                strokeLinecap="square"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen
            ? "max-h-[500px] border-t border-white/10 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col bg-slate-950/95 px-5 py-3 backdrop-blur-md sm:px-8"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={closeMobileMenu}
              className="border-b border-white/10 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-white/85 transition-colors hover:text-amber-400 last:border-0"
            >
              {item.label}
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href="/contact"
            tabIndex={mobileMenuOpen ? 0 : -1}
            onClick={closeMobileMenu}
            className="mt-4 flex min-h-12 items-center justify-center gap-3 bg-amber-500 px-5 text-xs font-bold uppercase tracking-wider text-slate-950 transition hover:bg-amber-400"
          >
            Build Now Pay Later

            <span
              aria-hidden="true"
              className="text-base"
            >
              →
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
