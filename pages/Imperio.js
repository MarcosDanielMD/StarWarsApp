import {Button ,View, Text, StyleSheet} from 'react-native';

export default function Imperio(props){
return(
  <View style={styles.container}> 

    <Text style={styles.titulo}> Minhas lindas fotos</Text>

      <Button
      title="Planetas"
      style={styles.botao}
      onPress={() => props.navigation.navigate('Planetas')}
      />

     <Button
      title="Naves"
      style={styles.botao}
      onPress={() => props.navigation.navigate('Naves')}
      />
      
  </View>
);
}

const styles = StyleSheet.create({
  container:{
  flex:1,
  alignItems: 'center'
  },
  titulo:{
    fontSize:25,
    color:'#7B68EE',
    textAlign:'center',
    margin: 20
  },
  botao:{
    padding:20
  }
})