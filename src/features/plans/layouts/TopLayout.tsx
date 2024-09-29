import { useContext } from "react";

import { CardsContainer, PlanCardsContainer, TopText } from "../components";
import { PlansContext } from "../contexts";
import { IPlansContext } from "../interfaces";

export function TopLayout() {
  const {values} = useContext<IPlansContext>(PlansContext);

  return (
    <div className="flex flex-col md:items-center gap-8">
      <TopText />

      <CardsContainer />

      <PlanCardsContainer plans={values.plans} />
    </div>
  );
}
