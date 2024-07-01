import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function Assets() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Asset Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold">Bitcoin</h2>
            <p className="text-2xl">$50,000</p>
            <p className="text-lg">24h Change: +5%</p>
            <p className="text-lg">Market Cap: $1 Trillion</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Price Chart</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Placeholder for price chart */}
          <div className="h-64 bg-gray-200 rounded-lg"></div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Historical Data</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Volume</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-10-01</TableCell>
                <TableCell>$48,000</TableCell>
                <TableCell>1000 BTC</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-10-02</TableCell>
                <TableCell>$49,000</TableCell>
                <TableCell>1200 BTC</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default Assets;