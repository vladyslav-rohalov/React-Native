import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import { useState, useRef } from 'react';
import { Camera } from 'expo-camera';

const initialState = {
  photo: '',
  title: '',
  location: '',
};

export default function CreatePostScreen({ navigation }) {
  const [publicationData, setPublicationData] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // const [camera, setCamera] = useState(null);
  // const [photo, setPhoto] = useState(null);
  // const [location, setLocation] = useState(null);
  const inputTitleRef = useRef();
  const inputLocationRef = useRef();

  const handlePublication = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setPublicationData(initialState);
    inputTitleRef.current.clear();
    inputLocationRef.current.clear();
  };

  // const takePhoto = async () => {
  //   try {
  //     const photo = await camera.takePictureAsync();
  //     setPhoto(photo.uri);
  //     getAddress();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View style={styles.main}>
            <View style={styles.cameraWrapper}>
              <Camera style={styles.cameraContainer}>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={{ color: 'white' }}>SNAP</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.uploadPhoto}>
                <Svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  style={styles.svgPhoto}
                >
                  <Circle cx="30" cy="30" r="30" fill="white" />
                  <G clipPath="url(#clip0_32_29)">
                    <Path
                      d="M29.9998 33.2C31.7671 33.2 33.1998 31.7673 33.1998 30C33.1998 28.2327 31.7671 26.8 29.9998 26.8C28.2325 26.8 26.7998 28.2327 26.7998 30C26.7998 31.7673 28.2325 33.2 29.9998 33.2Z"
                      fill="#BDBDBD"
                    />
                    <Path
                      d="M27 20L25.17 22H22C20.9 22 20 22.9 20 24V36C20 37.1 20.9 38 22 38H38C39.1 38 40 37.1 40 36V24C40 22.9 39.1 22 38 22H34.83L33 20H27ZM30 35C27.24 35 25 32.76 25 30C25 27.24 27.24 25 30 25C32.76 25 35 27.24 35 30C35 32.76 32.76 35 30 35Z"
                      fill="#BDBDBD"
                    />
                  </G>
                  <Defs>
                    <ClipPath id="clip0_32_29">
                      <Rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(18 18)"
                      />
                    </ClipPath>
                  </Defs>
                </Svg>
              </TouchableOpacity> */}
              </Camera>
            </View>

            <Text style={styles.uploadText}>Upload photo</Text>

            <View>
              <TextInput
                style={styles.input}
                inputMode="text"
                placeholder="Title..."
                placeholderTextColor={'#BDBDBD'}
                ref={inputTitleRef}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={e => {
                  setPublicationData(prevState => ({ ...prevState, title: e }));
                }}
              />
            </View>

            <View>
              <Svg
                style={styles.svgLocation}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
                  stroke="#BDBDBD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                  stroke="#BDBDBD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <TextInput
                style={[styles.input, { paddingLeft: 24 }]}
                inputMode="text"
                placeholder="Location..."
                placeholderTextColor={'#BDBDBD'}
                ref={inputLocationRef}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={e => {
                  setPublicationData(prevState => ({
                    ...prevState,
                    location: e,
                  }));
                }}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handlePublication}>
              <Text style={styles.buttonText}>Publish</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <View
              style={{
                ...styles.footerIcon,
              }}
            >
              <TouchableOpacity>
                <Svg width="70" height="40" viewBox="0 0 70 40" fill="none">
                  <G clipPath="url(#clip0_38_39)">
                    <Rect width="70" height="40" rx="20" fill="#F6F6F6" />
                    <Path
                      d="M26 14H28H44"
                      stroke="#BDBDBD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M42.5 14C42.5 13.7239 42.2761 13.5 42 13.5C41.7239 13.5 41.5 13.7239 41.5 14H42.5ZM28.5 14C28.5 13.7239 28.2761 13.5 28 13.5C27.7239 13.5 27.5 13.7239 27.5 14H28.5ZM30.5 14C30.5 14.2761 30.7239 14.5 31 14.5C31.2761 14.5 31.5 14.2761 31.5 14H30.5ZM38.5 14C38.5 14.2761 38.7239 14.5 39 14.5C39.2761 14.5 39.5 14.2761 39.5 14H38.5ZM41.5 14V28H42.5V14H41.5ZM41.5 28C41.5 28.8284 40.8284 29.5 40 29.5V30.5C41.3807 30.5 42.5 29.3807 42.5 28H41.5ZM40 29.5H30V30.5H40V29.5ZM30 29.5C29.1716 29.5 28.5 28.8284 28.5 28H27.5C27.5 29.3807 28.6193 30.5 30 30.5V29.5ZM28.5 28V14H27.5V28H28.5ZM31.5 14V12H30.5V14H31.5ZM31.5 12C31.5 11.1716 32.1716 10.5 33 10.5V9.5C31.6193 9.5 30.5 10.6193 30.5 12H31.5ZM33 10.5H37V9.5H33V10.5ZM37 10.5C37.8284 10.5 38.5 11.1716 38.5 12H39.5C39.5 10.6193 38.3807 9.5 37 9.5V10.5ZM38.5 12V14H39.5V12H38.5Z"
                      fill="#BDBDBD"
                    />
                    <Path
                      d="M33 19V25"
                      stroke="#BDBDBD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M37 19V25"
                      stroke="#BDBDBD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </G>
                  <Defs>
                    <ClipPath id="clip0_38_39">
                      <Rect width="70" height="40" fill="white" />
                    </ClipPath>
                  </Defs>
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  main: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 32,
  },
  svgPhoto: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  cameraWrapper: {
    width: '100%',
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: 'red',
  },
  cameraContainer: {
    width: '90%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    zIndex: 3,
  },
  uploadPhoto: {
    backgroundColor: '#E8E8E8',
    width: '100%',
    height: 240,
    borderRadius: 8,
  },

  uploadText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 18.75,
    color: '#BDBDBD',
    marginTop: 8,
  },
  input: {
    height: 32,
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#E8E8E8',
    fontFamily: 'Roboto-Regular',
    color: '#212121',
    fontSize: 16,
    marginTop: 32,
  },
  svgLocation: { position: 'absolute', top: 36, left: 0 },
  button: {
    height: 50,
    marginTop: 32,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#F6F6F6',
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    color: '#BDBDBD',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  footer: { flex: 1, justifyContent: 'flex-end' },
  footerIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 39,
    alignItems: 'center',
    marginBottom: 34,
    marginTop: 9,
  },
});
