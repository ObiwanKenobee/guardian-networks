
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  BoxIcon, 
  Truck, 
  BarChart3, 
  AlertTriangle, 
  FileText, 
  ShieldAlert, 
  Landmark 
} from "lucide-react";

interface UserRoleDashboardProps {
  role: "user" | "admin" | "business" | "ngo" | "distributor" | "government";
}

const UserRoleDashboard = ({ role }: UserRoleDashboardProps) => {
  // Dashboard content based on user role
  switch (role) {
    case "admin":
      return (
        <div>
          <h2 className="text-2xl font-bold mb-6">Super Admin Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">User Management</CardTitle>
                <Users className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Manage all users and role assignments across the platform.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Supply Chain Analytics</CardTitle>
                <BarChart3 className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Access AI-powered analytics and global supply chain metrics.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Blockchain Validation</CardTitle>
                <ShieldAlert className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Monitor and validate all blockchain transactions on the platform.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Incident Response</CardTitle>
                <AlertTriangle className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>View and manage critical supply chain incidents and alerts.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      );
      
    case "business":
      return (
        <div>
          <h2 className="text-2xl font-bold mb-6">Business Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Supply Order Management</CardTitle>
                <BoxIcon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Create, track and manage your humanitarian supply orders.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Smart Contract Bidding</CardTitle>
                <FileText className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Securely compete for and bid on humanitarian contracts.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      );
      
    case "ngo":
      return (
        <div>
          <h2 className="text-2xl font-bold mb-6">NGO Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Aid Tracking</CardTitle>
                <BoxIcon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Real-time visibility of aid movement and distribution.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Supply Chain Alerts</CardTitle>
                <AlertTriangle className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>AI-driven crisis forecasting and supply chain alerts.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      );
      
    case "distributor":
      return (
        <div>
          <h2 className="text-2xl font-bold mb-6">Distributor Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Delivery Management</CardTitle>
                <Truck className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Manage and confirm deliveries with GPS-based proof.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Inventory Status</CardTitle>
                <BoxIcon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Report and monitor supply levels in real-time.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      );
      
    case "government":
      return (
        <div>
          <h2 className="text-2xl font-bold mb-6">Government View</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Compliance Reports</CardTitle>
                <Landmark className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Access read-only supply chain compliance reports.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Transaction Verification</CardTitle>
                <FileText className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Verify legality of supply transactions in crisis areas.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      );
      
    default: // Regular user
      return (
        <div>
          <h2 className="text-2xl font-bold mb-6">Welcome to Guardian-IO</h2>
          <p className="text-lg mb-6">
            Your secure, AI-powered supply chain platform for crisis zones. 
            To access more features, please contact an administrator to assign you specific roles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Getting Started</CardTitle>
                <Users className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Learn how to use Guardian-IO and its key features.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      );
  }
};

export default UserRoleDashboard;
