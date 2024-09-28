import { FormikErrors } from "formik";
import React from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

import { ICardsData } from "../../interfaces";

interface IValues {
  forMe: boolean;
  forSomebody: boolean;
}
interface Props {
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean
  ) => Promise<void> | Promise<FormikErrors<IValues>>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  values: { [key: string]: boolean };
  data: ICardsData;
}

export function Card({ data, setFieldValue, values, handleSubmit }: Props) {
  const { content, forWhom, img, name } = data;

  const handleRadioButtons = () => {
    if (name === "forMe") {
      setFieldValue(name, !values[name]);
      setFieldValue("forSomebody", false);
    } else {
      setFieldValue(name, !values[name]);
      setFieldValue("forMe", false);
    }

    handleSubmit();
  };

  return (
    <div
      className={`${
        values[name] ? "border-4 border-black" : "border-none"
      } relative px-5 py-10 bg-white flex h-[160px] md:h-[212px] shadow-xl shadow-[#AEACF359] gap-2 flex-col justify-between w-full lg:w-[256px] rounded-3xl`}
    >
      <div className="absolute top-5 size-6 right-5">
        {values[name] ? (
          <GoCheckCircleFill
            onClick={handleRadioButtons}
            className="cursor-pointer text-3xl text-green-600"
          />
        ) : (
          <MdOutlineRadioButtonUnchecked
            onClick={handleRadioButtons}
            className="cursor-pointer text-3xl text-gray-400"
          />
        )}
      </div>

      <div className="flex md:flex-col items-center md:items-start justify-start gap-3">
        <img src={img} height="48px" width="48px" alt="icon" />

        <h2 className="text-lg font-bold">{forWhom}</h2>
      </div>

      <p className="text-sm sm:text-[10px] font-thin">{content}</p>
    </div>
  );
}
