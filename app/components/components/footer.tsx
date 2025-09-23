import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Foundation Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Chopan Foundation</h3>
            <p className="text-gray-300 mb-4 italic">Serving with Love</p>
            <p className="text-gray-300 mb-4">
              Serving Needy Children, Widows & Families with Love. Bringing Hope, Faith & Care to the Needy in Faisalabad, Pakistan. Every act of support creates ripples of hope.
            </p>
            <div className="flex items-center text-blue-400">
              <Heart className="w-4 h-4 mr-2" />
              <span className="text-sm">Made with love for those in need</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/future-goals" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Future Goals
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>chopanfoundation@gmail.com</li>
              <li>+92-0306-7008096</li>
              <li>Faisalabad, Pakistan</li>
              <li>Amriaza Anil (Founder)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Chopan Foundation. All rights reserved. | Bringing Hope, Faith & Care to the Needy
          </p>
        </div>
      </div>
    </footer>
  );
}
