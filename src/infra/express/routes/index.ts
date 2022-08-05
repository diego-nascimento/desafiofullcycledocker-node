import {Request, Response, Router} from 'express'

import {applicationPeopleImplementationFactory} from '../../../factory/People/applicationPeopleImplementation'

const router = Router()

router.get('/', async (request: Request, response: Response) => {
  const aplicationPeople = applicationPeopleImplementationFactory()
  const {peoples, text} = await aplicationPeople.handle('Diego')
  return response.json({
    peoples,
    text
  })
})



export {router}