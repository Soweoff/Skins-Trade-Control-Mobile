import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useState } from "react";
import db from "../database/db.json";
import { Stack } from "expo-router";
import Header from "../components/Header";

export default function Calculadora() {
  const [quantidades, setQuantidades] = useState<Record<string, string>>({});
  const [total, setTotal] = useState<number | null>(null);

  const calcular = () => {
    let soma = 0;
    db.itens.forEach((item) => {
      const qtd = parseInt(quantidades[item.id] || "0");
      soma += item.preco * qtd * 0.65;
    });
    setTotal(soma);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView contentContainerStyle={styles.content}>
        {db.itens.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <Text>{item.nome}</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="0"
              value={quantidades[item.id] || ""}
              onChangeText={(text) =>
                setQuantidades({ ...quantidades, [item.id]: text })
              }
            />
          </View>
        ))}

        <Button title="Calcular" onPress={calcular} />

        {total !== null && (
          <Text style={styles.total}>Total no PIX: R$ {total.toFixed(2)}</Text>
        )}
      </ScrollView>
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
    paddingBottom: 100,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 60,
    padding: 4,
    borderRadius: 4,
  },
  total: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
