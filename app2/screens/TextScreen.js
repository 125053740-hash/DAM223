
import { useState } from 'react';
import {Text,TextInput,Button,Alert,Platform, View, StyleSheet } from 'react-native';  

const mostrarAlerta= (titulo,mensaje) => {
  if(Platform.OS === 'web'){
    window.alert(`${titulo} \n\n ${mensaje}`);
  } 

  else{
    Alert.alert(titulo,mensaje);
  }
}

export default function TextInputScreen() {
  const[nombre,setNombre]=useState('');
  const[correo,setCorreo]= useState('');
  const[telefono,setTelefono]= useState('');

  const registrar = () => {
    const faltantes = [];
    if(nombre.trim ===''){
      faltantes.push('nombre')
    }
    if(correo.trim ===''){
      faltantes.push('correo')
    }
    if(telefono.trim ===''){
      faltantes.push('telefono')
    }
    if(faltantes.length > 0) {
      mostrarAlerta('Correo no valido','El correo debe tener el formato correcto')
      

    }
    if(!correo.includes('@')){
            mostrarAlerta('Faltan datos','Completa' +faltantes.join(','))
            if(telefono.length!== 10){
              mostrarAlerta('telefono invalido','Debe tener 10 digitos')
              return;
            }
      mostrarAlerta('Datos registrados correctamente','Nombre:${nombre} \n  Correo:$(correo) \n Telefono:$(telefono)');
            setNombre('');
            setCorreo('');
            setTelefono('');

    }
  }
  return (
    <View style={styles.container}>  
    <Text>Aqui va la practica 12 </Text>
      <Text>Equipo de Tadeo</Text>
      <Text style={styles.titulo}>Registro de datos</Text>
      <TextInput
      style = {styles.input}
      placeholder='Nombre'
      value = {nombre}
      onChangeText={setNombre}
      />
      
      <TextInput
      style = {styles.input}
      placeholder='Correo'
      value = {correo}
      onChangeText={setCorreo}
      keyboardType='email-address'
      autoCapitalize='none'
      />
      
      <TextInput
      style = {styles.input}
      placeholder='telefono'
      value = {telefono}
      onChangeText={setTelefono}
      keyboardType='numeric'
      maxLength={10}
      />
      
      <Button title='Registrar'
      onPress={registrar}/>
        
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    maxWidth:400,
    width:'100%',
    alignSelf:'center',
     
  },
   titulo: {
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20,
  },
  
  input: {
    borderWidth:1,
    borderColor:'#999',
    borderRadius:8,
    padding:10,
    marginBottom:12,
  },
 
}

);