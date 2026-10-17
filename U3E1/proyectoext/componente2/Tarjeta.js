import { StyleSheet, Text, View } from 'react-native';

export default function Tarjeta({ marca, modelo, tipo }) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.marca}>{marca}</Text>
      <Text style={styles.texto}>Modelo: {modelo}</Text>
      <Text style={styles.texto}>Tipo: {tipo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    marginVertical: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    
  },
  marca: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  texto: {
    fontSize: 16,
    color: '#555',
  }
});