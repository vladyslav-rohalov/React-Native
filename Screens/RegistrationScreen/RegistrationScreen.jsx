import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  // Dimensions,
} from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import { useState, useEffect } from 'react';

const initialState = {
  name: '',
  mail: '',
  password: '',
};

export default function RegistrationScreen() {
  const [credentials, setCredentials] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const svg = require('../../assets/images/addPhoto.svg');

  // const [dimensions, setDimensions] = useState(
  //   Dimensions.get('window').width - 20 * 2
  // );

  const handleRegister = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setCredentials(initialState);
    // TextInput.clear();
  };

  // useEffect(() => {
  //   const onChange = () => {
  //     const windowWidth = Dimensions.get('window').width - 20 * 2;
  //     setDimensions(windowWidth);
  //   };

  //   Dimensions.addEventListener('change', onChange);
  //   return () => {
  //     Dimensions.removeEventListener('change', onChange);
  //   };
  // }, []);
  return (
    <KeyboardAvoidingView
    // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView>
        <View
          style={{
            ...styles.form,
            // marginBottom: isShowKeyboard ? 20 : 0,
          }}
        >
          <View style={styles.blockPhoto}>
            <Svg height="25" width="25" viewBox="0 0 25 25">
              <Circle cx="0" cy="0" r="25" stroke="#FF6C00" strokeWidth="1" />
            </Svg>
          </View>
          <View>
            <Text style={styles.titleRegister}>Registration</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={e => {
                setCredentials(prevState => ({ ...prevState, name: e }));
              }}
            />
          </View>
          <View>
            <TextInput
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
              style={styles.input}
              placeholder="Password"
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={e => {
                setCredentials(prevState => ({ ...prevState, password: e }));
              }}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.textSignIn}>
            Already have an account? Sign in
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    height: 549,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  titleRegister: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    marginBottom: 33,
    marginTop: 92,
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
    color: '#BDBDBD',
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
    paddingBottom: 78,
  },
  blockPhoto: {
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
});
