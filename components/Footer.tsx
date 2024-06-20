import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Header from "./Header";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title="Tudo por hoje :)" />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1
  },
  
  container:{
    backgroundColor: "#F3F3F3"
  },
});