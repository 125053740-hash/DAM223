
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>    
      
      <Perfil 
      nombre= "Miguel Angel Zamora Bocanegra" 
      carrera= "TIID"
      materia="Movil"
      cuatri="4to"
      style={styles.tarjeta1}> 
        </Perfil>
        
        <Perfil 
      nombre= "Ashly Angeles " 
      carrera= "Mecatronica"
      materia="Movil"
      cuatri="4to"
      style={styles.tarjeta2}> 
        </Perfil>
 
      <Perfil 
      nombre= "Paloma Valeria" 
      carrera= "TIID"
      materia="Movil"
      cuatri="4to"
      style={styles.tarjeta3}> 
        </Perfil>
        
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tarjeta1:{backgroundColor: 'pink'},
  tarjeta2:{backgroundColor: 'orange'},
  tarjeta3:{backgroundColor: 'green'},
}

);