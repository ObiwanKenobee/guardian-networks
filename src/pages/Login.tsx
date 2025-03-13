
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignIn, useAuth } from "@clerk/clerk-react";
import { useToast } from "@/hooks/use-toast";
import { dummyUsers } from "@/data/dummyAuthData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Login = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showDummyLogin, setShowDummyLogin] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false);

  // Handle dummy login
  const handleDummyLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const user = dummyUsers.find(u => u.username === username && u.password === password);
    
    if (user) {
      // Store the user info in localStorage to simulate being logged in
      localStorage.setItem("dummyUser", JSON.stringify(user));
      
      // Show success toast
      toast({
        title: "Welcome to the community",
        description: `Hello, ${user.username}! Role: ${user.role}`,
      });
      
      // Redirect based on role
      switch (user.role) {
        case "SuperAdmin":
          navigate("/dashboard");
          break;
        case "Supplier":
          navigate("/dashboard");
          break;
        case "NGO":
          navigate("/dashboard");
          break;
        case "LocalDistributor":
          if (user.geoFence) {
            // In a real app, we would check actual geolocation
            toast({
              description: `Local region recognized: ${user.geoFence}`,
            });
          }
          navigate("/dashboard");
          break;
        case "Government":
          navigate("/dashboard");
          break;
        default:
          navigate("/dashboard");
      }
    } else {
      // Show error toast
      toast({
        title: "Access not recognized",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
    }
  };

  // Populate credentials
  const populateCredentials = (username: string, password: string) => {
    setUsername(username);
    setPassword(password);
  };

  // If already signed in (with Clerk), redirect to dashboard
  if (isSignedIn) {
    toast({
      title: "Already connected",
      description: "Taking you to your community dashboard",
    });
    navigate("/dashboard");
    return null;
  }

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
          <h1 className="mt-6 text-2xl font-bold">Join Our Community</h1>
          <p className="mt-2 text-muted-foreground">Connect to access your Guardian-IO community network</p>
        </div>
        
        {/* Toggle between real and dummy auth */}
        <div className="flex justify-center mb-4">
          <Button 
            variant="outline"
            onClick={() => setShowDummyLogin(!showDummyLogin)}
            className="w-full"
          >
            {showDummyLogin ? "Use Standard Connection" : "Use Community Access Profiles"}
          </Button>
        </div>
        
        {showDummyLogin ? (
          <Card>
            <CardHeader>
              <CardTitle>Community Access</CardTitle>
              <CardDescription>Use test credentials for different community roles</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDummyLogin}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input 
                      id="username"
                      type="text" 
                      placeholder="Your community identifier"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Access Key</Label>
                    <Input 
                      id="password"
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-4">Connect</Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowCredentials(!showCredentials)}
                className="text-sm text-muted-foreground mb-2"
              >
                {showCredentials ? "Hide Access Details" : "Show Community Access Profiles"}
              </Button>
              
              {showCredentials && (
                <div className="w-full overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Role</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead>Access Key</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dummyUsers.map((user) => (
                        <TableRow key={user.username}>
                          <TableCell className="font-medium">{user.role}</TableCell>
                          <TableCell>{user.username}</TableCell>
                          <TableCell>{user.password}</TableCell>
                          <TableCell>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => populateCredentials(user.username, user.password)}
                            >
                              Use
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardFooter>
          </Card>
        ) : (
          <SignIn
            path="/login"
            routing="path"
            signUpUrl="/signup"
            redirectUrl="/dashboard"
          />
        )}
      </div>
    </div>
  );
};

export default Login;
