import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

import Header from "../components/Header";

export default function Home() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Página Inicial</Text>
      <Link href="../Header.tsx">Ir para Tela 1</Link>
    </View>
  );
}
