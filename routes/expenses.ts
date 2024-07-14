import { Hono } from "hono";

const fakeExpenses = [
  { id: 1, title: "Rent", amount: 1000 },
  { id: 1, title: "Gym", amount: 5000 },
  { id: 1, title: "Bills", amount: 3000 },
]

export const expensesRoute = new Hono()
  .get("/", (c) => {
    return c.json({ expenses: fakeExpenses })
  })
  .post("/", async (c) => {
    const expense = await c.req.json()

    console.log(expense)
    return c.json(expense)
  })
// .delete().put()
