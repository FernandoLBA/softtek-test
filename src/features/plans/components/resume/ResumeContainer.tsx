import { IPlan, IUser } from "../../../../interfaces";
import { ResumeCard } from "./ResumeCard";

interface Props {
  data: { user: IUser; resume: IPlan };
}

export function ResumeContainer({ data }: Props) {
  return (
    <section className="w-full flex flex-col gap-10">
      <h2 className="text-3xl md:text-5xl font-bold">Resumen del seguro</h2>

      <ResumeCard user={data.user} resume={data.resume} />
    </section>
  );
}
