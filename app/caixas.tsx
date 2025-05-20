import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header 3"; // import do Header logado
import db from "../database/db.json"; // import do banco de dados

export default function Caixas() {
  const caixas = db.itens.filter((item) => item.tipo === "caixa");

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
