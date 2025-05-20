import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (email: string, senha: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  login: async () => false,
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loadAuthState = async () => {
      const loggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (loggedIn === "true") {
        setIsAuthenticated(true);
      }
    };
    loadAuthState();
  }, []);

  const login = async (email: string, senha: string): Promise<boolean> => {
    const storedEmail = await AsyncStorage.getItem("userEmail");
    const storedSenha = await AsyncStorage.getItem("userSenha");

    if (email === storedEmail && senha === storedSenha) {
      setIsAuthenticated(true);
      await AsyncStorage.setItem("isLoggedIn", "true");
      return true;
    }

    return false;
  };

  const logout = async () => {
    setIsAuthenticated(false);
    await AsyncStorage.setItem("isLoggedIn", "false");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const useAuth = () => useContext(AuthContext);
