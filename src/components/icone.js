import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import styles from './styles'

const imagemPedra = require('../../imgs/pedra.png')
const imagemPapel = require('../../imgs/pedra.png')
const imagemTesoura = require('../../imgs/pedra.png')

export default class Icone extends Component {
    render(){

       if(this.props.escolha == 'Pedra'){
  
       return(
         <View styles={styles.icone}>
           <Text style={styles.busText}>{this.props.jogador}</Text>
          <Image source={imagemPedra}/>
         </View>
       );
  
       }else if(this.props.escolha == 'Papel'){
  
        return(
          <View styles={styles.icone}>
            <Text style={styles.busText}>{this.props.jogador}</Text>
            <Image source={imagemPapel}/>
          </View>
        );
  
       }else if(this.props.escolha == 'Tesoura'){
  
        return(
          <View styles={styles.icone}>
            <Text style={styles.busText}>{this.props.jogador}</Text>
           <Image source={imagemTesoura}/>
          </View>
        );
  
       }else{
         return false;
       }
    }
  }