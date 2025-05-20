import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header 3"; // import do Header logado
import db from "../database/db.json";

export default function Capsulas() {
  const capsulas = db.itens.filter((item) => item.tipo === "capsula");

  return (
    <View style={styles.container}>
      <FlatList
        data={capsulas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            nome={item.nome}
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
