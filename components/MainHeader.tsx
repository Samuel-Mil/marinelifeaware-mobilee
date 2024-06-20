import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from "expo-router"


export default function MainHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Marinelifeaware</Text>
      <Link href="/login" style={styles.button}>
        <Pressable>
            <Text>Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 20,
    color: "white"
  },

  button: {
    color: '#FFF',
    fontSize: 15,
    backgroundColor: "#00FEFD",
    padding: 10,
    borderRadius: 10
  },

  header:{
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#00121B',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingLeft: 20,
    paddingRight: 20,
  }
});