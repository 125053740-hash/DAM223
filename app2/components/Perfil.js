import { useState } from 'react';
import {Text, View, Button} from 'react-native';

export const Perfil = ({nombre,carrera,materia,cuatri}) => {
  const[mostrar,setMostrar]=useState(false);
  return (
    <>

      <Text> {nombre} </Text>
      { mostrar &&
      <>
      <Text> {carrera} </Text>
      <Text> {materia} </Text>
      <Text> {cuatri}</Text>
      </>
     }
     <Button title='Ver perfil' onPress={()=>setMostrar(!mostrar)}></Button>
    </>
  );
}

 