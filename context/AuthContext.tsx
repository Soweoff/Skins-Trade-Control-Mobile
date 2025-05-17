import React, { createContext, useState, ReactNode } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (email: string, senha: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  login: (email: string, senha: string) => false,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email: string, senha: string): boolean => {
    // Exemplo simples de validação, substitua pela sua lógica real
    if (email === "teste@teste.com" && senha === "1234") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
