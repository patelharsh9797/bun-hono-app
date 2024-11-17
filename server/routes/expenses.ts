import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const expenseSchema = z.object({
	id: z.number().min(1).int().positive(),
	title: z
		.string({ message: "Title must be between 3 and 100 characters" })
		.min(3)
		.max(100),
	amount: z
		.number({ message: "Amount must be a positive number" })
		.int()
		.positive(),
});

const createPostSchema = expenseSchema.omit({ id: true });

type Expense = z.infer<typeof expenseSchema>;

const fakeExpenses: Expense[] = [
	{ id: 1, title: "Rent", amount: 1000 },
	{ id: 2, title: "Gym", amount: 5000 },
	{ id: 3, title: "Bills", amount: 3000 },
];

export const expensesRoute = new Hono()
	.get("/", (c) => {
		return c.json({ expenses: fakeExpenses });
	})
	.post(
		"/",
		zValidator("json", createPostSchema, (result, c) => {
			if (!result.success) {
				const zodErrors = result.error.issues.map((issue) => issue.message);
				return c.json(zodErrors.join(", "), 400);
			}
		}),
		async (c) => {
			const expense = c.req.valid("json");
			fakeExpenses.push({ ...expense, id: fakeExpenses.length + 1 });
			c.status(201);
			return c.json(expense);
		},
	)
	.get("/total-spent", (c) => {
		const total = fakeExpenses.reduce(
			(acc, expense) => acc + expense.amount,
			0,
		);
		return c.json({ total: total });
	})
	.get("/:id{[0-9]+}", (c) => {
		const id = Number(c.req.param("id"));
		const expense = fakeExpenses.find((expense) => expense.id === id);
		if (!expense) {
			return c.notFound();
		}
		return c.json(expense);
	})
	.delete("/:id{[0-9]+}", (c) => {
		const id = Number(c.req.param("id"));
		const expense = fakeExpenses.find((expense) => expense.id === id);
		if (!expense) {
			return c.notFound();
		}
		const deletedExpense = fakeExpenses.splice(
			fakeExpenses.indexOf(expense),
			1,
		)[0];

		return c.json(deletedExpense);
	});

// .delete().put()
