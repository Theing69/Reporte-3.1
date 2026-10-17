import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View,FlatList } from 'react-native';
import { useState,memo } from 'react';


const Formulario=({producto,setproducto,agregarproducto})=>{
    console.log("Renderizando formulario...");
  
  return (
    <View style={styles.formulario}>
      <Text style={styles.titulo}>Registrar producto</Text>
      <TextInput
      style={styles.input}
      placeholder='Nombre del producto'
      value={producto}
      onChangeText={setproducto}/>
      <Button title='Agregar' onPress={agregarproducto}/>
    </View>
  );
};
const ListaProductos=memo(({productos})=>{
  console.log("Renderizando lista de productos");
  return (
    <View style={styles.lista}>
      <Text style={styles.titulo}>Lista de productos</Text>
      <FlatList
      data={productos}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item})=><Text style={styles.item}>{item}</Text>}/>
    </View>
  )
})
 const Conteo=({productos})=>{
  const producto=productos.length;
  return (
    <View>
      <Text>Total:{producto}</Text>
    </View>
    )
 }
export default function App(){
  const [producto,setproducto]=useState('');
  const [productos,setproductos]=useState([]);

  const agregarproducto=()=>{
    if(producto.trim()==='') return;
    setproductos([...productos,producto]);
    setproducto('');
  }
  console.log("Renderizando app...");
  return(
    <View style={styles.container}>
      <Formulario producto={producto} setproducto={setproducto} agregarproducto={agregarproducto}/>
      <Conteo productos={productos}/>
    <ListaProductos productos={productos}/>
    <StatusBar style="auto"/>
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  formulario: { flex: 1, marginBottom: 10 },
  lista: { flex: 2, borderTopWidth: 1, borderColor: '#ccc', paddingTop: 10 },
  titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 5, borderRadius: 5 },
  item: { fontSize: 16, marginVertical: 3 }
});
