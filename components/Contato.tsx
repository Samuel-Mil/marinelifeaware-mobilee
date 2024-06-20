import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import Header from "./Header";

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para enviar o formulário
    Alert.alert('Formulário Enviado', `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
  };

  return (
    <ScrollView>
      <Header title="Contato"/>
      <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Mensagem:</Text>
      <TextInput
        style={styles.textarea}
        placeholder="Digite sua mensagem"
        value={message}
        onChangeText={setMessage}
        multiline={true}
        numberOfLines={4}
      />

      <Button title="Enviar" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  textarea: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    textAlignVertical: 'top', // Para alinhar o texto no topo da textarea
  },
  button:{
    backgroundColor: "#00FEFD"
  }
});
