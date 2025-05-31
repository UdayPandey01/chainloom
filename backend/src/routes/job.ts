import { Hono } from 'hono'

export const jobRouter = new Hono()

jobRouter.get('/', (c) => {
  return c.json({ message: 'All jobs listed here.' })
})

jobRouter.post('/', async (c) => {
  const data = await c.req.json()
  console.log('Received job:', data)
  return c.json({ status: 'Job received' })
})
