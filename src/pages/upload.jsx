import React from "react";
import XmlUpload from "../components/XmlUpload";
import BeforeUpload from "../components/BeforeUpload";

const Upload = () => {
  return (
    <div className="container mx-auto pt-32 pb-40 text-white/80">
      <div>
        <BeforeUpload />
      </div>
      <div id="upload" className="pt-40">
        <h2 className="uppercase text-4xl md:text-5xl md:leading-[1.3] text-transparent bg-gradient-to-b from-white/80 to-white/50 bg-clip-text leading-[1.3] font-semibold text-center mb-5">
          Nahrejte svou tabulku
        </h2>
        <p className="font-semibold text-sm md:text-base text-center max-w-md mx-auto mb-20">
          Začněte s nahráváním vaší tabulky pro výpočet prodejů aut o víkendu.
          Povolený <span className="text-indigo-400">formát</span> je pouze
          <span className="text-indigo-400">XML</span>.
        </p>

        <div>
          <XmlUpload />
        </div>
      </div>
    </div>
  );
};

export default Upload;
