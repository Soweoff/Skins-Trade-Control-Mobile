import React from "react";
import { View, StyleSheet } from "react-native";
import { AuthProvider } from "../context/AuthContext";
import Header from "../components/Header";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
