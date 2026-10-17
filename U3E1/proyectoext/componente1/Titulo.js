import { StyleSheet, Text, View } from 'react-native';
export default function Titulo({ titulo }) {
  return (
    <View style={styles.header}>
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#20232a',
    padding: 20,
    paddingTop: 50,
    width: '100%',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
});