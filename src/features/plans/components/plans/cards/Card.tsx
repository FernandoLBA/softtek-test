import { GoCheckCircleFill } from "react-icons/go";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

import { options } from "../../../constants";
import { ICardsData, IPlansContext } from "../../../interfaces";
import { AppCard } from "../../../../../components";

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
    <AppCard
      className={`${
        values[name]
          ? "border-4 border-black-dark"
          : "border-4 border-transparent"
      } h-[160px] py-9 md:h-[212px] justify-between w-full lg:w-[288px]`}
    >
      <div className="absolute top-5 size-6 right-5">
        {values[name] ? (
          <GoCheckCircleFill
            onClick={handleRadioButtons}
            className="cursor-pointer text-3xl text-green-light"
          />
        ) : (
          <MdOutlineRadioButtonUnchecked
            onClick={handleRadioButtons}
            className="cursor-pointer text-3xl text-gray-normal"
          />
        )}
      </div>

      <div className="flex md:flex-col items-center md:items-start justify-start gap-3">
        <img src={img} height="48px" width="48px" alt="icon" />

        <h2 className="text-lg font-bold text-black-normal">{forWhom}</h2>
      </div>

      <p className="text-sm mt-2 sm:text-[10px] font-thin text-black-normal">
        {content}
      </p>
    </AppCard>
  );
}
