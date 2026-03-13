import { Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#050B14] text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <a
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
            </a>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed pr-4">
              Delivering federal IT expertise and specialized technology
              consultants to government agencies and prime contractors
              nationwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5 text-tg-gold" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5 text-tg-gold" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Solutions
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-tg-gold transition-colors">
                  SaaS Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tg-gold transition-colors">
                  Cloud & Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tg-gold transition-colors">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tg-gold transition-colors">
                  Data & Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tg-gold transition-colors">
                  Contract Vehicles
                </a>
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
                <a href="#" className="hover:text-tg-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tg-gold transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tg-gold transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tg-gold transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tg-gold transition-colors">
                  Fraud Prevention
                </a>
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
                <a
                  href="mailto:info@tgfederal.com"
                  className="hover:text-white transition-colors"
                >
                  info@tgfederal.com
                </a>
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
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
