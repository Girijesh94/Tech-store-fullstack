"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface UserType {
  email: string;
  name?: string;
  preferences?: { [key: string]: boolean };
}

interface AuthContextType {
  user: UserType | null;
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: { name: string; email: string }) => Promise<void>;
  updatePreferences: (prefs: { [key: string]: boolean }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");
    if (storedToken && storedEmail) {
      setToken(storedToken);
      setUser({ email: storedEmail, name: "User", preferences: {} });
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
    const receivedToken = res.data.token;
    setToken(receivedToken);
    setUser({ email, name: "User", preferences: {} });
    localStorage.setItem("token", receivedToken);
    localStorage.setItem("email", email);
  };

  const register = async (email: string, password: string) => {
    await axios.post("http://localhost:5000/api/auth/register", {
      email,
      password,
    });
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const updateProfile = async (data: { name: string; email: string }) => {
    setUser((prev) => prev ? { ...prev, ...data } : null);
    // Optional: send to backend
  };

  const updatePreferences = async (prefs: { [key: string]: boolean }) => {
    setUser((prev) => prev ? { ...prev, preferences: { ...prev.preferences, ...prefs } } : null);
    // Optional: send to backend
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        token,
        login,
        register,
        logout,
        updateProfile,
        updatePreferences,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
