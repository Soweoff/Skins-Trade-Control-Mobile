// /components/Header.tsx (versão logado)
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { showActionSheetWithOptions } = useActionSheet();
  const { logout } = useAuth();
  const router = useRouter();

  const openOptions = () => {
    const options = [
      "Calculadora", // 0
      "Containers", // 1
      "Voltar", // 2
      "Logout", // 3
      "Cancelar", // 4
    ];
    const cancelButtonIndex = 4;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      async (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            router.push("/calculadora");
            break;
          case 1:
            router.push("/Itens/containers");
            break;
          case 2:
            router.back();
            break;
          case 3:
            await logout();
            router.replace("/login");
            break;
          case 4:
          default:
            // Cancelar - não faz nada
            break;
        }
      }
    );
  };

  return (
    <View style={{ padding: 16, backgroundColor: "#222" }}>
      <TouchableOpacity onPress={openOptions} style={{ marginTop: 4 }}>
        <Text style={{ color: "#ccc" }}>☰ Opções</Text>
      </TouchableOpacity>
    </View>
  );
}
