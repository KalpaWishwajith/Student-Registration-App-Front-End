import React, { createContext, useContext, useState, ReactNode } from "react";
import { loginStudent, loginAdmin } from "../services/LoginService.ts";

// Define the shape of the user object
interface User {
  id: number;
  email: string;
  role: "student" | "admin";
}

// Define the shape of the AuthContext
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  adminLogin: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const response = await loginStudent({ email, password });
    setUser({ id: response.studentId, email: response.email, role: "student" });
    localStorage.setItem("user", JSON.stringify(user));
  };

  async function adminLogin(username: string, password: string) {
    const response = await loginAdmin({ username, password });
    setUser({ id: response.adminId, email: response.username, role: "admin" });
    localStorage.setItem("user", JSON.stringify(user));
  }

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Check if the user is authenticated
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, adminLogin, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
