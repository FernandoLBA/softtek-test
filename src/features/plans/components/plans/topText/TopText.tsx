import { getDataFromLs } from "../../../../../utils";


export function TopText() {
  const { name } = getDataFromLs("user");

  return (
    <div className="w-fit md:w-4/5 text-left md:text-center">
      <h2 className="text-3xl font-bold md:text-5xl">
        <span className="capitalize">{name}</span> ¿Para quién deseas cotizar?
      </h2>

      <p className="mt-2">
        Selecciona la opción que se ajuste más a tus necesidades.
      </p>
    </div>
  );
}
