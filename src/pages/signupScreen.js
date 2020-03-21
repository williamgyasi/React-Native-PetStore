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

export default class SignUpScreen extends React.Component{
    showLoginBottom=()=>{

    }
    render(){
        return(
         <Container>
              <View style={styles.loginheader}>
                  <Text style={styles.loginText}>
                    Getting Started
                  </Text>
              </View>

              <View style={{flexDirection:'column',marginHorizontal:40}}>
              <Sae
    style={{}}
    label={'Name'}
    iconClass={FontAwesomeIcon}
    iconName={'user'}
    iconColor={'#41ba69'}
    inputPadding={16}
    labelStyle={{ color: '#108f3a', }}
    inputStyle={{ color: '#a7b5ab' }}
    labelContainerStyle={{ padding: 10,marginTop:0 }}
    iconContainerStyle={{ padding: 10 }} />  
    <Sae
    style={{}}
    label={'Number'}
    iconClass={FontAwesomeIcon}
    iconName={'phone'}
    iconColor={'#41ba69'}
    inputPadding={16}
    labelStyle={{ color: '#108f3a', }}
    inputStyle={{ color: '#a7b5ab' }}
    labelContainerStyle={{ padding: 10,marginTop:0 }}
    iconContainerStyle={{ padding: 10 }} />  
    <Sae
    style={{}}
    label={'Email'}
    iconClass={FontAwesomeIcon}
    iconName={'envelope'}
    iconColor={'#41ba69'}
    inputPadding={16}
    labelStyle={{ color: '#108f3a', }}
    inputStyle={{ color: '#a7b5ab' }}
    labelContainerStyle={{ padding: 10,marginTop:0 }}
    iconContainerStyle={{ padding: 10 }} />  
    <Sae
    style={{}}
    label={'Password'}
    iconClass={FontAwesomeIcon}
    iconName={'lock'}
    iconColor={'#41ba69'}
    inputPadding={16}
    labelStyle={{ color: '#108f3a', }}
    inputStyle={{ color: '#a7b5ab' }}
    labelContainerStyle={{ padding: 10,marginTop:0 }}
    iconContainerStyle={{ padding: 10 }} />  
    <Sae
    style={{}}
    label={'Confirm Password'}
    iconClass={FontAwesomeIcon}
    iconName={'key'}
    iconColor={'#41ba69'}
    inputPadding={16}
    labelStyle={{ color: '#108f3a', }}
    inputStyle={{ color: '#a7b5ab' }}
    labelContainerStyle={{ padding: 10,marginTop:0 }}
    iconContainerStyle={{ padding: 10 }} />  
              </View>
              <RaisedButton style={styles.loginButton}>
              <FontAwesomeIcon
                      name={'arrow-right'}
                      size={50}
                      style={{alignSelf:'center',color:'white',}}>

                      </FontAwesomeIcon>
              </RaisedButton>

              <View style={{flexDirection:'row',marginTop:30,marginHorizontal:80}}>
                  <Text style={{fontSize:20}}>
                      Already have an account?  
                  </Text>
                          <Text style={{color:'#9e425e',marginLeft:3,fontSize:20}}
                             onPress={this.showLoginBottom.bind(this)}>
                              LOGIN
                          </Text>
                     
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
        color:'black',
        fontWeight:'300'
    },
    loginButton:{
        height:70,
        alignItems:'center',
        backgroundColor:'green',
        borderRadius:50,
        width:120,
        left:250,
        marginTop:40,
        elevation:12
    }
})