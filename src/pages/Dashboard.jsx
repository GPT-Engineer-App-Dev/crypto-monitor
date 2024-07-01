import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function Dashboard() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold">Total Portfolio Value</h2>
              <p className="text-2xl">$100,000</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold">Number of Assets</h2>
              <p className="text-2xl">10</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold">Recent Transactions</h2>
              <p className="text-2xl">5</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Asset List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset Name</TableHead>
                <TableHead>Current Price</TableHead>
                <TableHead>24h Change</TableHead>
                <TableHead>Total Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Bitcoin</TableCell>
                <TableCell>$50,000</TableCell>
                <TableCell>+5%</TableCell>
                <TableCell>$50,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ethereum</TableCell>
                <TableCell>$3,000</TableCell>
                <TableCell>+3%</TableCell>
                <TableCell>$30,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
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

export default Dashboard;