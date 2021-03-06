import * as React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';
import Styles from './style';
import colors from '../../config/color';

const Separator = () => (
  <View style={Styles.separator} />
);

const Explore = ({navigation}) => {
  return (
    <ScrollView>
    <SafeAreaView style={{flex: 1}}> 
      <View style={{flex: 1, padding: 1}}>
        <View style={Styles.container}>

          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() =>
              navigation.navigate(
                'Myntra')
            }>     
            <Image style={{height:30, width:30,top:1,marginBottom:-20}}
            source={require('../../assets/icon1.jpg')}/>
            <Text style={styles.text}>Myntra Mall</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Insider')}>
              <Image style={{height:20, width:30,top:5,marginBottom:-20}}
            source={require('../../assets/icon2.png')}/>
            <Text style={{left:40,top:10}}>Myntra Insider</Text>
            <Text style={styles.text1}> ENROLL NOW</Text>
          </TouchableOpacity> 
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Card')}>
              <Image style={{height:30, width:30,top:5,marginBottom:-20}}
            source={require('../../assets/icon3.png')}/>
           <Text style={{left:50}}>Gift Cards</Text>
          </TouchableOpacity>
          <View style={{width:"100%",marginTop:10}}>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Earn')}>
             <Image style={{height:30, width:30,top:5,marginBottom:-20}}
            source={require('../../assets/icon4.png')}/>
            <Text style={{left:50}}>Play & Earn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Move')}>
               <Image style={{height:20, width:40,top:5,marginBottom:-15}}
            source={require('../../assets/icon5.png')}/>
            <Text style={{left:50}}>Myntra Move</Text>
          </TouchableOpacity>
          </View>
          <View style={{width:"100%",marginTop:10}} >
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Refer')}>
               <Image style={{height:20, width:30,top:5,marginBottom:-15}}
            source={require('../../assets/icon6.png')}/>
            <Text style={{left:50}}>Refer & Earn</Text>
          </TouchableOpacity>
      
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Coupons')}>
               <Image style={{height:20, width:30,top:1,marginBottom:-20}}
            source={require('../../assets/icon7.png')}/>
            <Text style={{left:50}}>Scan for Coupons</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Studio')}>
               <Image style={{height:20, width:30,top:1,marginBottom:-20}}
            source={require('../../assets/icon8.png')}/>
            <Text style={{left:50}}>Myntra Fashion Superstar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Studio')}>
               <Image style={{height:20, width:30,top:1,marginBottom:-20}}
            source={require('../../assets/icon9.jpg')}/>
            <Text style={{left:50}}>Myntra Masterclass</Text>
            </TouchableOpacity>
            </View>
        </View>
        <Separator>
        </Separator>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};
const styles=StyleSheet.create({
  text:{
    left:40,
    top:1,
  },
  text1:{
    left:210,
    top: -10,
    color:"red",
  }
})

export default Explore;

