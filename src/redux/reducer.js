import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "car",
  initialState: {
    cars: [],
  },
  reducers: {
    addCar: (state, action) => {
      const newCars = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      state.cars = [...state.cars, ...newCars];
    },

    updateCar: (state, action) => {
      const { id, updatedCar } = action.payload;
      state.cars = state.cars.map((car) =>
        car.id === id ? { ...car, ...updatedCar } : car
      );
    },

    removeCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload.id);
    },
  },
});

export const { addCar, removeCar, updateCar } = carSlice.actions;

export default carSlice.reducer;
