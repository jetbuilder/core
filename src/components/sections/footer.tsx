export default function Footer() {
  const links = [
    { label: 'Documentation', href: '#' },
    { label: 'GitHub', href: 'https://github.com/jetbuilder' },
    { label: 'Twitter', href: '#' },
    { label: 'Discord', href: '#' },
  ]

  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d]">
      <div className="container px-6 max-w-6xl mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-xs">JB</span>
            </div>
            <span className="text-gray-400 text-sm">JetBuilder</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} JetBuilder
          </p>
        </div>
      </div>
    </footer>
  )
}
