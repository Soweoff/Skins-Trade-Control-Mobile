import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Link, usePathname } from "expo-router";

const tabs = [
  { label: "Containers", href: "/Itens/containers" },
  { label: "Login", href: "/login" },
];
export default function Header() {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link key={tab.label} href={tab.href} asChild>
            <TouchableOpacity style={styles.tab}>
              <Text style={[styles.tabText, isActive && styles.activeText]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          </Link>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap", // permite quebrar linha se passar da largura
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#333333",
    paddingVertical: 10,
  },
  tab: {
    paddingVertical: 20,
    paddingHorizontal: 19.2,
  },
  tabText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "normal",
  },
  activeText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
