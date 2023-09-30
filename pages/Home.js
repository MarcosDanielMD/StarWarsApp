import { Text, View, StyleSheet, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.wallpaper}
        source={require('./assets/star-wars-4096.png')}
      />
      <Text style={styles.texto}>
        Star Wars é uma série de filmes criada pelo cineasta George Lucas.
        Lançada em 1977, a franquia tornou-se um ícone da cultura pop,
        conquistando milhões de fãs ao redor do mundo. Inspirado em clássicos
        como Flash Gordon, Star Wars buscou influências que vão desde as
        produções de Akira Kurosawa aos filmes Western.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wallpaper: {
    width: 400,
    height: 200,
  },
  texto:{
    fontSize: 18,
    margin:20
  }
});
