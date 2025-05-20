// components/ItemActionSheet.tsx

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Item = {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  tipo: string;
};

type Props = {
  item: Item;
  onAddToCalculator: (item: Item) => void;
  onClose: () => void;
};

export default function ItemActionSheet({
  item,
  onAddToCalculator,
  onClose,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.price}>Preço: R$ {item.preco.toFixed(2)}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onAddToCalculator(item);
          onClose();
        }}
      >
        <Text style={styles.buttonText}>➕ Adicionar à Calculadora</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
