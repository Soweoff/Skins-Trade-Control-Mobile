import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

import Header from "../components/Header 2";

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo ao Skins Trade Control</Text>
        <Text style={styles.message}>
          Crie seu cadastro para ter acesso à função da calculadora, onde você
          pode estimar o valor das suas skins no PIX.
        </Text>
        <Text style={styles.message}>
          Você pode verificar o valor dos itens em "Containers" usando o menu
          abaixo sem precisar se registrar.
        </Text>
      </View>

      <View style={styles.footer}>
        <Header />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 12,
    color: "#333",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
