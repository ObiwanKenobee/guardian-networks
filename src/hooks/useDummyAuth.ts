
import { useState, useEffect } from 'react';

interface DummyUser {
  username: string;
  role: string;
  mfaEnabled: boolean;
  geoFence?: string;
  publicMetadata: {
    roles: string[];
  };
}

export function useDummyAuth() {
  const [dummyUser, setDummyUser] = useState<DummyUser | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Check localStorage for the dummy user on component mount
    const storedUser = localStorage.getItem('dummyUser');
    if (storedUser) {
      setDummyUser(JSON.parse(storedUser));
    }
    setIsLoaded(true);
  }, []);
  
  const signOut = () => {
    localStorage.removeItem('dummyUser');
    setDummyUser(null);
  };
  
  return {
    user: dummyUser,
    isSignedIn: !!dummyUser,
    isLoaded,
    signOut
  };
}
