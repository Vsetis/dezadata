import React from "react";
import Button from "../components/ui/Button";

const Home = () => {
  return (
    <div className="min-h-screen py-40">
      <div className="max-w-2xl flex flex-col items-center mx-auto">
        <h1 className="text-3xl md:leading-[1.3] md:text-5xl font-semibold  text-center tracking-tight bg-gradient-to-b from-indigo-600 to-white/80 text-transparent bg-clip-text mb-5 leading-[1.3] uppercase">
          Kalkulačka na výpočet prodaných aut
        </h1>
        <p className="text-sm md:text-base mb-12 text-white/80 font-semibold text-center mx-auto max-w-xl">
          Sečtěte celkovou cenu vozů prodaných o víkendu z XML souboru. Níže
          najdete vzor struktury dat tabulky.
        </p>
        <Button target="/upload">Začněte nahrávat</Button>
        <div className="mt-20">
          <img src="/table.png" alt="Vzor tabulky" />
        </div>
      </div>
    </div>
  );
};

export default Home;
