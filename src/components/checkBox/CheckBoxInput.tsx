import React from "react";
import { FormikErrors } from "formik";
import { MdCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

interface Props {
  label: string;
  id: string;
  error?: string;
  value: number;
  setValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{
          documentType: string;
          document: string;
          phone: string;
          politics: number;
          comms: number;
        }>
      >;
}

export function CheckBoxInput({ id, label, error, value, setValue }: Props) {
  const handleCheckBoxes = () => {
    setValue(id, value === 0 ? 1 : 0);
  };

  return (
    <div className="flex items-center my-4">
      {value === 0 ? (
        <MdOutlineCheckBoxOutlineBlank
          onClick={handleCheckBoxes}
          className={`size-[20px] cursor-pointer ${
            error ? "text-red-dark" : ""
          }`}
        />
      ) : (
        <MdCheckBox
          onClick={handleCheckBoxes}
          className="size-[20px]  cursor-pointer"
        />
      )}

      <label
        htmlFor="checkbox-group-4"
        className={`text-xs ml-1 font-thin ${
          error ? "text-red-dark" : "text-black-medium"
        }`}
      >
        {label}
      </label>
    </div>
  );
}
