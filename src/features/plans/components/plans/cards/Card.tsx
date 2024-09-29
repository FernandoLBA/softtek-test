import { GoCheckCircleFill } from "react-icons/go";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

import { options } from "../../../constants";
import { ICardsData, IPlansContext } from "../../../interfaces";

interface Props extends IPlansContext {
  data: ICardsData;
}

export function Card({ data, setFieldValue, values, handleSubmit }: Props) {
  const { content, forWhom, img, name } = data;

  const handleRadioButtons = () => {
    if (name === options.FOR_ME) {
      setFieldValue(name, !values[name]);
      setFieldValue(options.FOR_SOMEBODY, false);
    } else {
      setFieldValue(name, !values[name]);
      setFieldValue(options.FOR_ME, false);
    }

    handleSubmit();
  };

  return (
    <div
      className={`${
        values[name] ? "border-4 border-black" : "border-4 border-transparent"
      } relative px-5 py-10 bg-white flex h-[160px] md:h-[212px] shadow-xl shadow-[#AEACF359] gap-2 flex-col justify-between w-full lg:w-[288px] rounded-3xl`}
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
