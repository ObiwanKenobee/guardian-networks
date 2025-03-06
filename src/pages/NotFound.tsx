
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import GlassCard from "@/components/ui-custom/GlassCard";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container px-4 py-20 text-center">
        <GlassCard className="max-w-md mx-auto py-12">
          <h1 className="text-7xl font-bold mb-4 text-primary">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg">
            <a href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </a>
          </Button>
        </GlassCard>
      </div>
    </div>
  );
};

export default NotFound;
