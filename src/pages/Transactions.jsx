import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function Transactions() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Asset</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Transaction Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-10-01</TableCell>
                <TableCell>Bitcoin</TableCell>
                <TableCell>0.5 BTC</TableCell>
                <TableCell>Buy</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-10-02</TableCell>
                <TableCell>Ethereum</TableCell>
                <TableCell>10 ETH</TableCell>
                <TableCell>Sell</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default Transactions;