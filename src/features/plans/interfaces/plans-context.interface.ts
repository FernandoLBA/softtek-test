import { FormikErrors } from "formik";

import { IValues } from "./values.interface";

export interface IPlansContext {
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean | undefined
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{ forMe: boolean; forSomebody: boolean; plans: never[] }>
      >;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  values: IValues;
}
