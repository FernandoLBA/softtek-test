import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

import RimacIcon from "../../icons/RimacIcon";

export function Navbar() {
  return (
    <nav className="flex justify-between px-8 py-5 md:px-24">
      <Link to="/">
        <RimacIcon />
      </Link>

      <div className="flex items-center gap-2">
        <span className="hidden text-dark md:block mr-2 text-[12px]">¡Compra por este medio!</span>

        <i>
          <FaPhoneAlt />
        </i>

        <p className="font-bold text-dark">(01) 411 6001</p>
      </div>
    </nav>
  );
}
