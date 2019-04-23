import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, Modal, TouchableHighlight, Alert   } from 'react-native';


 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      objet: '',
      message: '',
    };
  }

  


  maFonction(){

    if( this.state.objet !== '' && this.state.email !== '' && this.state.message !== ''){

      console.warn('envoie du message');
      console.warn('objet'+this.state.objet);
      console.warn('email'+this.state.email);
      console.warn('message'+this.state.message);

      fetch('http://192.168.1.8:3007/form', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          objet: this.state.objet,
          email: this.state.email,
          message: this.state.message
        }),
      });

    }else{
      console.warn('un des champs est vide')
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled scrollEnabled={true}>
        <View>
          <Text>Bonjour c'est ma premiere APP</Text>
          <Text>Contact form </Text>
          <Text>Objet : </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 2, borderRadius: 10, width: 150}}
            onChangeText={(objet) => this.setState({objet})}
          />
          <Text>Email : </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 2, borderRadius: 10, width: 150}}
            onChangeText={(email) => this.setState({email})}
          />
          <Text>Message : </Text>
          <TextInput
            style={{height: 300, borderColor: 'gray', borderWidth: 2, borderRadius: 10, width: 300}}
            onChangeText={(message) => this.setState({message})}
            multiline = {true}
            numberOfLines = {4}
          />
          <Button
            onPress={this.maFonction.bind(this)}
            title="Envoyer"
            color="#841584"
            accessibilityLabel="Envoyer"
          />
        </View>
 
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#15ef20',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
