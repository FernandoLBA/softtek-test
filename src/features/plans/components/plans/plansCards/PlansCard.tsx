import { useNavigate } from "react-router";

import {
  AppButton,
  AppCard,
  CardText,
  CardTitle,
  Divider,
} from "../../../../../components";
import { appPaths } from "../../../../../constants";
import { IPlan } from "../../../../../interfaces";
import { setDataOnLs } from "../../../../../utils";
import { doctor, home, hospital, hospitalDark, laptop } from "../../../imgs";

interface Props {
  data: IPlan;
  index: number;
}

export function PlansCard({ data, index }: Props) {
  const nav = useNavigate();
  const icons: string[] = [doctor, laptop, hospitalDark];

  const handleSelectedPlan = (data: IPlan) => {
    setDataOnLs("resume", { name: data.name, price: data.price });

    nav(`${appPaths.PLANS}${appPaths.RESUME}`);
  };

  return (
    <AppCard className="border-transparent w-[288px] h-[662px]">
      {index == 1 && (
        <span className="absolute top-8 text-xs bg-green-normal px-2 font-bold rounded-sm text-black-normal">
          Plan recomendado
        </span>
      )}

      <div className="flex justify-between mb-4">
        <CardTitle className="w-4/6">{data.name}</CardTitle>

        <img
          loading="lazy"
          src={index === 0 || index === 2 ? home : hospital}
          alt="plan"
          height="56px"
          width="56px"
        />
      </div>

      <p className="uppercase text-[9px] text-gray-light2 font-thin">
        costo del plan
      </p>
      <span className="text-black-normal font-bold">${data.price} al mes</span>

      <Divider className="border-purple-light md:block" />

      <ul className="px-0 md:px-4 flex list-none md:list-disc flex-col justify-start gap-10 h-full">
        {data.description.map((text, i) => (
          <li key={i}>
            <CardText className="flex gap-2 justify-start">
              <img
                className="h-fit block md:hidden"
                src={icons[i]}
                alt="list"
                height="20px"
                width="20px"
              />

              <span className="text-black-normal text-md">
                <b>{text.split(" ").slice(0, 3).join(" ")}</b>
                <span className="font-thin">
                  {" "}
                  {text.split(" ").slice(3).join(" ")}
                </span>
              </span>
            </CardText>
          </li>
        ))}
      </ul>

      <AppButton
        className="md:w-full h-[48px] text-xs bg-red-dark text-white-dark"
        text="Seleccionar Plan"
        onClick={() => handleSelectedPlan(data)}
      />
    </AppCard>
  );
}
