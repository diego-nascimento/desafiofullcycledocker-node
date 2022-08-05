import { applicationPeopleImplementation } from "../../../application/applicationPeople/useCases"
import { addPeopleInfra } from "../../../infra/mysqldb/useCases/addPeople"
import { listPeopleInfra } from "../../../infra/mysqldb/useCases/listPeoples"



export const applicationPeopleImplementationFactory = () => {
  const addPeopleInfraFactory = new addPeopleInfra()
  const  listPeoplesInfraFactory = new listPeopleInfra()
  return new applicationPeopleImplementation(addPeopleInfraFactory, listPeoplesInfraFactory)
}