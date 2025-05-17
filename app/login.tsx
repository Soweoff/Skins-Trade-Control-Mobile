import { useContext, useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "expo-router";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const sucesso = login(email, senha);
    if (sucesso) router.push("/calculadora");
    else alert("Credenciais inválidas");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, borderColor: "#ccc", marginBottom: 12, padding: 8 },
  link: { marginTop: 12, color: "blue", textAlign: "center" },
});
