import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  className?: string;
  error?: string;
}

export function CheckBoxInput({ id, label, error, ...props }: Props) {
  return (
    <div className="flex items-center my-4">
      <input
        id={id}
        name={id}
        type="checkbox"
        className={`size-[20px] min-h-[20px] min-w-[20px] cursor-pointer text-gray-100 appearance-none border ${
          error ? "border-red-500" : "border-black"
        } rounded-md mr-2 checked:bg-no-repeat checked:bg-center checked:border-black checked:bg-black`}
        {...props}
      />

      <label
        htmlFor="checkbox-group-4"
        className={`text-xs ml-1 font-thin cursor-pointer ${
          error ? "text-red-500" : "text-black"
        }`}
      >
        {label}
      </label>
    </div>
  );
}
