
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';  

export default function SafeScreen() {
  return (
    <View style={styles.container}>  
    <text>Aqui va la practica 10</text>
      <text>Equipo de Dulce</text>  
      
      
      
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
 
}

);