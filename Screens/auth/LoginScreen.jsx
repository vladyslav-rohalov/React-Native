import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';

import { useState, useRef } from 'react';

const initialState = {
  mail: '',
  password: '',
};

export default function LoginScreen() {
  const [credentials, setCredentials] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isSecurePassword, setIsSecurePassword] = useState(true);
  const backgroundImage = require('../../assets/images/bg.jpg');
  const mailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSignIn = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setCredentials(initialState);
    mailInputRef.current.clear();
    passwordInputRef.current.clear();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <KeyboardAvoidingView
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.form}>
            <View>
              <Text style={styles.titleRegister}>Sign In</Text>
            </View>

            <View>
              <TextInput
                inputMode="email"
                autoComplete="email"
                ref={mailInputRef}
                style={styles.input}
                placeholder="E-mail"
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={e => {
                  setCredentials(prevState => ({ ...prevState, mail: e }));
                }}
              />
            </View>
            <View>
              <TextInput
                inputMode="text"
                autoComplete="password"
                ref={passwordInputRef}
                style={styles.input}
                placeholder="Password"
                secureTextEntry={isSecurePassword}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={e => {
                  setCredentials(prevState => ({ ...prevState, password: e }));
                }}
              />
              <TouchableOpacity
                style={styles.showPass}
                onPressIn={() => setIsSecurePassword(false)}
                onPressOut={() => setIsSecurePassword(true)}
              >
                <Text style={styles.showPassText}>Show</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textSignIn}>No account? Sign up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  form: {
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  titleRegister: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    marginBottom: 33,
    marginTop: 32,
    color: '#212121',
    textAlign: 'center',
    lineHeight: 35,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
    padding: 10,
    borderColor: '#E8E8E8',
    fontFamily: 'Roboto-Regular',
    color: '#212121',
    placeholderTextColor: '#BDBDBD',
    fontSize: 16,
    margin: 16,
  },
  button: {
    height: 50,
    margin: 16,
    marginTop: 27,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#ffffff',
    backgroundColor: '#FF6C00',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  textSignIn: {
    fontFamily: 'Roboto-Regular',
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 144,
  },
  showPass: {
    position: 'absolute',
    top: 32,
    left: 320,
  },
  showPassText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
  },
});
