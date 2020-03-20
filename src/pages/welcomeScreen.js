import * as React from 'react';
import { Animated,Easing,StatusBar,StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { Container, View,Text } from 'native-base';
export default class WelcomeScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          progress: new Animated.Value(0),
        };
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


        </Container>
        // <LottieView 
        // source={require('../animations/animation.json')} 
        // progress={this.state.progress} 
        // autoPlay/>
    )
  }

  
} 
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



    }
      
})