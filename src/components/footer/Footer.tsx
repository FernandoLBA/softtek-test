import { Link } from "react-router-dom";

import { appPaths } from "../../constants";
import { RimacWhiteIcon } from "../../icons";
import { Divider } from "../divider/Divider";

interface Props {
  pathname: string;
}

export function Footer({ pathname }: Props) {
  return (
    <footer
      className={`${
        pathname === appPaths.HOME || pathname === "" ? "flex" : "hidden"
      } justify-center md:justify-between flex-wrap items-center bg-black px-8 py-7 md:px-24`}
    >
      <Link className="text-[#F8F9FF] md:w-fit" to="/">
        <RimacWhiteIcon />
      </Link>

      <Divider />

      <p className="text-[#F8F9FF] text-[14px]">
        &copy; 2023 RIMAC Seguros y Reaseguros.
      </p>
    </footer>
  );
}
