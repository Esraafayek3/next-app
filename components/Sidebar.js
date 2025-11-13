"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <aside
      className="
        fixed
        top-[48px]     
        left-0
        z-30
        w-52              
        h-[calc(100vh-48px)]
        bg-gray-50
        dark:bg-gray-800
        p-3
        overflow-y-auto
        shadow-md
        border-r border-gray-200
      "
    >
      <ul className="space-y-2 font-medium text-sm">
        
        <li>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            StyleZone
            <span
              className={`ml-auto transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {dropdownOpen && (
            <ul className="py-2 space-y-1">
              <li>
                <Link
                  href="/"
                  className="block w-full px-3 py-1.5 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block w-full px-3 py-1.5 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block w-full px-3 py-1.5 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="block w-full px-3 py-1.5 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  LOGIN
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block w-full px-3 py-1.5 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                 Products
                </Link>
              </li>
              <li>
                <Link
                  href="/users"
                  className="block w-full px-3 py-1.5 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Users
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}
