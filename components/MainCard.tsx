import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  Image,
  View,
} from "react-native";

interface MainCardProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  image: string;
}

export default function MainCard({
  title,
  onPress,
  style,
  image,
}: MainCardProps) {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 0,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "75%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  textContainer: {
    width: "75%",
    alignItems: "center",
    marginTop: -35, // diminui o espaço entre imagem e texto
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
