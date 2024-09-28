import * as yup from "yup";
import { regex } from "../../../utils";

export const heroFormSchema = yup.object().shape({
  documentType: yup.string().required(),
  document: yup
    .string()
    .matches(regex.onlyNumbers, "Este campo solo admite números")
    .min(8, "Debe contener al menos 8 números")
    .max(9, "Debe contener 9 números máximo")
    .required("Este campo no debe estar vacío"),
  phone: yup
    .string()
    .matches(regex.phone, "Debe ingresar 9 dígitos numericos")
    .required("Este campo no debe estar vacío"),
  politics: yup.boolean().oneOf([true], "Debe aceptar las políticas"),
  comms: yup.boolean().oneOf([true], "Debe aceptar la política"),
});
