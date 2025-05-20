import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter, Stack } from "expo-router";
import Header from "../components/Header";

export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await AsyncStorage.setItem("userEmail", email);
      await AsyncStorage.setItem("userSenha", senha);
      Alert.alert("Sucesso", "Conta criada com sucesso!");
      router.replace("/login");
    } catch (error) {
      Alert.alert("Erro", "Falha ao salvar os dados.");
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView contentContainerStyle={styles.content}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
        />
        <Button title="Registrar" onPress={handleRegister} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    padding: 8,
    borderRadius: 4,
  },
});
