
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useDummyAuth } from "@/hooks/useDummyAuth";

export interface AuthenticatedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const AuthenticatedRoute = ({ 
  children, 
  allowedRoles = [] 
}: AuthenticatedRouteProps) => {
  const clerkAuth = useUser();
  const dummyAuth = useDummyAuth();
  const { toast } = useToast();
  
  // Determine if we're using dummy auth or clerk auth
  const isDummyAuth = !!dummyAuth.user;
  
  // Combined auth state
  const isSignedIn = isDummyAuth ? dummyAuth.isSignedIn : clerkAuth.isSignedIn;
  const isLoaded = isDummyAuth ? dummyAuth.isLoaded : clerkAuth.isLoaded;
  const user = isDummyAuth ? dummyAuth.user : clerkAuth.user;
  
  // Wait for auth system to load user data
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
    const userRoles = isDummyAuth
      ? user.publicMetadata.roles
      : clerkAuth.user?.publicMetadata.roles as string[] || [];
    
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
