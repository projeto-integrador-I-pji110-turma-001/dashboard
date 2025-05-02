import { User } from "@/types/user";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  useContext,
} from "react";

interface AppContextType {
  user: Partial<User>;
  setUser: Dispatch<SetStateAction<Partial<User>>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Partial<User>>(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      return storedUser
        ? JSON.parse(storedUser)
        : { username: "", role: "default", id: "" };
    }
    return { username: "", role: "default", id: "" };
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
