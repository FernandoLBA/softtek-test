import { useFormik } from "formik";
import { forMe, forSomebody } from "../../imgs";
import { ICardsData } from "../../interfaces";
import { Card } from "./Card";

export function CardsContainer() {
  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      forMe: false,
      forSomebody: false,
    },
    onSubmit: (values) => {
      console.log("🚀 ~ CardsContainer ~ submitting:", values);
    },
  });

  return (
    <div className="flex justify-center items-center flex-wrap gap-8">
      {cardsData.map((card) => (
        <Card
          key={card.name}
          data={card}
          setFieldValue={setFieldValue}
          handleSubmit={handleSubmit}
          values={values}
        />
      ))}
    </div>
  );
}

const cardsData: ICardsData[] = [
  {
    name: "forMe",
    img: forMe,
    forWhom: "Para mí",
    content: "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
  },
  {
    name: "forSomebody",
    img: forSomebody,
    forWhom: "Para alguien más",
    content:
      "Realiza una cotización para uno de tus familiares o cualquier persona.",
  },
];
