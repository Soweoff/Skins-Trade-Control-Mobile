import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import Card from "../components/Card";
import db from "../database/db.json";

export default function Capsulas() {
  const capsulas = db.itens.filter((item) => item.tipo === "capsula");
  return (
    <FlatList
      data={capsulas}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card nome={item.nome} preco={item.preco} imagem={item.imagem ?? ""} />
      )}
    />
  );
}
const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
};
