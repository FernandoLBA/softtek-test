import { IPlan } from "../../../interfaces";

export interface IValues {
  [key: string]: boolean | IPlan[];
  forMe: boolean;
  forSomebody: boolean;
  plans: IPlan[];
}
