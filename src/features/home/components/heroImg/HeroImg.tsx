import { heroImg } from "../../../../assets/imgs";
import { HeroForm, HeroTitle } from "../";

export function HeroImg() {
  return (
    <div className="flex flex-row-reverse md:flex-row md:gap-32 items-center md:items-start">
      <img
        loading="lazy"
        src={heroImg}
        alt="hero"
        className="h-40 md:h-[560px]"
      />

      <div className="flex flex-col">
        <HeroTitle />

        <HeroForm className="hidden md:block w-3/4" />
      </div>
    </div>
  );
}
