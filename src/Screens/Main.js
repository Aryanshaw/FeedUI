import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  // TextInput,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import ChatInfo from '../Components/ChatInfo';
import {smallChat} from '../Components/ChatInfo';
// import CheckBox from '@react-native-community/checkbox';
import {TextInput} from 'react-native-paper';
// import InputScrollView from 'react-native-input-scroll-view';

const Main = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [value, setValue] = useState('Helpful ?');
  const [value1, setValue1] = useState('Helpful ?');

  const chatCard = ({item}) => {
    return (
      //   <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxHeader}>
          <Image style={styles.tinyLogo} source={{uri: item.Image}} />
          <Text style={styles.header2}>{item.title}</Text>
          <Text style={{color: '#7d7d7d', marginTop: 7, right: 10}}>
            {item.time}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.comment}>{item.description}</Text>
        </View>
        {item.id === '1' || item.id === '3' ? (
          <View
            style={{paddingHorizontal: 55, flexDirection: 'row', marginTop: 5}}>
            <TouchableOpacity
              style={{
                borderColor: 'grey',
                borderWidth: 1,
                alignItems: 'center',
                // borderRadius:5,
                borderRadius: 5,
                padding: 5,
                justifyContent: 'center',
              }}
              onPress={() => {
                // {?setValue1("✓ Helpful"):null}
                {
                  value1 === 'Helpful ?' && item.id === '1'
                    ? setValue1('✓ Helpful')
                    : setValue1('Helpful ?');
                }
              }}
              disabled={item.id !== '1'}>
              <Text style={{textAlign: 'center',color: '#7d7d7d'}}>{value1}</Text>
            </TouchableOpacity>
            <View style={{marginRight: 7}}></View>
            <TouchableOpacity
              style={{
                borderColor: 'grey',
                borderWidth: 1,
                alignItems: 'center',
                // borderRadius:5,
                borderRadius: 5,
                padding: 3,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold',color: '#7d7d7d'}}> ↱</Text>
            </TouchableOpacity>
            <Text
              style={{
                color: 'purple',
                fontSize: 30,
                marginTop: 0,
                right: 0,
                fontWeight: 'bold',
                marginLeft: 7,
              }}>
              {item.text2}
            </Text>
          </View>
        ) : null}

        {item.id === '1' ? (
          <ScrollView style={{paddingLeft: 50, marginTop: 10, height: 160,elevation:3,marginBottom:-30}}nestedScrollEnabled = {true}>
            {smallChat.map(items => {
              return (
                <ScrollView
                nestedScrollEnabled = {true}
                  style={{backgroundColor: '#F5F5F5', padding: 9,elevation:3,borderRadius:15}}
                  key={items.id}>
                  <View style={styles.boxHeader}>
                    <Image
                      style={styles.tinyLogo}
                      source={{uri: items.Image}}
                      // key={items.id}
                    />
                    <Text style={[styles.header, styles.miniHeader]}>
                      {items.title}
                    </Text>
                  </View>
                  <Text style={styles.comment}>{items.description}</Text>
                </ScrollView>
              );
            })}
          </ScrollView>
        ) : null}

      </View>
    );
  };

  return (
    <View style={styles.bg}>
      <View style={[styles.container, styles.bg]}>
        {/* <Text style={styles.header}>Hello</Text> */}
        <View style={[styles.boxContainer]}>
          <Text style={{fontWeight: 'bold', color: 'purple', marginBottom: 5}}>
            Ask
          </Text>
          <View style={styles.boxHeader}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://i.pinimg.com/736x/c9/4c/38/c94c38a002ba18d69100e5b6c7623bf9.jpg',
              }}
            />
            <Text style={styles.header}>Hermione Granger</Text>
            <Text style={{color: '#7d7d7d', right: 70, marginTop: 7}}>
              18:19 pm
            </Text>
          </View>
          <Text style={styles.comment}>
            Let's have that, good sir. Come on, sit down: come on, and do your
            best To fright me with your sprites; you're powerful at it
          </Text>
          
          {/* //here was the helpful buttons */}

        </View>

        <FlatList
          // horizontal
          style={styles.boxContainer2}
          data={ChatInfo}
          keyExtractor={item => item.id}
          renderItem={chatCard}
        />

        <View
          style={{marginTop: 10, marginBottom: -35, width: '113%', right: 19}}>
          <TextInput
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              // paddingHorizontal: 20,
              borderRadius: 10,
              width: '100%',
              backgroundColor: 'white',
              borderColor: 'gray',
              // borderBottomWidth: 4
              // paddingHorizontal: 20,
            }}
            scrollEnabled
            right={
              <TextInput.Icon
                name={'microphone'}
                color={'green'}
                size={30}
                style={{marginRight: 35}}
              
              />
            }
            left={
              <TextInput.Icon
                name={'send'}
                color={'#4AB6E3'}
                size={30}
                style={{marginLeft: 585}}
              
              />
            }
            // returnKeyType={'search'}
            onKeyPress={() => (
              <TextInput.Icon name={'mail'} color={'green'} size={30} />
            )}
            multiline={true}
            numberOfLines={3}
            label="Type here"
            value={textInputValue}
            onChangeText={text => setTextInputValue(text)}
            // underlineColor="purple"
          />
        </View>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    paddingHorizontal: 15,
    paddingVertical: 25,

    width: '100%',
  },

  bg: {
    backgroundColor: '#F1F1F1',
    //   paddingBottom:50
    marginBottom: 10,
    // height:950,
    height: '100%',
  },
  boxContainer2: {
    // backgroundColor: 'white',
    backgroundColor: 'white',
    // height: '55%',
    // flex:4,

    padding: 10,
    // paddingTop: 10,
    marginTop: 10,
    // paddingBottom: 30,
    paddingHorizontal: 11,
    elevation: 3,
    borderColor: 'white',
    borderTopWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    // width: '100%',
  },
  header: {
    fontSize: 17,
    // lineHeight:25,
    marginTop: 5,
    fontWeight: 'bold',
    marginBottom: 15,
    // marginTop:15,
    right: 35,
    color: 'black',
  },
  header2: {
    fontSize: 17,
    // lineHeight:25,
    marginTop: 5,
    fontWeight: 'bold',
    marginBottom: 15,
    // marginTop:15,
    right: 30,
    color: 'black',
    justifyContent: 'flex-start',
    flex: 1,
    left: 20,
  },
  boxContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: -15,
    paddingBottom: 30,
    // boxShadow:"0"
    paddingHorizontal: 21,
    elevation: 3,
    // width:"200%",
    borderColor: 'purple',
    // borderBottomWidth:1,
    borderTopWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: '100%',
  },

  boxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tinyLogo: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  comment: {
    color: 'black',
    justifyContent: 'flex-start',
    // flex: 1,
    paddingHorizontal:25,
    left: 30,
  },
  textInput: {
    width: 40,
    height: 40,
  },
  miniHeader: {
    
    justifyContent: 'flex-start',
    flex: 1,
    left: 20,
  },
});
