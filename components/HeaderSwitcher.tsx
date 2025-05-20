// /components/HeaderSwitcher.tsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import HeaderLogged from "./Header 3"; // Header 3
import HeaderLoggedOut from "./Header 2"; // Header 2
import HeaderDefault from "./Header"; // Header 1

export default function HeaderSwitcher() {
  const { isAuthenticated } = useAuth();

  // Escolha qual Header você quer mostrar quando estiver logado/deslogado
  if (isAuthenticated) {
    return <HeaderLogged />;
  } else {
    return <HeaderLoggedOut />;
  }

  // ou, se quiser um fallback neutro:
  // return <HeaderDefault />;
}
