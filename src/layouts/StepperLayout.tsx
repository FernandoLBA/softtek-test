import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import { AppButton, Stepper } from "../components";

interface Props {
  children: React.ReactNode;
}

export function StepperLayout({ children }: Props) {
  return (
    <div className="h-fit w-screen min-w-[380px] flex flex-col">
      <Stepper path={window.location.pathname} />

      <div className="px-8 md:px-48">
        <BackChevronIcon />

        <div className="flex flex-col items-center justify-center py-14">
          {children}
        </div>
      </div>
    </div>
  );
}

export function BackChevronIcon() {
  const nav = useNavigate();

  const lastPage = () => {
    nav(-1);
  };

  return (
    <div className="mt-10 w-fit">
      <AppButton
        className="hidden md:block bg-transparent text-[#4F4FFF] text-md md:w-fit md:h-fit"
        onClick={lastPage}
        text="Volver"
      >
        <IoChevronBackCircleOutline className="text-2xl text-[#4F4FFF]" />
      </AppButton>
    </div>
  );
}
