import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import db from "../database/db.json";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useAuth } from "../context/AuthContext";

export default function Calculadora() {
  const [quantidades, setQuantidades] = useState<Record<string, string>>({});
  const [total, setTotal] = useState<number | null>(null);

  const { user } = useAuth();
  const router = useRouter();
  const params = useLocalSearchParams();

  const modo = params.modo === "alternativo" ? "alternativo" : "padrao";
  const multiplicador = modo === "alternativo" ? 0.8 : 0.65;

  // Proteção da rota
  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user]);

  if (!user) return null;

  const calcular = () => {
    let soma = 0;
    db.itens.forEach((item) => {
      const qtd = parseInt(quantidades[item.id] || "0");
      soma += item.preco * qtd * multiplicador;
    });
    setTotal(soma);
  };

  const alternarModo = () => {
    const novoModo = modo === "padrao" ? "alternativo" : "padrao";
    router.replace(`/calculadora?modo=${novoModo}`);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.topBar}>
        <Text style={styles.modoTexto}>
          Modo atual: {modo === "padrao" ? "Padrão" : "Avançado"}
        </Text>
        <Button
          title={modo === "padrao" ? "Avançado" : "Padrão"}
          onPress={alternarModo}
        />
      </View>

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
  topBar: {
    padding: 16,
    backgroundColor: "#ddd",
  },
  modoTexto: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 16,
    textAlign: "center",
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
