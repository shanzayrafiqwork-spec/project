import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex justify-end items-center py-6 px-8 md:px-24 text-sm font-medium text-gray-800">
      <nav className="flex gap-8">
        <Link href="#works" className="hover:text-blue-600 transition-colors">
          Works
        </Link>
        <Link href="#blog" className="hover:text-blue-600 transition-colors">
          Blog
        </Link>
        <Link href="#contact" className="hover:text-blue-600 transition-colors">
          Contact
        </Link>
      </nav>
    </header>
  );
}