import React from 'react';
import {
  StyleSheet,     // style
  Text,           // 문자
  View,           // 렌더링 하는 div 라고 보면 됨
  StatusBar,      // 상태바  -  StatusBar barStyle={"light-content"} :: 상단바 내용물 보이게 + 바탕색은 없앰
  TextInput,      // input text
  Dimensions,     // 
  Platform,       // ios/android 구분
  ScrollView      // 당길 수 있는 View - style은 contentContainerStyle 로 지정
  } from 'react-native';
import { render } from 'react-dom';
import Todo from './Todo';

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newTodo: ""
  };

  render() { 
    const { newTodo } = this.state;
    
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} /> 
        <Text style={styles.title}>Today's note</Text>

        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={"Create to do"}
            value={newTodo}
            onChangeText={this._controlNewTodo}
            placeholderTextColor='#7F25D9'
            returnKeyType={"done"}  // 키보드를 done으로 변경
            autoCorrect={false}     // 자동수정 설정 X
            />

          <ScrollView contentContainerStyle={styles.toDos}>   
            <Todo />
          </ScrollView>
        </View>
      </View>
    );
  }
  _controlNewTodo = text => {
    this.setState({
      newTodo: text
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F0459',
    alignItems: 'center'
  },
  title: {
    color: '#F2BE22',
    fontSize: 40,
    marginTop: 30,
    fontWeight: "200",
    marginBottom: 30
  },
  card: {
    backgroundColor: '#5C12A6',
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    
    // iOS, Android 에 다르게 표시
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
       }
     },
      android: {
        elevation: 3.5
     }
   })
  },
  input: {
    padding: 20,
    borderBottomColor: "#7F25D9",
    borderBottomWidth: StyleSheet.hairlineWidth,  // 1 dpi 크기의 border 생성
    fontSize: 25,
    color: '#85E7F2'
  },
  toDos: {
    alignItems: 'center'
  }
});
