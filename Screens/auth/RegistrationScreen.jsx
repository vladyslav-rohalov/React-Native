import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  // Dimensions,
} from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { useState, useEffect, useRef } from 'react';

const initialState = {
  name: '',
  mail: '',
  password: '',
};

export default function RegistrationScreen({ navigation }) {
  const [credentials, setCredentials] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isSecurePassword, setIsSecurePassword] = useState(true);
  const nameInputRef = useRef();
  const mailInputRef = useRef();
  const passwordInputRef = useRef();
  const backgroundImage = require('../../assets/images/bg.jpg');
  const userPhoto = require('../../assets/images/photo.jpg');

  // const [dimensions, setDimensions] = useState(
  //   Dimensions.get('window').width - 20 * 2
  // );

  const handleRegister = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setCredentials(initialState);
    nameInputRef.current.clear();
    mailInputRef.current.clear();
    passwordInputRef.current.clear();
    navigation.navigate('Home');
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <KeyboardAvoidingView
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View
            style={{
              ...styles.form,
              // marginBottom: isShowKeyboard ? 20 : 0,
            }}
          >
            <TouchableOpacity style={styles.blokPhoto}>
              <Image source={userPhoto} style={styles.userPhoto} />
              <Svg
                style={styles.svgAddPhoto}
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <Circle
                  cx="12.5"
                  cy="12.5"
                  r="12"
                  fill="transparent"
                  stroke="#FF6C00"
                />
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                  fill="#FF6C00"
                />
              </Svg>
            </TouchableOpacity>
            <View>
              <Text style={styles.titleRegister}>Registration</Text>
            </View>

            <View>
              <TextInput
                autoComplete="name"
                ref={nameInputRef}
                style={styles.input}
                placeholder="Name"
                placeholderTextColor={'#BDBDBD'}
                inputMode="text"
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={e => {
                  setCredentials(prevState => ({ ...prevState, name: e }));
                }}
              />
            </View>

            <View>
              <TextInput
                autoComplete="email"
                ref={mailInputRef}
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor={'#BDBDBD'}
                inputMode="email"
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={e => {
                  setCredentials(prevState => ({ ...prevState, mail: e }));
                }}
              />
            </View>

            <View>
              <TextInput
                autoComplete="password-new"
                ref={passwordInputRef}
                style={styles.input}
                new-password={true}
                secureTextEntry={isSecurePassword}
                placeholder="Password"
                placeholderTextColor={'#BDBDBD'}
                inputMode="text"
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={e => {
                  setCredentials(prevState => ({
                    ...prevState,
                    password: e,
                  }));
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

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textSignIn}>
                Already have an account? Sign in
              </Text>
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
    justifyContent: 'flex-end',
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
    color: '#212121',
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
  blokPhoto: {
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 }],
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    zIndex: 2,
    width: 120,
    height: 120,
  },
  userPhoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  svgAddPhoto: {
    position: 'absolute',
    bottom: 12.5,
    right: -12.5,
  },

  showPass: {
    position: 'absolute',
    top: 32,
    right: 32,
  },
  showPassText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
  },
});
