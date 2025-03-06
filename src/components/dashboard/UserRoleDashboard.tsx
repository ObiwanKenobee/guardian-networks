
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  BoxIcon, 
  Truck, 
  BarChart3, 
  AlertTriangle, 
  FileText, 
  ShieldAlert, 
  Landmark,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface UserRoleDashboardProps {
  role: "user" | "admin" | "business" | "ngo" | "distributor" | "government";
  data: any | null;
}

const UserRoleDashboard = ({ role, data }: UserRoleDashboardProps) => {
  // Dashboard content based on user role
  switch (role) {
    case "admin":
      return (
        <div>
          <h2 className="text-2xl font-bold mb-6">Super Admin Dashboard</h2>
          
          {data && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.activeUsers}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Pending Verifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.pendingVerifications}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Blocked Attempts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.blockedAttempts}</div>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">User Management</CardTitle>
                <Users className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Manage all users and role assignments across the platform.</CardDescription>
                
                {data && data.supplyChainRisks && (
                  <div className="mt-4 border rounded-md">
                    <div className="p-2 bg-secondary/20 border-b">
                      <h3 className="font-semibold">Supply Chain Risk Alerts</h3>
                    </div>
                    <div className="p-2 divide-y">
                      {data.supplyChainRisks.map((risk: any, index: number) => (
                        <div key={index} className="py-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{risk.region}</span>
                            <Badge 
                              variant={risk.riskLevel === "High" ? "destructive" : "outline"}
                            >
                              {risk.riskLevel}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Expected shortage: {risk.expectedShortage}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
          
          {data && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.pendingOrders}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Completed Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.completedOrders}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.totalVolume}</div>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Supply Order Management</CardTitle>
                <BoxIcon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Create, track and manage your humanitarian supply orders.</CardDescription>
                
                {data && data.contractBids && (
                  <div className="mt-4 border rounded-md">
                    <div className="p-2 bg-secondary/20 border-b">
                      <h3 className="font-semibold">Contract Bids</h3>
                    </div>
                    <div className="p-2 divide-y">
                      {data.contractBids.map((bid: any, index: number) => (
                        <div key={index} className="py-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{bid.ngo}</span>
                            <Badge 
                              variant={bid.status === "Accepted" ? "default" : "outline"}
                            >
                              {bid.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Bid amount: {bid.bidAmount}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
          
          {data && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Verified Shipments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.verifiedShipments}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Disputed Shipments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.disputedShipments}</div>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Aid Tracking</CardTitle>
                <BoxIcon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Real-time visibility of aid movement and distribution.</CardDescription>
                
                {data && data.realTimeShipments && (
                  <div className="mt-4 border rounded-md">
                    <div className="p-2 bg-secondary/20 border-b">
                      <h3 className="font-semibold">Real-time Shipments</h3>
                    </div>
                    <div className="p-2 divide-y">
                      {data.realTimeShipments.map((shipment: any, index: number) => (
                        <div key={index} className="py-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{shipment.id}</span>
                            <Badge 
                              variant={
                                shipment.status === "In Transit" ? "default" : 
                                shipment.status === "Delayed" ? "destructive" : 
                                "outline"
                              }
                            >
                              {shipment.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Location: {shipment.location}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
                
                {data && data.assignedDeliveries && (
                  <div className="mt-4 border rounded-md">
                    <div className="p-2 bg-secondary/20 border-b">
                      <h3 className="font-semibold">Assigned Deliveries</h3>
                    </div>
                    <div className="p-2 divide-y">
                      {data.assignedDeliveries.map((delivery: any, index: number) => (
                        <div key={index} className="py-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{delivery.orderId}</span>
                            <div className="flex items-center">
                              {delivery.status === "Delivered" ? (
                                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                              ) : (
                                <Clock className="h-4 w-4 text-amber-500 mr-1" />
                              )}
                              <span className={cn(
                                delivery.status === "Delivered" ? "text-green-500" : "text-amber-500"
                              )}>
                                {delivery.status}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Destination: {delivery.destination}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Inventory Status</CardTitle>
                <BoxIcon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Report and monitor supply levels in real-time.</CardDescription>
                
                {data && data.messages && (
                  <div className="mt-4 border rounded-md">
                    <div className="p-2 bg-secondary/20 border-b">
                      <h3 className="font-semibold">Messages</h3>
                    </div>
                    <div className="p-2 divide-y">
                      {data.messages.map((message: any, index: number) => (
                        <div key={index} className="py-2">
                          <div className="flex items-center">
                            <span className="font-medium mr-2">{message.from}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {message.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      );
      
    case "government":
      return (
        <div>
          <h2 className="text-2xl font-bold mb-6">Government View</h2>
          
          {data && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Suspicious Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.suspiciousTransactions}</div>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Compliance Reports</CardTitle>
                <Landmark className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription>Access read-only supply chain compliance reports.</CardDescription>
                
                {data && data.complianceReports && (
                  <div className="mt-4 border rounded-md">
                    <div className="p-2 bg-secondary/20 border-b">
                      <h3 className="font-semibold">Compliance Reports</h3>
                    </div>
                    <div className="p-2 divide-y">
                      {data.complianceReports.map((report: any, index: number) => (
                        <div key={index} className="py-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{report.title}</span>
                            <Badge 
                              variant={report.status === "Verified" ? "default" : "outline"}
                            >
                              {report.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Report ID: {report.id}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
