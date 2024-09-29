import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import { AppButton, Stepper } from "../components";
import { cn } from "../utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  showStepper?: boolean;
}

export function StepperLayout({ children, className, showStepper = true }: Props) {
  return (
    <div
      className={(cn("h-fit w-screen min-w-[380px] flex flex-col"), className)}
    >
      <Stepper show={showStepper} path={window.location.pathname} />

      <div className="px-8 md:px-[170px]">
        <BackChevronIcon className={showStepper ? "block" : "hidden"} />

        <div className="flex flex-col items-center justify-center py-14">
          {children}
        </div>
      </div>
    </div>
  );
}

export function BackChevronIcon({ className }: { className: string }) {
  const nav = useNavigate();

  const lastPage = () => {
    nav(-1);
  };

  return (
    <div className={cn("mt-10 w-fit", className)}>
      <AppButton
        className="hidden md:block bg-transparent text-purple-dark text-md md:w-fit md:h-fit"
        onClick={lastPage}
        text="Volver"
      >
        <IoChevronBackCircleOutline className="text-2xl text-purple-dark" />
      </AppButton>
    </div>
  );
}
