import { useNavigate } from "react-router";

import { AppButton, AppCard, Divider } from "../../../../../components";
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
    <AppCard className="border-transparent w-[288px]">
      {index == 1 && (
        <span className="absolute top-8 text-xs bg-green-normal px-2 font-bold rounded-sm text-black-normal">
          Plan recomendado
        </span>
      )}

      <div className="flex justify-between mb-4">
        <h4 className="font-bold text-xl w-4/6 text-black-normal">
          {data.name}
        </h4>
        <img src={forMe} alt="plan" height="56px" width="56px" />
      </div>

      <p className="uppercase text-[9px] text-gray-light2 font-thin">
        costo del plan
      </p>
      <span className="text-black-normal font-bold">${data.price} al mes</span>

      <Divider className="border-purple-light md:block" />

      <ul className="px-4 flex list-disc flex-col justify-start gap-10 h-full">
        {data.description.map((text, i) => (
          <li className="text-black-normal" key={i}>
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
        className="md:w-full text-sm h-[48px] bg-red-dark text-white-dark"
        text="Seleccionar Plan"
        onClick={() => handleSelectedPlan(data)}
      />
    </AppCard>
  );
}
