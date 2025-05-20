// /components/HeaderSwitcher.tsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import HeaderLogged from "./Header 3"; // Header para usuário logado
import HeaderLoggedOut from "./Header 2"; // Header para usuário deslogado
import HeaderDefault from "./Header"; // Header padrão neutro, se quiser usar

export default function HeaderSwitcher() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <HeaderLogged />;
  } else if (!isAuthenticated) {
    return <HeaderLoggedOut />;
  }

  // fallback opcional (por segurança)
  return <HeaderDefault />;
}
