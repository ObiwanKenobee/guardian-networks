
import { UserButton as ClerkUserButton } from "@clerk/clerk-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";

export const UserButton = () => {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return (
      <SignInButton mode="modal">
        <Button variant="default">Sign In</Button>
      </SignInButton>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="hidden md:block text-sm">
        <p className="font-medium">{user.firstName}</p>
      </div>
      <ClerkUserButton afterSignOutUrl="/" />
    </div>
  );
};

export default UserButton;
