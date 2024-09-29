import { useEffect, useState } from "react";

import { IPlan, IUser } from "../../../../interfaces";
import { StepperLayout } from "../../../../layouts";
import { getDataFromLs } from "../../../../utils";
import { ResumeContainer } from "../../components";

export default function ResumeView() {
  const [data, setData] = useState<{ user: IUser; resume: IPlan }>({});

  useEffect(() => {
    const user = getDataFromLs("user");
    const resume = getDataFromLs("resume");

    setData({ user, resume });
  }, []);

  return (
    <>
      <StepperLayout className="hidden md:block">
        <ResumeContainer data={data} />
      </StepperLayout>

      <StepperLayout className="block md:hidden" showStepper={false}>
        <ResumeContainer data={data} />
      </StepperLayout>
    </>
  );
}
