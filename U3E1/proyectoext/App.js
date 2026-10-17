import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Titulo from './componente1/Titulo';
import Tarjeta from './componente2/Tarjeta';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo titulo="Mi Garaje" />
      <View style={styles.contenido}>
        <Tarjeta
          marca="Oldsmobile" 
          modelo="Bravada 1996" 
          tipo="Camioneta" 
        />
        <Tarjeta
          marca="Italika" 
          modelo="DM250X" 
          tipo="Motocicleta Doble Propósito" 
        />
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
  },
  contenido: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  }
});
