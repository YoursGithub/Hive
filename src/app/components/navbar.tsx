"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { label: "Nearhive", href: "/" },
    { label: "Community", href: "" },
    { label: "Team", href: "" },
    { label: "Work With Us", href: "" },
  ];

  return (
    <nav className="relative z-10 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Image src="/assets/logo.png" width={30} alt="" />
          </div>
          <div className="hidden md:flex space-x-6 text-gray-600 blur-[2px]">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Hive Blog
            </Link>
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Hive Creators
            </Link>
          </div>
        </div>

        <div className="flex items-center rounded-lg overflow-hidden bg-black border border-black p-1">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            const isNearhive = tab.label === "Nearhive";

            return (
              <button
                key={tab.href}
                onClick={() => router.push(tab.href)}
                className={`px-8 py-3 text-[15px] cursor-pointer font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#202020] text-white rounded-lg"
                    : "text-white"
                } ${!isNearhive ? "blur-[2px]" : ""}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="hidden md:flex space-x-6 text-gray-600 blur-[2px]">
          <Link href="#" className="hover:text-gray-900 transition-colors">
            Login Dashboard
          </Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">
            Report Issue
          </Link>
          <div className="flex gap-6">
            <Image src="/assets/googleplay.svg" width={20} alt="" />
            <Image src="/assets/apple.svg" width={20} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
