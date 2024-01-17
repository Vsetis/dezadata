import React from "react";
import { Link } from "react-router-dom";
import Logo from "./ui/Logo";
import links from "../data/links.json";

const Footer = () => {
  return (
    <div className="container mx-auto py-6 text-white/80 px-4">
      <div className="flex justify-between">
        <div>
          <div className="w-8 h-8 mb-10">
            <Link className="transition-all hover:text-white" to="/">
              <Logo />
            </Link>
          </div>
        </div>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.target}
              className="transition-all hover:text-white hover:underline"
              to={link.target}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-white/50 font-semibold">© 2023 Ondřej Všetička</p>
    </div>
  );
};

export default Footer;
