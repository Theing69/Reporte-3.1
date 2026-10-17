import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Custombutton from './componentes/Custombutton';
import Inforcard from './componentes/infocard';
import Navbar from './componentes/Navbar';
import Modales from './componentes/Modales';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [menu, setmenu] = useState(false);

  const handleShowMessage = () => {
    setMensaje(`¡Bienvenido, ${nombre}!`);
    setNombre(''); 
  };

  return (
    <View style={styles.menu}>
      <Navbar titulo="Inicio" onMenuPress={()=>setmenu(true)}/>
   
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <Custombutton
        title="Mostrar Mensaje"
        onPress={handleShowMessage}
      />
      {mensaje ? <Text style={styles.text}>{mensaje}</Text> : null}
      <Inforcard title="Titulo de la tarjeta" descripcion="Esta es una descripcion de ejemplo"/>
      <Inforcard title={nombre} descripcion={mensaje}/>
       </View>
       <Modales visible={menu} onClose={()=>setmenu(false)} titulo="Modal" mensaje="Prueba de Modal para el profe minero" />
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
  menu:{
    flex:1,
    backgroundColor:'#fff',
  }
});
