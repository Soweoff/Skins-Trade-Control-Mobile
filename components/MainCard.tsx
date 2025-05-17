import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "./Card";

interface Item {
  id: number;
  nome: string;
  preco: number;
  tipo: string;
}

interface MainCardProps {
  item: Item;
}

export default function MainCard({ item }: MainCardProps) {
  return (
    <View style={styles.container}>
      <Card nome={item.nome} preco={item.preco} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
});
