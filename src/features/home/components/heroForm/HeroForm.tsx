import { useFormik } from "formik";

import { HeroSubtitle } from "../";
import {
  AppButton,
  AppLink,
  CheckBoxInput,
  Divider,
  TextInput,
} from "../../../../components";
import { IUser } from "../../../../interfaces";
import { cn, setDataOnLs } from "../../../../utils";
import { documentTypes } from "../../constants";
import { heroFormSchema } from "../../schemas/heroFormSchema";
import { getUser } from "../../services";

export function HeroForm({ className }: { className?: string }) {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    validationSchema: heroFormSchema,
    initialValues: {
      documentType: documentTypes[0].value,
      document: "",
      phone: "",
      politics: false,
      comms: false,
    },
    onSubmit: async () => {
      const data: IUser = await getUser();

      setDataOnLs("user", {
        ...data,
        document: values.document,
        DocumentType: values.documentType,
        phone: values.phone,
      });
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col my-4", className)}
    >
      <Divider className="border-gray-300 my-4" />

      <HeroSubtitle />

      <div className="flex w-full items-center">
        <select
          id="documentType"
          name="documentType"
          value={values.documentType}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-[100px] mt-2 border border-r-none h-[62px] px-4 bg-transparent ${
            errors.document ? "border-red-500" : "border-black"
          } rounded-md rounded-r-none ${
            errors.document ? "text-red-500" : "text-black"
          }`}
        >
          {documentTypes.map(({ value, label }) => (
            <option value={value} key={value}>
              {label.toUpperCase().trim()}
            </option>
          ))}
        </select>

        <TextInput
          id="document"
          label="Nro. de documento"
          className="flex-grow rounded-l-none border-l-0"
          value={values.document}
          onBlur={handleBlur}
          error={errors.document}
          onChange={handleChange}
          showHelper={false}
        />
      </div>
      <span className="text-red-500 text-xs">{errors.document}</span>

      <TextInput
        id="phone"
        label="Celular"
        value={values.phone}
        onBlur={handleBlur}
        error={errors.phone}
        onChange={handleChange}
      />

      {/* //Todo: corregir el check para que aparezca blanco y el fondo negro */}
      <CheckBoxInput
        checked={values.politics}
        onChange={handleChange}
        onBlur={handleBlur}
        id="politics"
        label="Acepto la Política de Privacidad"
        error={errors.politics}
      />

      <CheckBoxInput
        id="comms"
        checked={values.comms}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Acepto la Política de Comunicaciones Comerciales"
        error={errors.comms}
      />

      <AppLink
        href="/"
        text="Aplican Términos y Condiciones."
        className="text-xs underline"
      />

      <AppButton text="Cotiza aquí" />
    </form>
  );
}
