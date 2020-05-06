import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  StatusBar,
  Dimensions,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  state = {
    user : [
     {
       name:"gokhan"
     },
     {
       name:"gokhan1"
     },
     {
       name:"gokhan2"
     },
     {
       name:"gokhan4"
     },
     {
      name:"gokhan5"
    },
    {
      name:"gokhan6"
    },
    {
      name:"gokhan7"
    },
    {
      name:"gokhan8"
    },
    {
      name:"gokhan9"
    },
    {
      name:"gokhan9"
    },
    {
      name:"gokhan9"
    },
    {
      name:"gokhan9"
    },
   
   ],
 }
 
list = () => {
  return [...this.state.user.reverse()].map(element => {
     return (
       <View style={{ margin: 5 }}>
         <Text>{element.name}</Text>
       </View>
     );
   });
 };

  return (
    <View>
      <LinearGradient colors={['#3b2492', '#c27cd8']}>
        <SafeAreaView style={styles.main}>
        <LinearGradient style={styles.profile} colors={['#63e299', '#fff']}>
        <Image
        style={styles.usericon}
        source={require('./src/assets/user.png')}
      />
        </LinearGradient>
          <TextInput type='text' style={styles.nickName} placeholder={'Talihli Giriniz'} />
          <TouchableOpacity style={styles.addPersonBtn}>
            <Text style={styles.btnText}> Çekilişe Ekle</Text>
          </TouchableOpacity>

          <ScrollView style={styles.userList}>{this.list()}</ScrollView>

        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};



const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },
  profile:{
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop:  Dimensions.get('window').height /5,
  },
  userList:{
    display:'flex',
    width:Dimensions.get('window').width /2,
    marginTop:10,
  },
  usericon:{
    opacity:0.9,
    width: 90,
    height: 90,
    marginLeft:3,
    marginTop:6
  },
  nickName: {
    backgroundColor: '#fff',
    borderRadius: 25,
    width: Dimensions.get('window').width / 2 + 20,
    opacity: 0.8,
    textAlign: 'center',
    fontSize:20,
    marginTop:15

  },
  addPerson: {
    flexDirection: 'row',
  },
  addPersonBtn: {
    marginTop: 5,
    borderRadius: 25,
    backgroundColor: '#98a4e2',
    width: Dimensions.get('window').width / 2 + 20,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#3b2492',
    
  },
});

export default App;
