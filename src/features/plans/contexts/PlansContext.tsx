import React, { createContext } from "react";

import { IChooseValues, IPlansContext } from "../interfaces";
import { FormikErrors } from "formik";

interface Props {
  children: React.ReactNode;
  values: IPlansContext;
}

export const PlansContext = createContext<IPlansContext>({
  handleSubmit: ()=>{},
  setFieldValue: (field:string, value: unknown) => Promise<void> | Promise<FormikErrors<IChooseValues>>,
  values: {}
});

export const PlansContextProvider = ({ children, values }: Props) => {
  return (
    <PlansContext.Provider value={values}>{children}</PlansContext.Provider>
  );
};
