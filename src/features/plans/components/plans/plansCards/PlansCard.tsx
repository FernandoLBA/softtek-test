import { useNavigate } from "react-router";

import { AppButton, Divider } from "../../../../../components";
import { appPaths } from "../../../../../constants";
import { IPlan } from "../../../../../interfaces";
import { setDataOnLs } from "../../../../../utils";
import { forMe } from "../../../imgs";

interface Props {
  data: IPlan;
  index: number;
}

export function PlansCard({ data, index }: Props) {
  const nav = useNavigate();

  const handleSelectedPlan = (data: IPlan) => {
    setDataOnLs("resume", { name: data.name, price: data.price });

    nav(`${appPaths.PLANS}${appPaths.RESUME}`);
  };

  return (
    <div className="relative border-4 flex h-[724px] flex-col rounded-3xl w-[288px] px-5 py-14 border-transparent bg-white  shadow-xl shadow-[#AEACF359]">
      {index == 1 && (
        <span className="absolute top-8 text-xs bg-[#7DF0BA] px-2 font-bold rounded-sm">
          Plan recomendado
        </span>
      )}

      <div className="flex justify-between mb-4">
        <h4 className="font-bold text-xl w-4/6">{data.name}</h4>
        <img src={forMe} alt="plan" height="56px" width="56px" />
      </div>

      <p className="uppercase text-[9px] text-gray-500 font-thin">
        costo del plan
      </p>
      <span>${data.price} al mes</span>

      <Divider className="border-gray-300 md:block" />

      <ul className="px-4 flex list-disc flex-col justify-start gap-10 h-full">
        {data.description.map((text, i) => (
          <li className="tex-[12px]" key={i}>
            <span className="font-bold">
              {text.split(" ").slice(0, 3).join(" ")}
            </span>
            <span className="font-thin">
              {" "}
              {text.split(" ").slice(3).join(" ")}
            </span>
          </li>
        ))}
      </ul>

      <AppButton
        className="md:w-full text-sm h-[48px] bg-red-500"
        text="Seleccionar Plan"
        onClick={() => handleSelectedPlan(data)}
      />
    </div>
  );
}
