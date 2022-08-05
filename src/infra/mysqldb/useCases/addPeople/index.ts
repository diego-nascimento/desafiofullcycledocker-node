import { IAddPeopleInfra } from "../../../../application/applicationPeople/protocols/addPeopleInfra";

import {createMySqlConnection} from '../../createConnection'



export class addPeopleInfra implements IAddPeopleInfra{
  async add(name: string): Promise<void> {
    try {
      const {connection} = createMySqlConnection()
      const query = 'CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY (id));'
      connection.query(query)

      const values = [[name]]
  
      const newPeopleQuery = `INSERT INTO people (name) VALUES (?);`
      connection.query(newPeopleQuery, values)
      connection.end()
    } catch (error) {
      console.log(error)
    }
   
  }
}