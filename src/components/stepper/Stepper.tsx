import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

import { appPaths } from "../../constants";
import { AppButton } from "../button/AppButton";

interface Props {
  path: string;
  show?: boolean;
}

export function Stepper({ path, show = true }: Props) {
  return (
    <div className={show ? "block" : "hidden"}>
      <section className="hidden w-screen gap-4 h-[56px] bg-white-light md:flex items-center justify-center border">
        <div
          className={`rounded-full ${
            path === `${appPaths.PLANS}/` || path === appPaths.PLANS
              ? "bg-purple-dark text-white-dark"
              : "border border-gray-light2 text-gray-light2"
          } size-[24px] flex items-center justify-center text-xs`}
        >
          1
        </div>

        <p
          className={`${
            path !== appPaths.PLANS ? "text-gray-light2" : "text-black-normal"
          } text-sm`}
        >
          Planes y coberturas
        </p>

        <div className="flex gap-1">
          <div className="bg-purple-medium size-2 rounded-full w-[4px] h-[2px]" />
          <div className="bg-purple-medium size-2 rounded-full w-[5px] h-[2px]" />
          <div className="bg-purple-medium size-2 rounded-full w-[5px] h-[2px]" />
          <div className="bg-purple-medium size-2 rounded-full w-[4px] h-[2px]" />
        </div>

        <div
          className={`rounded-full ${
            path.includes(appPaths.RESUME)
              ? "bg-purple-dark text-white-dark"
              : "border border-gray-light2 text-gray-light2"
          } size-[24px] flex items-center justify-center text-xs`}
        >
          2
        </div>

        <p
          className={`${
            path.includes(appPaths.RESUME) ? "" : "text-gray-light2"
          } text-sm`}
        >
          Resumen
        </p>
      </section>

      <MobileStepper />
    </div>
  );
}

function MobileStepper() {
  const nav = useNavigate();

  const lastPage = () => {
    nav(-1);
  };

  return (
    <section className="md:hidden w-screen px-8 gap-4 h-[56px] flex items-center justify-center border-b-2">
      <AppButton
        text=""
        onClick={lastPage}
        className="w-fit h-fit bg-transparent m-0"
      >
        <IoChevronBackCircleOutline className="text-2xl text-gray-normal" />
      </AppButton>

      <p className="w-[130px] uppercase text-black-normal text-xs">
        paso 1 de 2
      </p>

      <div className="w-full h-2 bg-purple-light rounded-full">
        <div className="bg-purple-dark h-2 rounded-full w-[12px]"></div>
      </div>
    </section>
  );
}
