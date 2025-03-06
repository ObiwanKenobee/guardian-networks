
import { UserButton as ClerkUserButton } from "@clerk/clerk-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useDummyAuth } from "@/hooks/useDummyAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

export const UserButton = () => {
  const { isSignedIn: isClerkSignedIn, user: clerkUser } = useUser();
  const { isSignedIn: isDummySignedIn, user: dummyUser, signOut: dummySignOut } = useDummyAuth();
  const navigate = useNavigate();

  // User is signed in with dummy auth
  if (isDummySignedIn && dummyUser) {
    return (
      <div className="flex items-center gap-2">
        <div className="hidden md:block text-sm">
          <p className="font-medium">{dummyUser.username}</p>
          <p className="text-xs text-muted-foreground">{dummyUser.role}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {dummyUser.username.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                dummySignOut();
                navigate('/');
              }}
            >
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  // User is signed in with Clerk
  if (isClerkSignedIn) {
    return (
      <div className="flex items-center gap-2">
        <div className="hidden md:block text-sm">
          <p className="font-medium">{clerkUser.firstName}</p>
        </div>
        <ClerkUserButton afterSignOutUrl="/" />
      </div>
    );
  }

  // User is not signed in
  return (
    <SignInButton mode="modal">
      <Button variant="default">Sign In</Button>
    </SignInButton>
  );
};

export default UserButton;
