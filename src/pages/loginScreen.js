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
import AnimateLoadingButton from 'react-native-animate-loading-button';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={email:'',password:''}
        this.state={borderColor:'#4a7556'}
        this.shakeAnimation = new Animated.Value(0);

    }

    startShake = () => {
        Animated.sequence([
          Animated.timing(this.shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
          Animated.timing(this.shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
          Animated.timing(this.shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
          Animated.timing(this.shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
        ]).start();
     }

    handleLogin=()=>{
        this.loadingButton.showLoading(true)
        const {email,password}=this.state
        try {
            if (email=="Test@gmail.com" && password=="Test123"){
               this.setState({
                borderColor:'#4a7556'
               })
                alert('sucess')
                this.loadingButton.showLoading(false)     
            }
            else{
                this.loadingButton.showLoading(false)
                this.setState({
                    borderColor:'red'
                })
            }
        } catch (error) {
            setTimeout(()=>{
                this.loadingButton.showLoading(false) 
            },100)  
            
        }
     
        
    }
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
    style={{marginHorizontal:20,backgroundColor:'',borderRadius:20,borderWidth:3,borderColor:this.state.borderColor,}}
    label={'Username'}
    iconClass={FontAwesomeIcon}
    iconName={'dog'}
    iconColor={'#41ba69'}
    value={this.state.email}
    onChangeText={(email)=>{
        this.setState({email})
    }}
    inputPadding={12}
    labelStyle={{ color: '#108f3a', }}
    inputStyle={{ color: '#a7b5ab' }}
    labelContainerStyle={{ padding: 10,marginTop:0 }}
    iconContainerStyle={{ padding: 10 }} />  

    <Kohana
     style={{marginHorizontal:20,backgroundColor:'',borderRadius:20,borderWidth:3,borderColor:this.state.borderColor,marginTop:20}}
    label={'Password'}
    iconClass={FontAwesomeIcon}
    iconName={'paw'}
    iconColor={'#41ba69'}
    value={this.state.password}
    onChangeText={(password)=>{
        this.setState({
            password
        })
    }}
    secureTextEntry
    inputPadding={12}
    labelStyle={{ color: '#108f3a' }}
    inputStyle={{ color: '#a7b5ab' }}
    labelContainerStyle={{ padding: 10 }}
    iconContainerStyle={{ padding: 10 }} />                  
              </View>
              {/* <RaisedButton style={styles.loginButton}>
                  <Text style={{color:'white',}}>
                      Login
                  </Text>
              </RaisedButton> */}
              <View style={{marginHorizontal:150,marginTop:20,elevation:20}}>
              <AnimateLoadingButton
          ref={c => (this.loadingButton = c)}
          width={120}
          height={50}
          title="LOGIN"
          titleFontSize={16}
          titleColor="rgb(255,255,255)"
          backgroundColor='green'
          borderRadius={10}
          onPress={this.handleLogin.bind(this)}
        />
        </View>

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