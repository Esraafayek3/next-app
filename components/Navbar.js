"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/login", label: "Login" },
    { href: "/products", label: "Products" },
    { href: "/users", label: "Users" },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 
        z-40 
        bg-white shadow-sm 
        flex justify-center gap-5 
        px-4 py-2 
        border-b border-gray-200
      "
    >
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`px-3 py-1.5 rounded-md text-sm transition-all duration-200 ${
            pathname === href
              ? "bg-blue-600 text-white font-semibold"
              : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
