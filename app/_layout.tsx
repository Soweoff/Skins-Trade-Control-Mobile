// /app/_layout.tsx
import { Slot } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { AuthProvider } from "../context/AuthContext";
import HeaderSwitcher from "../components/HeaderSwitcher";
import { View, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <AuthProvider>
      <ActionSheetProvider>
        <View style={styles.container}>
          <Slot />
          <HeaderSwitcher />
        </View>
      </ActionSheetProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between", // empurra o HeaderSwitcher para o fim
  },
});
