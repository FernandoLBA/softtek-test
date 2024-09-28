import { apiUrl } from "../../../config";

export const getPlans = async () => {
  return await apiUrl
    .get("/plans.json")
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
