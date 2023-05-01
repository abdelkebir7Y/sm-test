import React from "react";

export const Textarea = ({
  name,
  placeholder,
  error,
  register,
  label,
  rules,
  ...textareaProps
}) => {
  const errorClassName = error ? "border-pink-600" : "border-slate-300";

  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 ">
        {label} <span className="text-red-500">*</span>
      </span>
      <textarea
        type="text"
        name={name}
        className={`${errorClassName} peer mt-1 block w-full rounded-md border  bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-cyan-300  focus:outline-none focus:ring-1 focus:ring-cyan-300 sm:text-sm`}
        placeholder={placeholder}
        {...register(name, rules)}
        {...textareaProps}
      />
      {error && (
        <p className=" mb-2 text-sm text-pink-600 peer-invalid:visible">
          {error}
        </p>
      )}
    </label>
  );
};
