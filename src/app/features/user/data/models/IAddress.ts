import { ICoordinate } from "./ICoordinate";

export interface IAddress {
   street: string;
   suite: string;
   city: string;
   zipcode: string;
   geo: ICoordinate;
}