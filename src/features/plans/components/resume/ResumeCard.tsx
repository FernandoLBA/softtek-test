import { AppCard, Divider } from "../../../../components";
import { IPlan, IUser } from "../../../../interfaces";
import { people } from "../../imgs";

interface Props {
  user: IUser;
  resume: IPlan;
}

export function ResumeCard({user, resume}:Props) {
  return (
    <AppCard className="border-transparent py-7">
      <span className="uppercase text-xs mb-2">precios calculados para:</span>

      <div className="flex items-center gap-3 capitalize">
        <img src={people} alt="client" width="24px" height="24px" />
        <p className="text-xl font-bold">{`${user?.name} ${user?.lastName}`}</p>
      </div>

      <Divider className="block md:block border-purple-light w-full" />

      <div className="flex flex-col gap-2 font-thin text-black-normal">
        <h5 className="font-bold">Responsable de pago</h5>
        <p>
          {user?.documentType}: {user?.document}
        </p>
        <p>Celular: {user?.phone}</p>
        <p></p>
      </div>

      <div className="flex flex-col gap-2 font-thin mt-4 text-black-normal">
        <h5 className="font-bold">Plan elegido</h5>
        <p>{resume?.name}</p>
        <p>Costo del plan: ${resume?.price} al mes</p>
        <p></p>
      </div>
    </AppCard>
  );
}
