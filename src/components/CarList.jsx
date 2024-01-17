import { formatCurrency, formatDate } from "../utils/formatting";
import { useDispatch } from "react-redux";
import { removeCar } from "../redux/reducer";
import { IconTrash, IconPencil, IconX } from "@tabler/icons-react";
import Modal from "./radix/Modal";
import Form from "./Form";
import { useState } from "react";

const CarList = ({ cars }) => {
  const dispatch = useDispatch();
  const [modalStates, setModalStates] = useState({});

  const handleDelete = (carId) => {
    dispatch(removeCar({ id: carId }));
  };

  const toggleModal = (carId) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [carId]: !prevStates[carId],
    }));
  };

  const closeModal = (carId) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [carId]: false,
    }));
  };

  return (
    <div className="border rounded border-white/70 min-w-[500px]">
      <table className="w-full text-sm font-semibold">
        <thead>
          <tr>
            <th className="text-start py-3 px-2 md:px-8">Název modelu</th>
            <th className="text-start py-3 px-2 md:px-8">Datum prodeje</th>
            <th className="text-start py-3 px-2 md:px-8">Cena</th>
            <th className="text-start py-3 px-2 md:px-8">DPH</th>
          </tr>
        </thead>
        <tbody>
          {cars &&
            cars.map((car) => (
              <tr className="border-t border-white/50" key={car.id}>
                <td className="py-3 px-2 md:px-8">{car.name}</td>
                <td className="py-3 px-2 md:px-8">
                  {formatDate(car.sellDate)}
                </td>
                <td className="py-3 px-2 md:px-8 flex gap-1">
                  {formatCurrency(car.price)}
                  <span className="hidden md:flex">,-</span>
                </td>
                <td className="py-3 px-2 md:px-8">{car.vat * 100}</td>
                <td className="pr-2 py-3 flex items-center gap-2">
                  <div className="w-5 h-5">
                    <Modal
                      open={modalStates[car.id] || false}
                      isOpen={() => toggleModal(car.id)}
                      triggerIcon={
                        <IconPencil className="w-full h-full text-green-400 transition-all hover:bg-green-600/50" />
                      }
                      closeIcon={
                        <IconX className="w-5 h-5 text-white/70 hover:text-white/100 cursor-pointer" />
                      }>
                      <Form car={car} modalClose={() => closeModal(car.id)} />
                    </Modal>
                  </div>
                  <button
                    className="w-5 h-5"
                    onClick={() => handleDelete(car.id)}>
                    <IconTrash className="w-full h-full text-red-400 transition-all hover:bg-red-600/50" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;
