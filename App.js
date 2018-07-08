import React from 'react';
import { StyleSheet, Text, View ,AsyncStorage,Button} from 'react-native';
import Body from './Body';
import Header from './Header';


export default class App extends React.Component {
  constructor(){
    super();
    this.state={tareas:[],
      texto:"",
      cargando:true
    }
  }

  

  componentDidMount(){
    this.recuperarEnTelefono();
  }

  establecerTexto=(value)=>{
    // console.log(value);
    this.setState({texto:value});
  }

  agregarTarea=()=>{
    const nuevasTareas=[...this.state.tareas,{texto:this.state.texto,key:Date.now()}];
    this.guardarEnTelefono(nuevasTareas);
    this.setState({
      tareas:nuevasTareas,
      texto:''
    });
    console.log(this.state.tareas.length);

    }

    eliminarTarea=(id)=>{
      const nuevasTareas=this.state.tareas.filter((tarea)=>tarea.key !== id);
      this.guardarEnTelefono(nuevasTareas);
      this.setState({
        tareas:nuevasTareas,
      });
    }

    guardarEnTelefono=(tareas)=>{
      AsyncStorage.setItem('@AppCursoUdemy:tareas',JSON.stringify(tareas))
      .then((valor)=>{
        console.log(valor);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    
    recuperarEnTelefono=()=>{
      AsyncStorage.getItem('@AppCursoUdemy:tareas')
      .then((valor)=>{
        console.log(valor);
        console.log(JSON.parse(valor));
        setTimeout(()=>{
          this.setState({
            cargando:false,
          })
        },5000)
        
        if(valor !==null){
            const nuevasTareas=JSON.parse(valor);
            this.setState({
            tareas:nuevasTareas,
        });
        }
        
      })
      .catch((error)=>{
        console.log(error);
        this.setState({
          cargando:false,
        })
      })
    }
  
  render() {
    return (
      <View style={styles.container}>
        <Header 
        texto={this.state.texto}
        cambiarTexto={this.establecerTexto} 
        agregar={this.agregarTarea}/>
        {/* <Text>{this.state.texto}</Text> */}
        {/* <Button title='guardar'
        onPress={()=>{this.guardarEnTelefono();}}
        />
        <Button title='recuperar'
        onPress={()=>{this.recuperarEnTelefono();}}
        /> */}
        <Body tareas={this.state.tareas} eliminar={this.eliminarTarea} cargando={this.state.cargando}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
