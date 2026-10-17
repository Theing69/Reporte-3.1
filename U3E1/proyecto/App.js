import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

const Carro=({marca,modelo})=>{
  return(
       <View>
        <Text>El coche es :{marca} y modelo: {modelo}</Text>
       </View>
    )
  }
  const Limpiar=({presionar})=>{
    return(
      <View>
        <Button
      title='Limpiar'
      onPress={presionar}
      />
      </View>
    )
  }
export default function App() {
  const [marca,setmarca]=useState('')
  const [modelo,setmodelo]=useState('')
  const [mostrar,setmostrar]=useState(false)

  const limpiar= () => {
    setmarca('');
    setmodelo('');
    setmostrar(false);
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
      placeholder='Ingresa la marca'
      value={marca}
      onChangeText={setmarca}/>
      <TextInput style={styles.input}
      placeholder='Ingresa el modelo'
      value={modelo}
      onChangeText={setmodelo}/>
      <Button
      title='Mostrar mensaje'
      onPress={() => setmostrar(true)}/>
          {mostrar && <Carro marca={marca} modelo={modelo}/>}
          
      <Limpiar presionar={limpiar}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    padding:5,
    borderWidth:3,
    borderRadius:3,
    borderColor:'black'
  }
});
