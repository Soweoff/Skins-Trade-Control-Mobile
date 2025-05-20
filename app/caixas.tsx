import { FlatList, View } from "react-native";
import { StyleSheet } from "react-native";
import Card from "../components/Card";
import db from "../database/db.json";

export default function Caixas() {
  const caixas = db.itens.filter((item) => item.tipo === "caixa");
  return (
    <FlatList
      data={caixas}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card
          nome={item.nome ?? ""}
          preco={item.preco}
          imagem={item.imagem ?? ""}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
