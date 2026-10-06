export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div>
            <div className="text-lg font-bold text-gray-900">
              YourLogo
            </div>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
              A short description about your company or organization goes
              here.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="/"
              className="text-sm text-gray-500 transition hover:text-gray-900"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-sm text-gray-500 transition hover:text-gray-900"
            >
              About
            </a>

            <a
              href="/services"
              className="text-sm text-gray-500 transition hover:text-gray-900"
            >
              Services
            </a>

            <a
              href="/contact"
              className="text-sm text-gray-500 transition hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}