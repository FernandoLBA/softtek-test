import { apiUrl } from "../../../config";
import { IPlan } from "../../../interfaces";

export const getPlans = async (): Promise<IPlan[]> => {
  return await apiUrl
    .get("/plans.json")
    .then((data) => data.data.list)
    .catch((error) => {
      console.log(error);
    });
};

export const getPlans2 = async (): Promise<IPlan[]> => {
  return await fetch(
    "https://rimac-front-end-challenge.netlify.app/api/plans.json"
  )
    .then((data) => data.json())
    .catch((error) => error);
};
