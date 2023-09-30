import React, { useState, useEffect } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

import estilo from './components/estiloRebeldes';


const request = async (callback) => {
  const response = await fetch('https://swapi.dev/api/starships/');
  const parsed = await response.json();
  callback(parsed.results);
};

export default function FotosFamilia(props) {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    request(setRegistros);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.titulo}>Naves</Text>
      </View>

      <FlatList
      data={registros}
      keyExtractor={(item) => item.name.toString()} 
      renderItem={({item}) =>
        <Text style={estilo.item}>
        <Text> Nome: {item.name}{'\n'}</Text> 
        <Text> Modelo: {item.model}{'\n'}</Text> 
        <Text> Custo em créditos: {item.cost_in_credits}{'\n'}</Text> 
        <Text> Passageiros: {item.passengers}{'\n'}</Text>
      </Text>
      }/>
  
   <Button
          title="Voltar"
          onPress={() => props.navigation.navigate('Imperio')}
        />
   
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    color: '#ff00ab',
  },
});
