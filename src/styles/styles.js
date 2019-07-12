import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
     paddingTop:40
    },busText:{
        fontSize:16,
        fontWeight:'bold',
    },
    btnEscolha:{
      width:90,
      backgroundColor:'skyblue',
      color:'#FFF',
      borderRadius:30,
      marginTop:10,
      marginBottom:10,
      shadowColor:'#000',
      shadowOffset:{width:0, height:2},
      shadowOpacity: 0.4,

    },painelAcoes:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    btnCol:{
      color:'white',
      fontWeight:'bold',
    },
    palco:{
      alignItems:'center',
      marginTop:20
    },
    txtResult:{
      fontWeight:'bold',
      fontSize: 22,
      color:'steelblue',
      paddingBottom:20
    },icone:{
      alignItems:'center',
      paddingBottom:20
    }

  });