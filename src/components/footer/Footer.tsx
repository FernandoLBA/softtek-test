import { Link } from "react-router-dom";

import { RimacWhiteIcon } from "../../icons";
import {Divider} from "../divider/Divider";

export function Footer() {
  return (
    <footer className="flex justify-center md:justify-between flex-wrap items-center bg-black px-8 py-7 md:px-24">
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
