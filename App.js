import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  
  speak = () => {
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);
  }
  render() {
    return(
      <View style={styles.container}>
        <TextInput
        placeholder='Type something'
        style={styles.TextInputStyle}

        keyboardType={'default'}

        onChangeText={(text) =>  { 
          this.setState({ name: text });
        }}
        value={this.state.text}>
        </TextInput>
        <Button title="Press to hear some words" onPress={this.speak} />
      </View>
    )
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInputStyle: {
    textAlign: 'center',
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});
