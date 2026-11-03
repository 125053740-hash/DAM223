import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch, Alert, Platform, ScrollView } from 'react-native';


const mostrarAlerta = (titulo, mensaje) => {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje); 
  }
};

export default function App () {
  
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  
  const enviarRegistro = () => {
    
    if (nombre.trim() === '' || carrera.trim() === '' || semestre.trim() === '') {
      mostrarAlerta('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    
    if (!/^\d+$/.test(semestre.trim())) {
      mostrarAlerta('Error', 'El semestre debe ser un número.');
      return;
    }

    
    const tallerTexto = taller ? 'Sí' : 'No';
    const constanciaTexto = constancia ? 'Sí' : 'No';
    const deportesTexto = deportes ? 'Sí' : 'No';

  
    mostrarAlerta(
      'Registro enviado',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${tallerTexto}\nConstancia: ${constanciaTexto}\nDeportes: ${deportesTexto}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>

      {}
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
        keyboardType="numeric"
      />

      <Text style={styles.subtitulo}>Opciones</Text>

      {}
      <View style={styles.opcionRow}>
        <Text style={styles.label}>¿Asistirá al taller?</Text>
        <Switch
          value={taller}
          onValueChange={(valor) => setTaller(valor)}
        />
      </View>

      {}
      <View style={styles.opcionRow}>
        <Text style={styles.label}>¿Requiere constancia?</Text>
        <Switch
          value={constancia}
          onValueChange={(valor) => setConstancia(valor)}
        />
      </View>

      {}
      <View style={styles.opcionRow}>
        <Text style={styles.label}>¿Participará en deportes?</Text>
        <Switch
          value={deportes}
          onValueChange={(valor) => setDeportes(valor)}
        />
      </View>

      {}
      <View style={styles.botonContainer}>
        <Button
          title="Enviar Registro"
          onPress={enviarRegistro}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  opcionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
  },
  botonContainer: {
    marginTop: 20,
  }, 
});