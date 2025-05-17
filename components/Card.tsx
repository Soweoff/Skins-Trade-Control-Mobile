import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CardProps {
  nome: string;
  preco: number;
}

export default function Card({ nome, preco }: CardProps) {
  return (
    <View style={styles.card}>
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
