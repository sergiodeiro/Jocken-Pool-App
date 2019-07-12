import React, {Component} from 'react';
import {View,Text,Button,Image} from 'react-native';
import styles from './styles'
import Topo from './src/components/topo'
import Icone from './src/components/icone'

//JOGO DE JOCKEN POOL
export default class App extends Component{

  constructor(props){
    super(props);

    this.state = {
     escolhaUsuario: ''
    ,escolhaComputador: '',
    resultado: ''}
  }

  jokenpo(escolhaUsuario){
    
    //NUMERO ENTRE 0 e 3
    let numeroAleatorio = Math.floor(Math.random() * 3);
    
    //Atribuindo a Escolha do Computador em formato de Numero para String com o case
    let escolhaComputador = '';

    switch(numeroAleatorio){
      case 0: escolhaComputador = 'Pedra';
      break;

      case 1: escolhaComputador = 'Papel';
      break;

      case 2: escolhaComputador = 'Tesoura';
      break;
    }

    var resultado = ' ';

    if(escolhaComputador == 'Pedra'){
      if(escolhaUsuario == 'Pedra'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'Papel'){
         resultado = 'Usuário Ganhou';
      }

      if(escolhaUsuario == 'Tesoura'){
        resultado = 'Computador Ganhou';
      }
    }

    if(escolhaComputador == 'Papel'){
      if(escolhaUsuario == 'Papel'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'Tesoura'){
         resultado = 'Usuário Ganhou';
      }

      if(escolhaUsuario == 'Pedra'){
        resultado = 'Computador Ganhou';
      }
    }

    if(escolhaComputador == 'Tesoura'){
      if(escolhaUsuario == 'Tesoura'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'Pedra'){
         resultado = 'Usuário Ganhou';
      }

      if(escolhaUsuario == 'Papel'){
        resultado = 'Computador Ganhou';
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: resultado
    });
  }


  render() {
    return (
      <View styles={styles.container}>
        
          <Topo></Topo>

          <View style={styles.painelAcoes}>

            <View style={styles.btnEscolha}>
              <Button style={styles.btnCol} title="Pedra" onPress={()=>{this.jokenpo('Pedra')}}/>
            </View>

            <View style={styles.btnEscolha}>
              <Button style={styles.btnCol}title="Papel" onPress={()=>{this.jokenpo('Papel')}}/>
            </View>

            <View style={styles.btnEscolha}>
              <Button style={styles.btnCol} title="Tesoura" onPress={()=>{this.jokenpo('Tesoura')}}/>
            </View>

          </View>

          <View style={styles.palco}>
            <Text style={styles.txtResult}>{this.state.resultado}</Text>

            <Icone escolha={this.state.escolhaComputador} jogador='Computador'/>
            
            <Icone escolha={this.state.escolhaUsuario} jogador='Usuário'/>
         </View>

      </View>
    );
  }
}


/* TROCAR FRASES DO BUTTON

class MeuComponente extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>{this.props.teste}</Text>
      </View>
    );
  }
}

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {texto : 'Texto Teste 2'};
    
  }

  alterText() {
    this.setState({texto:'Outra Coisa'})
  }

  render() {
    return (
      <View style={styles.container}>
        <MeuComponente teste={this.state.texto}></MeuComponente>
        <Button 
        title='Botão'
        onPress={() => {this.alterText()}}
        />
      </View>
    );
  }
}*/
