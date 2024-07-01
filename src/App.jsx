import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Assets from "./pages/Assets.jsx";
import Transactions from "./pages/Transactions.jsx";
import Settings from "./pages/Settings.jsx";
import SharedLayout from "./components/layouts/sidebar.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
          <Router>
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Index />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="assets" element={<Assets />} />
                <Route path="transactions" element={<Transactions />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;