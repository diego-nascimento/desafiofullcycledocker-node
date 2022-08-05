import express, {Express} from 'express'

import {router} from './routes'

class App {
  server: Express
  constructor(){
    this.server = express()
    this.midwares()
  }

  private midwares () {
    this.server.use(express.json())
    this.server.use(router)
  }
}


export default new App().server