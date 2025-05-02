import React, { createContext, useState, ReactNode, useContext } from "react";
// import { signIn } from "../api/auth";
import { useRouter } from "next/navigation";
import { useAppContext } from "./app-context";

type AuthContextType = {
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<string>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  token: null,
  isAuthenticated: false,
  login: async () => "",
  logout: () => {},
});

type AuthProviderProps = {
  children: ReactNode;
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AppProvider");
  }
  return context;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("bearerToken");
    }
    return null;
  });

  // const { setUser } = useAppContext();

  const router = useRouter();

  const isAuthenticated = !!token;

  const login = async (email: string, password: string) => {
    // const response = await signIn(email, password);

    // if (!response) {
    //   throw new Error("Login failed");
    // }

    // const token: string = response;

    // if (typeof window !== "undefined" && token) {
    //   localStorage.setItem("bearerToken", token);
    // }

    // setToken(token);

    // return token;

    return "token";
  };

  const logout = () => {
    setToken(null);
    // setUser({ username: "", role: "default", id: "" });
    localStorage.removeItem("bearerToken");
    localStorage.removeItem("user");
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ login, logout, token, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
