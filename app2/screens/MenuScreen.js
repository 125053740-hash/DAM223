
import { StyleSheet, View,Text,Button } from 'react-native';
import {useState} from 'react';   
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetasScreen from './TarjetasScreen';  



export default function MenuScreen() {
    const [screen,setScreen]= useState('menu');
    switch(screen){
        case 'safe':
            return <SafeScreen/>;
            case 'press':
            return <PressableScreen/>;
             case 'tajetas':
            return <TarjetasScreen/>;
            case 'Activity':
            return <ActivityScreen/>;
            case 'Flat':
            return <FlatScreen/>;
            case 'Image':
            return <ImageScreen/>;
            case 'modal':
            return <ModalScreen/>;
            case 'text':
            return <TextScreen/>;
             case 'menu':
             default:    

    
  return (
    <View style={styles.container}>   
      <Text>Menu de practicas</Text>
      <Button title="Practica Tarjetas" onPress={()=>setScreen('tarjetas')}></Button>
      <Button title="SafeAreaView" onPress={()=>setScreen('safe')}></Button>
      <Button title="Practica Prssable" onPress={()=>setScreen('press')}></Button>
      <Button title="Practica Activity" onPress={()=>setScreen('activity')}></Button>
      <Button title="Practica Image" onPress={()=>setScreen('image')}></Button>
      <Button title="Practica flat" onPress={()=>setScreen('flat')}></Button>
      <Button title="Practica Modal" onPress={()=>setScreen('modal')}></Button>
      <Button title="Practica text" onPress={()=>setScreen('text')}></Button>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
}

);