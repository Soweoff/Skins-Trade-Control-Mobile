import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

interface User {
  email: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, senha: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  user: null,
  login: async () => false,
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadAuthState = async () => {
      const loggedIn = await AsyncStorage.getItem("isLoggedIn");
      const email = await AsyncStorage.getItem("userEmail");
      if (loggedIn === "true" && email) {
        setIsAuthenticated(true);
        setUser({ email });
      }
    };
    loadAuthState();
  }, []);

  const login = async (email: string, senha: string): Promise<boolean> => {
    const storedEmail = await AsyncStorage.getItem("userEmail");
    const storedSenha = await AsyncStorage.getItem("userSenha");

    if (email === storedEmail && senha === storedSenha) {
      setIsAuthenticated(true);
      setUser({ email });
      await AsyncStorage.setItem("isLoggedIn", "true");
      return true;
    }

    return false;
  };

  const logout = async () => {
    setIsAuthenticated(false);
    setUser(null);
    await AsyncStorage.setItem("isLoggedIn", "false");
    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
