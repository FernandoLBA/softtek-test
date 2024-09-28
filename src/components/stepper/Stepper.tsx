import { useEffect, useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { appPaths } from "../../constants";
import { AppButton } from "../button/AppButton";

interface Props {
  path: string;
}

export function Stepper({ path }: Props) {
  const windowSize = window.screen.width
  const [size, setSize] = useState<number>(windowSize);

  // TODO: Arreglar el responsive
  useEffect(() => {
    setSize(windowSize);
    console.log("mod");
  },[windowSize]);

  console.log("🚀 ~ Stepper ~ size:", size)

  if (size < 500) {
    return <MobileStepper />;
  } else {
    return (
      <section className="w-screen gap-4 h-[56px] bg-[#EDEFFC] flex items-center justify-center border">
        <div
          className={`rounded-full ${
            path.includes(appPaths.PLANS)
              ? "bg-[#4F4FFF] text-white"
              : "border border-gray-400 text-gray-400"
          } size-[24px] flex items-center justify-center  text-xs`}
        >
          1
        </div>

        <p
          className={`${
            path.includes(appPaths.PLANS) ? "" : "text-gray-400"
          } text-sm`}
        >
          Planes y coberturas
        </p>

        <div className="flex gap-1">
          <div className="bg-[#4F4FFF] size-2 rounded-full w-[5px] h-1" />
          <div className="bg-[#4F4FFF] size-2 rounded-full w-[6px] h-1" />
          <div className="bg-[#4F4FFF] size-2 rounded-full w-[6px] h-1" />
          <div className="bg-[#4F4FFF] size-2 rounded-full w-[5px] h-1" />
        </div>

        <div
          className={`rounded-full ${
            path.includes(appPaths.RESUME)
              ? "bg-[#4F4FFF] text-white"
              : "border border-gray-400 text-gray-400"
          } size-[24px] flex items-center justify-center text-xs`}
        >
          2
        </div>

        <p
          className={`${
            path.includes(appPaths.RESUME) ? "" : "text-gray-400"
          } text-sm`}
        >
          Resumen
        </p>
      </section>
    );
  }
}

function MobileStepper() {
  return (
    <section className="w-screen px-8 gap-4 h-[56px] flex items-center justify-center border-b-2">
      <AppButton text="" className="w-fit h-fit bg-transparent m-0">
        <IoChevronBackCircleOutline className="text-2xl text-gray-500" />
      </AppButton>

      <p className="w-[130px] uppercase text-xs">paso 1 de 2</p>

      <div className="w-full h-2 bg-gray-300 rounded-full">
        <div className="bg-[#4F4FFF] h-2 rounded-full w-1/12"></div>
      </div>
    </section>
  );
}
