import { IPeople } from "../../../domain/People/protocols";

export interface outputType {
  text: string,
  peoples: IPeople[]
}

export interface IPeopleApplication {
  handle(name: string): Promise<outputType>
}