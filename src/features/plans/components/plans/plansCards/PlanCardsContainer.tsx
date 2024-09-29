import { IPlan } from "../../../../../interfaces";
import { PlansCard } from "./PlansCard";

interface Props {
  plans: IPlan[];
}

export function PlanCardsContainer({ plans }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {plans.map((data, i) => (
        <PlansCard key={i} data={data} index={i} />
      ))}
    </div>
  );
}
