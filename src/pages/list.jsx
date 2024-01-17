import React from "react";
import CarList from "../components/CarList";
import Calculator from "../components/Calculator";
import { useSelector } from "react-redux";
import Button from "../components/ui/Button";

const List = () => {
  const cars = useSelector((state) => state.car.cars);

  return (
    <div className="text-white/80 py-32">
      {cars.length > 0 ? (
        <>
          <div className="mb-32">
            <h2 className="text-center max-w-xl mx-auto text-3xl md:leading-[1.3] md:text-5xl uppercase font-semibold mt-16 mb-12 text-transparent bg-gradient-to-b from-white/80 to-white/50 bg-clip-text">
              Výpočet prodaných aut o víkendu
            </h2>
            <div className="mb-20 w-max mx-auto">
              <Button target="/upload#upload">Nahrát více dat</Button>
            </div>
            <div className="mx-auto w-max">
              <Calculator cars={cars} />
            </div>
          </div>
          <div>
            <h2 className="text-center max-w-xl mx-auto md:leading-[1.3] text-3xl md:text-5xl font-semibold uppercase mt-16 mb-12 text-transparent bg-gradient-to-b from-white/80 to-white/50 bg-clip-text">
              Seznam aut z vaší tabulky
            </h2>
            <div className="overflow-x-auto">
              <CarList cars={cars} />
            </div>
          </div>
        </>
      ) : (
        <div className="mb-16">
          <h1 className="text-white/70 text-3xl md:text-5xl md:leading-[1.3] uppercase font-semibold mt-16 mb-5 max-w-xl text-center mx-auto leading-[1.3]">
            Nenahráli jste žádnou tabulku
          </h1>
          <p className="text-sm md:text-base font-semibold text-white/70 text-center mx-auto max-w-md mb-12">
            Vraťte se prosím na upload a nahrejte tabulku podle vzoru v XML
            formátu.
          </p>
          <div className="mx-auto w-max">
            <Button target="/upload">Přejít na nahrání tabulky</Button>
          </div>
          <Calculator cars={cars} />
        </div>
      )}
    </div>
  );
};

export default List;
