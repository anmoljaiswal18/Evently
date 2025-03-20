import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 shadow-md z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/home" className="text-lg font-semibold text-gray-900">
          <img src="/images/logo.png" alt="Evently Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-x-8">
          <a href="#" className="text-white hover:text-yellow-400">Home</a>
          <a href="#" className="text-white hover:text-yellow-400">Religious Event</a>
          <a href="#" className="text-white hover:text-yellow-400">Sponsors For Event</a>
          <a href="#" className="text-white hover:text-yellow-400">Wall of Love</a>
        </nav>

        {/* Buttons */}
        <div className="hidden lg:flex gap-x-4">
          <a href="#" className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-800 hover:text-white">
            List Your Event
          </a>
          <a href="#" className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-800 hover:text-white">
            Find Your Event
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
          <Bars3Icon className="h-8 w-8 text-black" />
        </button>
      </div>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-y-0 right-0 w-64 bg-blue-600 shadow-xl p-4 flex flex-col z-50">
          <button onClick={() => setMobileMenuOpen(false)} className="self-end mb-4">
            <XMarkIcon className="h-8 w-8 text-black" />
          </button>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-yellow-400">Home</a>
            <a href="#" className="text-white hover:text-yellow-400">Religious Event</a>
            <a href="#" className="text-white hover:text-yellow-400">Sponsors For Event</a>
            <a href="#" className="text-white hover:text-yellow-400">Wall of Love</a>
          </nav>
          <div className="mt-auto flex flex-col gap-2">
            <a href="#" className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-800 hover:text-white">
              List Your Event
            </a>
            <a href="#" className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-800 hover:text-white">
              Find Your Event
            </a>
          </div>
        </div>
      </Dialog>
    </header>
  );
};

export default Navbar;
