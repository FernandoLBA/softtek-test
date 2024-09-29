import { useFormik } from "formik";
import { useEffect } from "react";

import { IPlan, IUser } from "../../../../interfaces";
import { StepperLayout } from "../../../../layouts";
import { getDataFromLs } from "../../../../utils";
import { PlansContextProvider } from "../../contexts";
import { TopLayout } from "../../layouts/TopLayout";
import { getPlans } from "../../services/getPlans";

export function PlansView() {
  // Todo: debo manejar la data con un context desde aquí
  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      forMe: false,
      forSomebody: false,
      plans: [],
    },
    onSubmit: (values) => {
      console.log("🚀 ~ CardsContainer ~ submitting:", values);
    },
  });

  // * Filtra los planes
  const getFilteredPlans = async () => {
    const user: IUser = getDataFromLs("user");

    if (values.forMe) {
      const plans: IPlan[] = await getPlans();
      const filteredPlans = plans.filter(({ age }) => age <= user.age);

      setFieldValue("plans", filteredPlans);
    } else if (values.forSomebody) {
      const plans: IPlan[] = await getPlans();

      setFieldValue(
        "plans",
        plans
          .slice(0, 3)
          .map((plan) => ({
            ...plan,
            price: (plan.price - plan.price * 0.05).toFixed(2),
          }))
      );
    } else if (!values.forMe || !values.forSomebody) {
      setFieldValue("plans", []);
    }
  };

  useEffect(() => {
    getFilteredPlans();
  }, [values.forMe, values.forSomebody]);

  return (
    <PlansContextProvider values={{ values, setFieldValue, handleSubmit }}>
      <StepperLayout>
        <TopLayout />

        {/* // Todo: acá debo insertar los planes */}
      </StepperLayout>
    </PlansContextProvider>
  );
}
