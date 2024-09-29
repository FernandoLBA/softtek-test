import React, { createContext } from "react";

import { IPlansContext } from "../interfaces";

interface Props {
  children: React.ReactNode;
  values: IPlansContext;
}

export const PlansContext = createContext<IPlansContext>({
  handleSubmit: () => {},
  setFieldValue: async()=>{},
  values: {
    forMe: false,
    forSomebody: false,
    plans: []
  },
});

export const PlansContextProvider = ({ children, values }: Props) => {
  return (
    <PlansContext.Provider value={values}>{children}</PlansContext.Provider>
  );
};
