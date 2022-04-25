import express, { Application, Request, Response, NextFunction } from 'express'

// Boot express
const app: Application = express()
const port = 5000

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).send({ data: 'Hello from Ornio AS' })
})

// Start server
app.listen(port, () => {
  return console.log(`Server is listening on port ${port}!`)
})
