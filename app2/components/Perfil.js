import { useState } from 'react';
import {Text, View, Button,StyleSheet} from 'react-native';

export const Perfil = ({nombre,carrera,materia,cuatri,style}) => {
  const[mostrar,setMostrar]=useState(false);
  return (
    <View style={[styles.tarjeta,style]}>


      <Text style={styles.nombres}> {nombre} </Text>
      { mostrar &&
      <>
      <Text style={styles.carrera}> {carrera} </Text>
      <Text style={styles.otroTexto}> {materia} </Text>
      <Text style={styles.otroTexto}> {cuatri}</Text>
      </>
     }
     <Button title='Ver perfil' onPress={()=>setMostrar(!mostrar)}></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  nombres:{
    fontSize: 24,
    fontWeight: 800,
    textTransform: 'uppercase',
  },
  carrera:{
  fontSize: 20,
  fontFamily: 'Roboto',
  color: 'blue',
},
 otroTexto:{
  fontSize: 18,
  fontFamily: 'Courier',
  color: 'red',
},
tarjeta:{
  borderWidth: 4,
  borderRadius: 12,
  padding: 15,
  margin: 10,
 
}
 

});

