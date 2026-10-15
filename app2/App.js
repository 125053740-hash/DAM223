
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native</Text>
      <Image source={require('./assets/favicon.png')} />
      <Saludo />
      <Saludo2 />
      <Perfil 
      nombre= "Miguel Angel Zamora Bocanegra" 
      carrera= "TIID"
      materia="Movil"
      cuatri="4to"> 
        </Perfil>
        
        <Perfil 
      nombre= "Ashly Angeles " 
      carrera= "Mecatronica"
      materia="Movil"
      cuatri="4to"> 
        </Perfil>

      <Perfil 
      nombre= "Paloma Valeria" 
      carrera= "TIID"
      materia="Movil"
      cuatri="4to"> 
        </Perfil>
        
        
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
}
);