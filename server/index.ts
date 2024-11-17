import app from "./app";

const PORT = 3000;

Bun.serve({
	hostname: "0.0.0.0",
	port: PORT, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
	fetch: app.fetch,
});

console.log(`Server is running on ${PORT}...`);
