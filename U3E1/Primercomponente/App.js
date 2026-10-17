import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import Micomponente from './componentes/Micomponente';
import Componentesuma from './componentes/Componentesuma';


export default function App() {
  const [nombre,setnombre]=useState('');
  const [numero1,setnumero1]=useState('');
  const [numero2,setnumero2]=useState('');
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder='Ingresa tu nombre'
      value={nombre}
      onChangeText={setnombre}/>
      {nombre?<Micomponente nombre={nombre}/>:null}
      <Text style={styles.title}>Componente suma</Text>
      <TextInput
       style={styles.input}
       placeholder='Ingresa numero 1'
       value={numero1}
       onChangeText={text=>setnumero1(Number(text))}
       />
      <TextInput
      style={styles.input}
      placeholder='Ingresa el numero 2'
      value={numero2}
      onChangeText={texto=>setnumero2(Number(texto))}
      />
     {numero1 && numero2 ?<Componentesuma numero1={parseFloat(numero1)}numero2={parseFloat(numero2)}/>:null} 
      <Button
      title='Limpiar inputs'
      onPress={()=>{setnombre('');setnumero1('');setnumero2('');}}/>
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
  input: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom: 20,
  width: '100%',
  paddingHorizontal: 10,
},
title: {
  fontSize: 24,
  marginBottom: 20,
  fontWeight: 'bold',
  color: '#333',
},
});
