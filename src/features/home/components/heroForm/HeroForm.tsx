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
import { cn, setDataOnLs, whatsMyAge } from "../../../../utils";
import { documentTypes } from "../../constants";
import { heroFormSchema } from "../../schemas/heroFormSchema";
import { getUser } from "../../services";

export function HeroForm({ className }: { className?: string }) {
  const {
    values,
    errors,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
  } = useFormik({
    validationSchema: heroFormSchema,
    initialValues: {
      documentType: documentTypes[0].value,
      document: "",
      phone: "",
      politics: 0,
      comms: 0,
    },
    onSubmit: async () => {
      const user: IUser = await getUser();

      setDataOnLs("user", {
        ...user,
        document: values.document,
        documentType: values.documentType,
        phone: values.phone,
        age: whatsMyAge(new Date(user.birthDay)),
      });
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col my-4", className)}
    >
      <Divider className="border-gray-light my-4" />

      <HeroSubtitle />

      <div className="flex w-full items-center">
        <select
          id="documentType"
          name="documentType"
          value={values.documentType}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-[100px] mt-2 border border-r-none h-[62px] px-4 bg-transparent ${
            errors.document ? "border-red-dark" : "border-gray-medium"
          } rounded-md rounded-r-none ${
            errors.document ? "text-red-dark" : "text-black-dark"
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
      <span className="text-red-dark text-xs">{errors.document}</span>

      <TextInput
        id="phone"
        label="Celular"
        value={values.phone}
        onBlur={handleBlur}
        error={errors.phone}
        onChange={handleChange}
      />

      <CheckBoxInput
        value={values.politics}
        setValue={setFieldValue}
        id="politics"
        label="Acepto la Política de Privacidad"
        error={errors.politics}
      />

      <CheckBoxInput
        id="comms"
        value={values.comms}
        setValue={setFieldValue}
        label="Acepto la Política de Comunicaciones Comerciales"
        error={errors.comms}
      />

      <AppLink
        href="/"
        text="Aplican Términos y Condiciones."
        className="text-xs text-black-dark underline"
      />

      <AppButton text="Cotiza aquí" />
    </form>
  );
}
