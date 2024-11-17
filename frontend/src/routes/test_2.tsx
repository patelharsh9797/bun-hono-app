import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test_2")({
	component: About,
});

function About() {
	return (
		<div className="">
			<h1>Yet Another test Page</h1>
		</div>
	);
}
