import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MainCard from "../../components/MainCard";

interface Item {
  id: number;
  nome: string;
  preco: number;
  tipo: string;
}

export default function Containers() {
  const [itens, setItens] = useState<Item[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/itens")
      .then((response) => response.json())
      .then((data) => setItens(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MainCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
