import React from "react";

export const Input = ({ name, placeholder, error }) => {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 ">
        Email <span className="text-red-500">*</span>
      </span>
      <input
        type="text"
        name={name}
        className="peer mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-cyan-300  focus:outline-none focus:ring-1 focus:ring-cyan-300 sm:text-sm"
        placeholder={placeholder}
        required
      />
      <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
        {error}
      </p>
    </label>
  );
};
