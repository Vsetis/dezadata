import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import useScrollHash from "../hooks/useScrollHash";

const Layout = () => {
  useScrollHash();
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="container mx-auto px-4">
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
