import { IPeople } from "../../../domain/People/protocols";
import { IAddPeopleInfra } from "../protocols/addPeopleInfra";
import { IlistPeopleInfra } from "../protocols/listPeoplesInfra";
import { IPeopleApplication, outputType } from "./protocols";


export class applicationPeopleImplementation implements IPeopleApplication {
  private readonly addPeopleImplementation: IAddPeopleInfra
  private readonly listPeopleImplementation: IlistPeopleInfra

  constructor(addPeople: IAddPeopleInfra, listPeople: IlistPeopleInfra){
    this.addPeopleImplementation = addPeople
    this.listPeopleImplementation = listPeople
  }

  async handle(name: string): Promise<outputType> {
    await this.addPeople(name)
    const peoples = await this.listPeople()
    const text = this.getText()
    return {
      text,
      peoples
    }
  }

  private getText():string {
    return '<h1>Full Cycle Rocks!</h1>'
  }

  private async addPeople(name: string): Promise<void> {
    return this.addPeopleImplementation.add(name)
  }

  private async listPeople():Promise<IPeople[]>{
    return this.listPeopleImplementation.list()
  }
}