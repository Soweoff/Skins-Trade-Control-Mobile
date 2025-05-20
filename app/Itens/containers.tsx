import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter, Stack } from "expo-router";
import MainCard from "../../components/MainCard";
import Header from "../../components/Header";

export default function Containers() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Categorias</Text>

        <MainCard
          title="Caixas"
          image="https://res.cloudinary.com/dvqbwddan/image/upload/v1747511851/projeto%20SKT/case/Fever%20Case.png.png"
          onPress={() => router.push("caixas")}
          style={{ marginBottom: 16 }}
        />

        <MainCard
          title="Cápsulas"
          image="https://res.cloudinary.com/dvqbwddan/image/upload/v1747522409/projeto%20SKT/capsule/Sticker%20Capsule%202.png.png"
          onPress={() => router.push("capsulas")}
        />
      </ScrollView>

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
    padding: 16,
    paddingBottom: 100, // espaço para o Header
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
