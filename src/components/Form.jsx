import Datepicker from "tailwind-datepicker-react";
import { useState } from "react";
import Button from "./ui/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateCar } from "../redux/reducer";
import { options } from "../utils/datepicker";
import Input from "./ui/Input";

const Tag = ({ children }) => {
  return <span className="text-xs  text-red-500">{children}</span>;
};

const Form = ({ car, modalClose }) => {
  const dateOptions = {
    ...options,
    defaultDate: new Date(car?.sellDate || Date.now()),
  };

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const [name, setName] = useState(car?.name || "");
  const [price, setPrice] = useState(car?.price || 0);
  const [vat, setVat] = useState(car?.vat || 0);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (car) {
      dispatch(updateCar({ id: car.id, updatedCar: data }));
      modalClose();
    }
  };

  const handleDateChange = (date) => {
    const selectedDate = new Date(date);
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const day = String(selectedDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    setValue("sellDate", formattedDate);
  };

  return (
    <div className="w-full text-white/60">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Input
            register={register("name", { required: true })}
            label="Název"
            placeholder="Název"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <Tag>Název vozidla musí být vyplňen!</Tag>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="date" className="block mb-2 text-sm font-medium">
            Datum prodeje
          </label>
          <Datepicker
            show={show}
            setShow={(state) => setShow(state)}
            options={dateOptions}
            onChange={(date) => handleDateChange(date)}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Cena"
            placeholder="Cena"
            register={register("price", { required: true, min: 1 })}
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <Tag>Cena musí být kladná!</Tag>}
        </div>
        <div className="flex flex-col mb-8">
          <label className="mb-2 font-semibold text-sm" htmlFor="vat">
            DPH
          </label>
          <select
            className="border border-white/20 rounded bg-transparent px-3 py-2 font-semibold text-sm text-white/80 focus:ring-0 focus:outline-none"
            name="vat"
            {...register("vat")}
            value={vat}
            onChange={(e) => setVat(e.target.value)}>
            <option value="0.19">19%</option>
            <option value="0.2">20%</option>
          </select>
        </div>
        <Button button type="submit">
          Upravit
        </Button>
      </form>
    </div>
  );
};

export default Form;
