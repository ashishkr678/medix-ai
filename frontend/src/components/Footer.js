import React from "react";
import logo from '../assets/brand-logo.png';
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-start space-y-10 md:space-y-0">
          <div className="w-full md:w-2/5 flex flex-col mb-10 md:mb-0">
            <img src={logo} width="220" height="55" alt="logo" className="mb-4" />
            <p className="text-gray-300 mb-6 mr-20">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-4">
              <a href="/" className="hover:text-gray-400 transition-colors">
                <BsFacebook size={24} />
              </a>
              <a href="/" className="hover:text-gray-400 transition-colors">
                <BsInstagram size={24} />
              </a>
              <a href="/" className="hover:text-gray-400 transition-colors">
                <BsTwitterX size={24} />
              </a>
              <a href="/" className="hover:text-gray-400 transition-colors">
                <BsYoutube size={24} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-3/5 flex flex-wrap justify-between">
            <nav className="w-1/2 md:w-1/4 mb-10 md:mb-0">
              <h6 className="footer-title text-lg font-bold mb-4">Solutions</h6>
              <ul>
                <li><a href="/" className="link link-hover block mb-2">AI & ML</a></li>
                <li><a href="/" className="link link-hover block mb-2">Analytics</a></li>
                <li><a href="/" className="link link-hover block mb-2">Visualization</a></li>
                <li><a href="/" className="link link-hover block mb-2">Simulation</a></li>
              </ul>
            </nav>
            <nav className="w-1/2 md:w-1/4 mb-10 md:mb-0">
              <h6 className="footer-title text-lg font-bold mb-4">Support</h6>
              <ul>
                <li><a href="/" className="link link-hover block mb-2">Pricing</a></li>
                <li><a href="/" className="link link-hover block mb-2">Documentation</a></li>
                <li><a href="/" className="link link-hover block mb-2">Guides</a></li>
                <li><a href="/" className="link link-hover block mb-2">Help Center</a></li>
              </ul>
            </nav>
            <nav className="w-1/2 md:w-1/4 mb-10 md:mb-0">
              <h6 className="footer-title text-lg font-bold mb-4">Company</h6>
              <ul>
                <li><a href="/" className="link link-hover block mb-2">About</a></li>
                <li><a href="/" className="link link-hover block mb-2">Blog</a></li>
                <li><a href="/" className="link link-hover block mb-2">Press</a></li>
                <li><a href="/" className="link link-hover block mb-2">Partners</a></li>
              </ul>
            </nav>
            <nav className="w-1/2 md:w-1/4 mb-10 md:mb-0">
              <h6 className="footer-title text-lg font-bold mb-4">Legal</h6>
              <ul>
                <li><a href="/" className="link link-hover block mb-2">Claim</a></li>
                <li><a href="/" className="link link-hover block mb-2">Privacy</a></li>
                <li><a href="/" className="link link-hover block mb-2">Terms</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 mt-6 -mb-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center mb-4 md:mb-0">
              <p>© 2024 HelixDiscovery™ Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
