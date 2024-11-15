import { createFileRoute } from "@tanstack/react-router";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/expenses")({
  component: Expenses,
});

async function getExpenses() {
  const res = await api.expenses.$get();
  if (!res.ok) {
    throw new Error("Server Error!!!");
  }
  const data = await res.json();
  return data;
}

function Expenses() {
  const { data, error, isPending } = useQuery({
    queryKey: ["get-expenses"],
    queryFn: getExpenses,
  });

  if (error) return "An error has occured." + error.message;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Table>
        <TableCaption>A list of all your expenses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isPending
            ? Array.from({ length: 3 }).map((_, index) => (
                <TableRow key={`fake-row-${index}`}>
                  <TableCell className="font-medium">
                    <Skeleton className="h-4" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="h-4" />
                  </TableCell>
                </TableRow>
              ))
            : data?.expenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell className="font-medium">{expense.id}</TableCell>
                  <TableCell>{expense.title}</TableCell>
                  <TableCell className="text-right">{expense.amount}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      {/* <Card className="w-[350px] m-auto"> */}
      {/*   <CardHeader> */}
      {/*     <CardTitle>Total Spent</CardTitle> */}
      {/*     <CardDescription>The total amount you've spent.</CardDescription> */}
      {/*   </CardHeader> */}
      {/*   <CardContent>{isPending ? "..." : data.total}</CardContent> */}
      {/* </Card> */}
    </div>
  );
}
