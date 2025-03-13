
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
      localStorage.setItem("dummyUser", JSON.stringify(user));
      
      toast({
        title: "Login successful",
        description: `Welcome back, ${user.username}`,
      });
      
      navigate("/dashboard");
    } else {
      toast({
        title: "Login failed",
        description: "Invalid credentials",
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
            <span className="font-bold text-xl ml-2">Guardian</span>
          </div>
          <h1 className="mt-6 text-2xl font-bold">Sign In</h1>
          <p className="mt-2 text-muted-foreground">Access your account</p>
        </div>
        
        <div className="flex justify-center mb-4">
          <Button 
            variant="outline"
            onClick={() => setShowDummyLogin(!showDummyLogin)}
            className="w-full"
          >
            {showDummyLogin ? "Use Standard Login" : "Use Demo Accounts"}
          </Button>
        </div>
        
        {showDummyLogin ? (
          <Card>
            <CardHeader>
              <CardTitle>Demo Access</CardTitle>
              <CardDescription>Use test credentials to explore the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDummyLogin}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input 
                      id="username"
                      type="text" 
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password"
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-4">Sign In</Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowCredentials(!showCredentials)}
                className="text-sm text-muted-foreground mb-2"
              >
                {showCredentials ? "Hide Credentials" : "Show Demo Accounts"}
              </Button>
              
              {showCredentials && (
                <div className="w-full overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Role</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead>Password</TableHead>
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
