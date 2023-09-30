import { StyleSheet } from 'react-native';

const estiloRebeldes = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#836FFF', // Cor de ouro
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444', // Cinza escuro
    color: '#4F4F4F	', // Texto branco
    fontWeight:'bold'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF', // Texto branco
  },
  details: {
    fontSize: 16,
    color: '#FFF', // Texto branco
  },
});

export default estiloRebeldes;