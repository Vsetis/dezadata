import React from "react";

const Input = ({ label, register, ...props }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-semibold text-sm" htmlFor="name">
        {label}
      </label>
      <input
        className="border border-white/20 rounded bg-transparent px-3 py-2 font-semibold text-sm text-white/80 focus:ring-0 focus:outline-none"
        {...register}
        {...props}
      />
    </div>
  );
};

export default Input;
