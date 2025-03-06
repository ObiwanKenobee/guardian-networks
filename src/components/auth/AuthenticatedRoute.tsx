
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export interface AuthenticatedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const AuthenticatedRoute = ({ 
  children, 
  allowedRoles = [] 
}: AuthenticatedRouteProps) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { toast } = useToast();
  
  // Wait for Clerk to load user data
  if (!isLoaded) {
    return <div className="h-screen w-full flex items-center justify-center">Loading...</div>;
  }

  // Redirect to login if not signed in
  if (!isSignedIn) {
    toast({
      title: "Authentication required",
      description: "Please sign in to access this page",
      variant: "destructive",
    });
    
    return <Navigate to="/login" replace />;
  }

  // Check role-based access if roles are specified
  if (allowedRoles.length > 0) {
    // Get user roles from metadata
    const userRoles = user.publicMetadata.roles as string[] || [];
    
    // Check if user has at least one of the allowed roles
    const hasPermission = allowedRoles.some(role => userRoles.includes(role));
    
    if (!hasPermission) {
      toast({
        title: "Access denied",
        description: "You don't have permission to access this page",
        variant: "destructive",
      });
      
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
};

export default AuthenticatedRoute;
