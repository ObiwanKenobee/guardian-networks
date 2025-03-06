
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import AuthenticatedRoute from "@/components/auth/AuthenticatedRoute";
import UserRoleDashboard from "@/components/dashboard/UserRoleDashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }

  // Extract roles from user metadata
  const userRoles = (user?.publicMetadata?.roles as string[]) || [];
  
  // Default to "user" role if no roles are set
  if (userRoles.length === 0) {
    userRoles.push("user");
  }

  return (
    <AuthenticatedRoute>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome, {user.firstName || "User"}</h1>
            <p className="text-muted-foreground">
              Current role(s): {userRoles.join(", ")}
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              {userRoles.includes("admin") && (
                <TabsTrigger value="admin">Admin Panel</TabsTrigger>
              )}
              {userRoles.includes("business") && (
                <TabsTrigger value="business">Business Operations</TabsTrigger>
              )}
              {userRoles.includes("ngo") && (
                <TabsTrigger value="ngo">NGO Operations</TabsTrigger>
              )}
              {userRoles.includes("distributor") && (
                <TabsTrigger value="distributor">Distribution Center</TabsTrigger>
              )}
              {userRoles.includes("government") && (
                <TabsTrigger value="government">Regulatory View</TabsTrigger>
              )}
            </TabsList>
            
            <TabsContent value="overview" className="p-6 bg-white rounded-lg shadow">
              <UserRoleDashboard role="user" />
            </TabsContent>
            
            {userRoles.includes("admin") && (
              <TabsContent value="admin" className="p-6 bg-white rounded-lg shadow">
                <UserRoleDashboard role="admin" />
              </TabsContent>
            )}
            
            {userRoles.includes("business") && (
              <TabsContent value="business" className="p-6 bg-white rounded-lg shadow">
                <UserRoleDashboard role="business" />
              </TabsContent>
            )}
            
            {userRoles.includes("ngo") && (
              <TabsContent value="ngo" className="p-6 bg-white rounded-lg shadow">
                <UserRoleDashboard role="ngo" />
              </TabsContent>
            )}
            
            {userRoles.includes("distributor") && (
              <TabsContent value="distributor" className="p-6 bg-white rounded-lg shadow">
                <UserRoleDashboard role="distributor" />
              </TabsContent>
            )}
            
            {userRoles.includes("government") && (
              <TabsContent value="government" className="p-6 bg-white rounded-lg shadow">
                <UserRoleDashboard role="government" />
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>
    </AuthenticatedRoute>
  );
};

export default Dashboard;
