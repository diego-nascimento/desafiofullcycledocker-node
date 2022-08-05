import { IPeople } from "../../../domain/People/protocols";


export interface IlistPeopleInfra {
  list():Promise<IPeople[]>
}