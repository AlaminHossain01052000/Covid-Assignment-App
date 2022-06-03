import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,ActivityIndicator ,Image,Pressable,ScrollView} from 'react-native';

import Text from './src/components/Text/Text';
import { colors } from './src/theme/colors';

export default function App() {
  const [loaded] = useFonts({
    'GraphikRegular': require('./assets/fonts/GraphikRegular.otf'),
    'GraphikMedium': require('./assets/fonts/GraphikMedium.otf'),
    'GraphikBold': require('./assets/fonts/GraphikBold.otf'),
    'GraphikThin': require('./assets/fonts/GraphikThin.otf'),
  });
  if(!loaded){
    return(
      <ActivityIndicator size="large" color="#00ff00" />
    )
  }
  else{
    return (
      <ScrollView style={styles.container}>
        <View style={styles.upperMain}>
          <View style={styles.upperIconContainer}>
            <Image
            source={require('./assets/images/menu.png')}
            />
            <Image
            source={require('./assets/images/bell.png')}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text preset='h1'>
              Covid-19
            </Text>
            <View style={styles.filterByCountryDrobdown}>
              <Image
              source={require('./assets/images/flag.png')}
              />
              <Text preset='h5'>USA</Text>
              <Image
              source={require('./assets/images/dropdown-icon.png')}
              />
            </View>
           
          </View>
          <View style={{marginTop:40}}> 
              <Text preset='h2'>Are you feeling sick?</Text>
              <Text preset='p' style={{marginTop:12}}>
                  If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.
              </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.callNowButton}>
              <Image source={require('./assets/images/phone.png')}/>

             
              <Text preset='small'>Call Now</Text>
            </Pressable>
            <Pressable style={styles.sendSmsButton}>
              <Image source={require('./assets/images/message-circle.png')}/>

              <Text preset='small'>Send SMS</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.lowerMain}>
          <Text preset='h4' styles={{marginTop:32}}>Prevention</Text>
          <View style={{marginTop:24,flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
            <View style={styles.preventionDataContainer}>
              <Image style={{marginBottom:16}} source={require('./assets/images/distance-maintain.png')}/>
              <Text preset='h5' style={{marginTop:16}}>Avoid close contact</Text>
            </View>
            <View style={styles.preventionDataContainer}>
              <Image style={{marginBottom:16}} source={require('./assets/images/washing-hand.png')}/>
              <Text preset='h5' style={{marginTop:16}}>Clean your hand often</Text>
            </View>
            <View style={styles.preventionDataContainer}>
              <Image style={{marginBottom:16}} source={require('./assets/images/masked-man.png')}/>
             
              <Text preset='h5'>Wear a facemask</Text>

             
            </View>
          </View>

          {/* Banner */}
          <View style={styles.bannerContainer}>
            <View>
              <Image source={require('./assets/images/banner-girl.png')} style={styles.bannerImage}></Image>
            </View>
            <View style={{marginTop:16,width:'50%'}}>
              <Text preset='h3'>Do your own test</Text>
              <Text preset='p'>Follow the instructions to do your own test.</Text>
            </View>
          </View>
        </View>
       
      </ScrollView>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
   
    
  },
  upperMain:{
    backgroundColor:colors.blue,
    flex:1,
    width:'100%',
    paddingHorizontal:20,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    paddingBottom:32
  },
  upperIconContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:48
  },
  titleContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:34
  },
  filterByCountryDrobdown:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:colors.white,
    borderRadius:30,
    width:116,
    paddingHorizontal:10,
    paddingVertical:10,
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:16
  },
  callNowButton:{
    backgroundColor:colors.red,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:10,
    width:155,
    paddingHorizontal:16,
    borderRadius:20
  },
  sendSmsButton:{
    backgroundColor:colors.skyBlue,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:10,
    width:155,
    paddingHorizontal:16,
    borderRadius:20
  },
  lowerMain:{
    flex:1,
    width:'100%',
    paddingHorizontal:20,
  },
  preventionDataContainer:{width:'33%',alignItems:'center'},
  bannerContainer:{
    backgroundColor:colors.blue,
    justifyContent:'space-between',
    height:'30%',
    flexDirection:'row',
    marginTop:44,
    marginBottom:90,
    borderRadius:20,
    paddingLeft:16,
    paddingRight:8
  },
  bannerImage:{
    marginTop:-12
  }

  
});
