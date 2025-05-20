// Card.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface CardProps {
  nome: string;
  preco: number;
  imagem: string;
}

export default function Card({ nome, preco, imagem }: CardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.image} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginBottom: 8,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
    borderRadius: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
  },
  preco: {
    fontSize: 14,
    color: "#555",
  },
});
