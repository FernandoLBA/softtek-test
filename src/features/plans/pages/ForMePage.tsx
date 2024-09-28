import { useNavigate } from "react-router";

import { AppButton } from "../../../components";

export default function HolaPage() {
  const nav = useNavigate();

  const lastPage = () => {
    nav(-1);
  };

  return (
      <AppButton text="volver" onClick={lastPage} />
  );
}
