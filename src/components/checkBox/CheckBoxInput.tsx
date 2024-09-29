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
        className={`size-[20px] min-h-[20px] min-w-[20px] cursor-pointer checked:text-white-dark appearance-none border ${
          error ? "border-red-dark" : "border-black-medium"
        } rounded-md mr-2 checked:bg-no-repeat checked:bg-center checked:border-black-medium checked:bg-black-medium`}
        {...props}
      />

      <label
        htmlFor="checkbox-group-4"
        className={`text-xs ml-1 font-thin cursor-pointer ${
          error ? "text-red-dark" : "text-black-medium"
        }`}
      >
        {label}
      </label>
    </div>
  );
}
