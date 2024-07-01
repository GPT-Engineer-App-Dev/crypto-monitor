import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Index() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-3xl text-center">Welcome to Crypto Monitor</h1>
      <p className="text-center">
        Your one-stop solution for monitoring your crypto assets.
      </p>
      <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
    </div>
  );
}

export default Index;