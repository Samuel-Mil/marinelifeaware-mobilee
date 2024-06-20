import { View, Text, StyleSheet } from 'react-native';

interface IProps{
  title: string
}

export default function Header(props: IProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 25,
    color: "white"
  },
  header:{
    height: 60,
    backgroundColor: '#00121B',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
});