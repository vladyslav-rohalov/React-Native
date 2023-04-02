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
import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useState, useRef, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { CameraIcon, DeleteIcon, LocationIcon } from '../../utils/icons';

const initialState = {
  photo: '',
  title: '',
  location: '',
};

export default function CreatePostScreen({ navigation }) {
  const [publicationData, setPublicationData] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const inputTitleRef = useRef();
  const inputLocationRef = useRef();
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useFocusEffect(React.useCallback(() => {}, []));

  const handlePublication = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setPublicationData(initialState);
    inputTitleRef.current.clear();
    inputLocationRef.current.clear();

    console.log(permission);
  };

  const takePhoto = async () => {
    try {
      const photo = await camera.takePictureAsync();
      setPhoto(photo.uri);
      // getAddress();
      console.log(photo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View style={styles.main}>
            <View style={styles.cameraWrapper}>
              <Camera style={styles.cameraContainer} ref={setCamera}>
                <TouchableOpacity onPress={takePhoto}>
                  <CameraIcon />
                </TouchableOpacity>
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
              <View style={styles.locationIcon}>
                <LocationIcon />
              </View>
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
                <DeleteIcon />
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
  cameraWrapper: {
    width: '100%',
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
  },
  cameraContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
  locationIcon: { position: 'absolute', top: 36, left: 0 },
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
