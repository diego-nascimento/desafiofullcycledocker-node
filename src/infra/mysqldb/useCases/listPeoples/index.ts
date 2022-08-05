
import { IlistPeopleInfra } from "../../../../application/applicationPeople/protocols/listPeoplesInfra";
import { IPeople } from "../../../../domain/People/protocols";
import {createMySqlConnection} from '../../createConnection'

export class listPeopleInfra implements IlistPeopleInfra{
  async list(): Promise<IPeople[]> {
      const {connection} = createMySqlConnection()
      const newPeopleQuery = `SELECT * FROM people;`

      return new Promise((resolve, reject) => {
        connection.query(newPeopleQuery, [], function (error, result){

          if(error) return resolve([])
          if(!result) return resolve([])
          
          return resolve(JSON.parse(JSON.stringify(result))) 
       })
      })
  }

  
}