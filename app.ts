import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.json({ "message": "Testing Hono!!!" }))

export default app
