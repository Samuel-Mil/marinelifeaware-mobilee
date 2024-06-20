import { View, Text, Linking,TouchableOpacity, StyleSheet, Image } from 'react-native';
import Header from './Header';

export default function Artigos() {
  const handlePress = async () => {
    const url = "";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Artigos"/>

      <View style={styles.artigos}>
        <View style={styles.artigo_single}>
          <Image source={require("../assets/images/turtle.jpg")} style={styles.art_image}/>
          <Text style={styles.art_single_title}>Ciência para o desenvolvimento sustentável dos oceanos</Text>
          <Text style={styles.art_single_description}>A Organizações das Nações Unidas (ONU) estabeleceu, para os anos de 2021 a 2030, a Década da Ciência Oceânica para o Desenvolvimento Sustentável.</Text>
          <TouchableOpacity onPress={handlePress} style={styles.linkContainer}>
            <Text>Ler mais</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.artigo_single}>
          <Image source={require("../assets/images/turtle.jpg")} style={styles.art_image}/>
          <Text style={styles.art_single_title}>BIODIVERSIDADE MARINHA: UMA HERANÇA AMEAÇADA?</Text>
          <Text style={styles.art_single_description}>Os oceanos recobrem 70% da superfície do planeta Terra, um território duas vezes mais extenso que a superfície da Lua e de Marte juntas.</Text>
          <TouchableOpacity onPress={handlePress} style={styles.linkContainer}>
            <Text>Ler mais</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.artigo_single}>
          <Image source={require("../assets/images/turtle.jpg")} style={styles.art_image}/>
          <Text style={styles.art_single_title}>ÁREAS DE PROTEÇÃO MARINHA E A PRESERVAÇÃO DO MAR</Text>
          <Text style={styles.art_single_description}>A preservação dos mares e oceanos tem se mostrado um tema bastante em alta e de extrema importância para toda a humanidade. Quando se cria um santuário, parque, monumento ou qualquer outra área de reserva marinha.</Text>
          <TouchableOpacity onPress={handlePress} style={styles.linkContainer}>
            <Text>Ler mais</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 800
  },

  artigos:{
    padding: 10
  },

  artigo_single: {
    marginBottom: 20
  },

  art_single_title: {
    fontSize: 30,
    marginTop: 10
  },

  art_single_description: {
    fontSize: 20,
    marginBottom: 10
  },

  art_image:{
    width: "100%",
    height: 200
  },

  linkContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00FEFD",
    padding: 10
  }
});