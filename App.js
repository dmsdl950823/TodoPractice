import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform } from 'react-native';
// StatusBar barStyle={"light-content"} :: 상단바 내용물 보이게 + 바탕색은 없앰

const { height, width } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} /> 
      <Text style={styles.title}>Today's note</Text>

      <View style={styles.card}>
        <TextInput style={styles.input} placeholder={"Create to do"} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F0459',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 40,
    marginTop: 30,
    fontWeight: "200",
    marginBottom: 30
  },
  card: {
    backgroundColor: '#7F25D9',
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
  }
});
