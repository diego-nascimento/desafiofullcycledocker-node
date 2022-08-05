import  {createConnection} from 'mysql'
import { config } from '../configs'

export const createMySqlConnection = () => {
  const connection = createConnection(config)

  return {connection}
}
