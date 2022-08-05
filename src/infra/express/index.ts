import Server from './app'


export const startServer = (port: number = 8080) => {
  Server.listen(port, ()=> console.log(`Server running on port ${port}`))
}



