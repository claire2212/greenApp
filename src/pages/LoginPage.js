import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
  }

  onChangeText = (value, field) => {
    this.setState({ [field]: value });
  };

  onSubmitingEditing = (field) => {
    this.secondTextInput.focused();
  }

  validateForm = () => {

  };

  render() {
    const { username, password } = this.state;
    return (
      <View>
        <TextInput
          onChangeText={(value) => this.onChangeText(value, 'username')}
          onSubmitEditing={this.onSubmitEditing}
          placeholder='identifiant'
          returnKeyType='next'
          value={username}
        />
        <TextInput
          ref={(input) => { this.secondTextInput = input; }}
          onChangeText={(value) => this.onChangeText(value, 'password')}
          onSubmitEditing={this.validateForm}
          placeholder='mot de passe'
          returnKeyType='done'
          value={password}
        />
        <TouchableOpacity>

        </TouchableOpacity>

      </View>
    );
  }
}

export default LoginPage;
