import { Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#050B14] text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-bold text-2xl tracking-tight text-white mb-6 flex items-center gap-2"
            >
              <Image
                src={"/logo/main-logo.png"}
                alt="EaseOrigin Logo"
                width={40}
                height={40}
              />
              <h2 className="font-mont">
                Ease<span className="text-tg-gold">Origin</span>
              </h2>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed pr-4">
              Delivering federal IT expertise and specialized technology
              consultants to government agencies and prime contractors
              nationwide.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5 text-tg-gold" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5 text-tg-gold" />
              </Link>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Solutions
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#" className="hover:text-tg-gold transition-colors">
                  SaaS Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tg-gold transition-colors">
                  Cloud & Infrastructure
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tg-gold transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tg-gold transition-colors">
                  Data & Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tg-gold transition-colors">
                  Contract Vehicles
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Company
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="hover:text-tg-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-tg-gold transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <Link href="#" className="hover:text-tg-gold transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tg-gold transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tg-gold transition-colors">
                  Fraud Prevention
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-tg-gold mr-3 shrink-0 mt-0.5" />
                <span>
                  123 Federal Drive, Suite 400
                  <br />
                  Washington, DC 20001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-tg-gold mr-3 shrink-0" />
                <span>(202) 555-0100</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-tg-gold mr-3 shrink-0" />
                <Link
                  href="mailto:info@tgfederal.com"
                  className="hover:text-white transition-colors"
                >
                  info@tgfederal.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EaseOrigin. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
