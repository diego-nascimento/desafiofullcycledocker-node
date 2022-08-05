import {IPeople} from '../../../domain/People/protocols'

export interface IAddPeopleInfra {
  add(name: string):Promise<void>
}