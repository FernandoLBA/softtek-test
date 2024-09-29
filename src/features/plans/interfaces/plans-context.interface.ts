import { FormikErrors } from "formik";

import { IValues } from "./values.interface";

export interface IPlansContext {
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean
  ) => Promise<void> | Promise<FormikErrors<{ [key: string]: boolean }>>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  values: IValues;
}
