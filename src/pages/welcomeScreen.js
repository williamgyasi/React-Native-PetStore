import * as React from 'react';
import { Animated,Easing,StatusBar,StyleSheet,Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { Container, View,Text, Row } from 'native-base';
import { RaisedButton } from 'react-native-material-buttons';
import RBSheet from "react-native-raw-bottom-sheet";
import LoginScreen from './loginScreen';
import SignUpScreen from './signupScreen';
import SwiperFlatList from 'react-native-swiper-flatlist';

export default class WelcomeScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          progress: new Animated.Value(0),
        };
      }

      LoginBottom=()=>{
        this.RBSheet.open()
      }
      SignUpBottom=()=>{
        this.signupSheet.open()
      }

    componentDidMount(){
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
          }).start();
    }
  render(){
    return(
        <Container style={{backgroundColor:'white'}}>
          <StatusBar
      backgroundColor='#8cdb65'
      barStyle='#8cdb65'>
      </StatusBar>
      <View style={{marginTop:90,marginHorizontal:80, flexDirection:'row',}}>
          <Text style={styles.masthead}>
            CODEX 
          </Text>
          <Text style={styles.petStore}>
          PET STORE
          </Text>
      </View>
      <View>
          <Text style={{color:'#a4a7ab',textAlign:'center',marginLeft:10}}>
              Shop for your beautiful pets 
          </Text>
      </View>
      <View style={styles.swipercontainer}>
        <SwiperFlatList
          autoplay
          autoplayDelay={7}
          autoplayLoop
          index={0}
         
        >
           <View style={[styles.child]}>
             <Text style={{fontSize:40,color:'green',height:50,marginTop:60,fontWeight:'300'}}>
               BUY PETS
             </Text>
           <LottieView source={require('../animations/animation.json')} autoPlay loop/>
          </View>
          <View style={[styles.child]}>
             <Text style={{fontSize:20,color:'black',height:50,marginTop:60,fontWeight:'300'}}>
               ANY KIND YOU NEED 
             </Text>
           <LottieView source={require('../animations/animation2.json')} autoPlay loop/>
          </View>
          <View style={[styles.child]}>
             <Text style={{fontSize:30,color:'grey',height:50,marginTop:60,fontWeight:'300'}}>
               DELIVERY
             </Text>
           <LottieView source={require('../animations/animation3.json')} autoPlay loop/>
          </View>
        </SwiperFlatList>
      </View>

    <View style={styles.buttonView}>
      <RaisedButton 
      style={styles.loginStyle}
      onPress={this.LoginBottom.bind(this)}
      >
        <Text style={{justifyContent:'center',alignSelf:'center',textAlign:'center',color:'white',fontSize:20}}>
          Login
        </Text>

      </RaisedButton>
      <RaisedButton 
      style={styles.signupStyle}
      onPress={this.SignUpBottom.bind(this)}>
      <Text style={{justifyContent:'center',alignSelf:'center',textAlign:'center',color:'white',fontSize:20}}>
          SignUp
        </Text>
      </RaisedButton>
    </View>

    {/* LOGIN SHEET */}

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={500}
          duration={250}
          animationType={'fade'}
          closeOnDragDown={true}
          
          customStyles={{
            container: {
            }
          }}
        >
          <LoginScreen />
        </RBSheet>
      </View>

      {/* SIGNUP SHEET */}

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <RBSheet
          ref={ref => {
            this.signupSheet = ref;
          }}
          height={600}
          duration={250}
          animationType={'slide'}
          closeOnDragDown={true}

          customStyles={{
            container: {
            

            }
          }}
        >
          <SignUpScreen/>
        </RBSheet>
      </View>




        </Container>
        // <LottieView 
        // source={require('../animations/animation.json')} 
        // progress={this.state.progress} 
        // autoPlay/>
    )
  }

  
} 
export const { width, height } = Dimensions.get('window');
const styles =StyleSheet.create({
    masthead:{
        fontSize:50,
        color:'#bfeda8',

    },
    petStore:{
        fontSize:20,
        color:'black',
        marginLeft:7,
        lineHeight:70,
    },
    buttonView:{
      flexDirection:'row',
      height:80,
      alignItems:"center",
      marginHorizontal:40,
      
    },
    loginStyle:{
      backgroundColor:'#54bf6d',
      flexDirection:'row',
      borderRadius:10,
      height:50,
      width:150,
      marginLeft:10,
      elevation:10


    },
    signupStyle:{
      backgroundColor:'#54bf6d',
      borderRadius:10,
      height:50,
      width:150,
      marginLeft:30,
      elevation:10
    },
    swipercontainer: {
      width:width,
      marginTop:30,
      height:450,
      backgroundColor:'white',
    },
    child: {
      height: height * 0.6,
      width,
      justifyContent: 'center',
      flexDirection:'row',
      flex:0,

    },
    text: {
      fontSize: width * 0.5,
      textAlign: 'center'
    }
      
})