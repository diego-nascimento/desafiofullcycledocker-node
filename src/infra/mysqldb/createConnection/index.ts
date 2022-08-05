import  {createConnection} from 'mysql'
import { config } from '../configs'

export const createMySqlConnection = () => {
  const connection = createConnection(config)

  connection.query('CREATE DATABASE IF NOT EXISTS nodedb;')

  return {connection}
}
