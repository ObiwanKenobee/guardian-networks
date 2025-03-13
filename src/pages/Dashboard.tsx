
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import AuthenticatedRoute from "@/components/auth/AuthenticatedRoute";
import UserRoleDashboard from "@/components/dashboard/UserRoleDashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDummyAuth, DummyUser } from "@/hooks/useDummyAuth";
import { dashboardData } from "@/data/dummyAuthData";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { UserResource } from "@clerk/types";

const Dashboard = () => {
  const clerkAuth = useUser();
  const dummyAuth = useDummyAuth();
  
  // Determine if we're using dummy auth or clerk auth
  const isDummyAuth = !!dummyAuth.user;
  
  // Combined auth state
  const isSignedIn = isDummyAuth ? dummyAuth.isSignedIn : clerkAuth.isSignedIn;
  const user = isDummyAuth ? dummyAuth.user : clerkAuth.user;

  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }

  // Extract roles from user metadata and handle type safety
  let userRoles: string[] = [];
  
  if (isDummyAuth && dummyAuth.user) {
    userRoles = dummyAuth.user.publicMetadata.roles || [];
  } else if (clerkAuth.user?.publicMetadata) {
    userRoles = (clerkAuth.user.publicMetadata.roles as string[]) || [];
  }
  
  // Default to "user" role if no roles are set
  if (!userRoles || userRoles.length === 0) {
    userRoles = ["user"];
  }

  // Get the appropriate user name based on auth method
  const userName = isDummyAuth && dummyAuth.user 
    ? dummyAuth.user.username 
    : clerkAuth.user?.firstName || "User";

  return (
    <AuthenticatedRoute>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Welcome, {userName}
            </p>
            
            {isDummyAuth && (
              <Alert className="mt-4">
                <Info className="h-4 w-4" />
                <AlertTitle>Demo Mode</AlertTitle>
                <AlertDescription>
                  You are currently using a demo account with sample data.
                </AlertDescription>
              </Alert>
            )}
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              {userRoles.includes("admin") && (
                <TabsTrigger value="admin">Admin</TabsTrigger>
              )}
              {userRoles.includes("business") && (
                <TabsTrigger value="business">Business</TabsTrigger>
              )}
              {userRoles.includes("ngo") && (
                <TabsTrigger value="ngo">Organization</TabsTrigger>
              )}
              {userRoles.includes("distributor") && (
                <TabsTrigger value="distributor">Distribution</TabsTrigger>
              )}
              {userRoles.includes("government") && (
                <TabsTrigger value="government">Oversight</TabsTrigger>
              )}
            </TabsList>
            
            <TabsContent value="overview" className="p-6 bg-white rounded-lg shadow">
              <UserRoleDashboard role="user" data={null} />
            </TabsContent>
            
            {userRoles.includes("admin") && (
              <TabsContent value="admin" className="p-6 bg-white rounded-lg shadow">
                <UserRoleDashboard role="admin" data={dashboardData.adminDashboard} />
              </TabsContent>
            )}
            
            {userRoles.includes("business") && (
              <TabsContent value="business" className="p-6 bg-white rounded-lg shadow">
                <UserRoleDashboard role="business" data={dashboardData.businessDashboard} />
              </TabsContent>
            )}
            
            {userRoles.includes("ngo") && (
              <TabsContent value="ngo" className="p-6 bg-white rounded-lg shadow">
                <UserRoleDashboard role="ngo" data={dashboardData.ngoDashboard} />
              </TabsContent>
            )}
            
            {userRoles.includes("distributor") && (
              <TabsContent value="distributor" className="p-6 bg-white rounded-lg shadow">
                <UserRoleDashboard role="distributor" data={dashboardData.distributorDashboard} />
              </TabsContent>
            )}
            
            {userRoles.includes("government") && (
              <TabsContent value="government" className="p-6 bg-white rounded-lg shadow">
                <UserRoleDashboard role="government" data={dashboardData.governmentDashboard} />
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>
    </AuthenticatedRoute>
  );
};

export default Dashboard;
