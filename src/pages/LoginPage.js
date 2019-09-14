import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#127727',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#127727',
    height: 60,
    justifyContent: 'center',
    marginVertical: 20,
    width: '50%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  mainView: {
    alignItems: 'center',
    backgroundColor: '#242843',
    flex: 1,
    justifyContent: 'center',
  },
  modal: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 50,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  modalButtons: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 60,
    borderWidth: 1,
    height: 60,
    marginVertical: 20,
    paddingHorizontal: 20,
    width: '80%',
  },
  title: {
    color: 'white',
  }
});

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      modalVisible: false
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  onExitModal = () => {
    this.setState({ modalVisible: false });
  };

  onChangeText = (value, field) => {
    this.setState({ [field]: value });
  };

  onSubmitEditing = () => {
    this.secondTextInput.focused();
  };

  onValidateForm = () => {
    const { username, password } = this.state;
    if (username.toLowerCase() === 'demo' && password.toLowerCase() === 'demo') {
      Actions.home();
    } else {
      this.setState({ modalVisible: true });
    }
  };


  render() {
    const { modalVisible, username, password } = this.state;
    return (
      <View style={styles.mainView}>
        <Text style={styles.title}>Me connecter</Text>
        <TextInput
          onChangeText={(value) => this.onChangeText(value, 'username')}
          onSubmitEditing={this.onSubmitEditing}
          placeholder="Identifiant"
          returnKeyType="next"
          style={styles.textInput}
          value={username}
        />
        <TextInput
          ref={(input) => { this.secondTextInput = input; }}
          onChangeText={(value) => this.onChangeText(value, 'password')}
          onSubmitEditing={this.onValidateForm}
          placeholder="Mot de passe"
          returnKeyType="done"
          style={styles.textInput}
          value={password}
        />
        <TouchableOpacity
          onPress={this.onValidateForm}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Valider</Text>
        </TouchableOpacity>

        <Modal
          animationType={null}
          transparent
          visible={!!modalVisible}
        >
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={this.onExitModal}>
              <View style={styles.overlay} />
            </TouchableWithoutFeedback>

            <View style={styles.modal}>
              <Text style={[{ justifyContent: 'flex-start' }]}>
                Un problème est survenu lors de l'authentification. Veuillez réessayer.
              </Text>
              <View>
                <TouchableOpacity
                  onPress={this.onExitModal}
                  style={styles.modalButtons}
                >
                  <Text style={{ color: 'blue' }}>
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default LoginPage;
