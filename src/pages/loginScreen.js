import * as React from 'react';
import { Animated,Easing,StatusBar,StyleSheet,Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { Container, View,Text, Row,Item } from 'native-base';
import { RaisedButton } from 'react-native-material-buttons';
import RBSheet from "react-native-raw-bottom-sheet";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Sae,Kohana } from 'react-native-textinput-effects';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default class LoginScreen extends React.Component{
    render(){
        return(
          <Container style={{}}>
              <View style={styles.loginheader}>
                  <Text style={styles.loginText}>
                    LOGIN
                  </Text>
              </View>
            

              <View style={{flexDirection:'column',height:150,marginHorizontal:30,marginTop:40}}>
              <Kohana
    style={{marginHorizontal:20,backgroundColor:'',borderRadius:20,borderWidth:3,borderColor:'#4a7556',}}
    label={'Username'}
    iconClass={FontAwesomeIcon}
    iconName={'dog'}
    iconColor={'#41ba69'}
    inputPadding={12}
    labelStyle={{ color: '#108f3a', }}
    inputStyle={{ color: '#a7b5ab' }}
    labelContainerStyle={{ padding: 10,marginTop:0 }}
    iconContainerStyle={{ padding: 10 }} />  

    <Kohana
     style={{marginHorizontal:20,backgroundColor:'',borderRadius:20,borderWidth:3,borderColor:'#4a7556',marginTop:20}}
    label={'Password'}
    iconClass={FontAwesomeIcon}
    iconName={'paw'}
    iconColor={'#41ba69'}
    secureTextEntry
    inputPadding={12}
    labelStyle={{ color: '#108f3a' }}
    inputStyle={{ color: '#a7b5ab' }}
    labelContainerStyle={{ padding: 10 }}
    iconContainerStyle={{ padding: 10 }} />                  
              </View>
              <RaisedButton style={styles.loginButton}>
                  <Text style={{color:'white',}}>
                      Login
                  </Text>
              </RaisedButton>

              <View style={{marginTop:15,flexDirection:'row'}}>
                  <View
                  style={{borderBottomWidth:2,borderBottomColor:'grey',width:170}}>
                  </View>
                  <View
                  style={{borderBottomWidth:2,borderBottomColor:'grey',width:170,marginLeft:70}}>
                  </View>
              </View>
              <Text style={{alignSelf:'center',fontSize:20,marginTop:10,color:'green'}}>
                  LOGIN IN WITH 
              </Text>

              <View style={{marginTop:40,flexDirection:'row',marginHorizontal:40}}>
                  <RaisedButton style={{height:50,borderRadius:20,marginLeft:10,backgroundColor:'green'}}>
                      <FontAwesomeIcon
                      name={'google'}
                      size={30}
                      style={{alignSelf:'center',color:'white',}}>

                      </FontAwesomeIcon>

                  </RaisedButton>

                  <RaisedButton style={{height:50,borderRadius:20,marginLeft:30,backgroundColor:'green'}}>
                      <FontAwesomeIcon
                      name={'facebook'}
                      size={30}
                      style={{alignSelf:'center',color:'white',}}>

                      </FontAwesomeIcon>

                  </RaisedButton>
                  <RaisedButton style={{height:50,borderRadius:20,marginHorizontal:30,backgroundColor:'green'}}>
                      <FontAwesomeIcon
                      name={'instagram'}
                      size={30}
                      style={{alignSelf:'center',color:'white',}}>

                      </FontAwesomeIcon>

                  </RaisedButton>

              </View>
              
      
          </Container>
        )
    }
}
const styles=StyleSheet.create({
    loginheader:{
        textAlign:"center",
        alignSelf:"center",
        
    },
    loginText:{
        fontSize:30,
        color:'green',
        fontWeight:'300'
    },
    loginButton:{
        height:50,
        alignItems:'center',
        backgroundColor:'green',
        borderRadius:10,
        width:120,
        marginHorizontal:150,
        marginTop:20,
        elevation:12
    }
})