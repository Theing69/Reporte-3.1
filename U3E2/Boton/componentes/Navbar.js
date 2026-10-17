import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Navbar({ titulo, onMenuPress }) {
  return (
    <View style={styles.navBar}>
      <Text style={styles.titulo}>{titulo}</Text>
      
      <TouchableOpacity style={styles.menuButton} onPress={onMenuPress}>
        <Text style={styles.menuIcono}>☰</Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    height: 90, 
    paddingTop: 40, 
    backgroundColor: '#6200EE',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center', 
    position: 'relative',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  titulo: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    right: 15, 
    bottom: 15,
    padding: 5,
  },
  menuIcono: {
    color: '#FFF',
    fontSize: 28,
  }
});