import React from "react";
import { View, StyleSheet } from "react-native";
import { AuthProvider } from "../context/AuthContext";
import Header from "../components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <Header />
        {children}
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
