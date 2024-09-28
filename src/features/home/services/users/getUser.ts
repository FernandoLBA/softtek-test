import { apiUrl } from "../../../../config";
import { appPaths } from "../../../../constants";
import { IUser } from "../../../../interfaces";

export const getUser = async (): Promise<IUser> => {
  return await apiUrl
    .get("/user.json")
    .then((data) => {
      window.location.replace(appPaths.PLANS);
      return data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
