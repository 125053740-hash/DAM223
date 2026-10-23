
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function PressableScreen() {
  return (
    <View style={styles.container}>    
      <text>Aqui va la practica 11</text>
      <text>Equipo de Karen</text>
      
      
        
      
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