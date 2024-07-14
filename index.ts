import app from "./app";

Bun.serve({
  // port: 8080, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
  fetch: app.fetch
});

console.log("Server is running...");
