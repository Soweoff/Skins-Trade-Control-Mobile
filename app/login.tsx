import { useContext, useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useRouter, Stack } from "expo-router";
import Header from "../components/Header";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const sucesso = await login(email, senha);
    if (sucesso) {
      router.replace("/calculadora");
    } else {
      alert("Credenciais inválidas");
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
        <Button title="Entrar" onPress={handleLogin} />
        <Text onPress={() => router.push("/register")} style={styles.link}>
          Criar conta
        </Text>
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
  link: {
    marginTop: 12,
    color: "blue",
    textAlign: "center",
  },
});
