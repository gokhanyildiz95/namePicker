import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  Dimensions,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <View>
      <LinearGradient colors={['#3b2492', '#c27cd8']}>
        <SafeAreaView style={styles.main}>
        <LinearGradient style={styles.profile} colors={['#63e299', '#75c1ee']}>
        <Image
        style={styles.usericon}
        source={require('./src/assets/social-media.png')}
      />
        </LinearGradient>
          <TextInput type='text' style={styles.nickName} placeholder={'Talihli Giriniz'} />
          <TouchableOpacity style={styles.addPersonBtn}>
            <Text style={styles.btnText}> Çekilişe Ekle</Text>
          </TouchableOpacity>
          <View>
            <FlatList></FlatList>
          </View>
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
  usericon:{
    width: 90,
    height: 90,
    opacity:0.4,
    marginLeft:5,
    marginTop:5,
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
