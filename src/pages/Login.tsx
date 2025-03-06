
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, SignIn } from "@clerk/clerk-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (isSignedIn) {
      toast({
        title: "Already signed in",
        description: "Redirecting to dashboard",
      });
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="w-full max-w-md px-8 py-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="font-bold text-xl ml-2">Guardian-IO</span>
          </div>
          <h1 className="mt-6 text-2xl font-bold">Welcome Back</h1>
          <p className="mt-2 text-muted-foreground">Sign in to access your secure Guardian-IO account</p>
        </div>
        
        <SignIn
          path="/login"
          routing="path"
          signUpUrl="/signup"
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  );
};

export default Login;
