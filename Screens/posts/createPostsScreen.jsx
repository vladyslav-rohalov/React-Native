import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { CameraIcon, DeleteIcon, LocationIcon } from '../../utils/icons';
import * as Location from 'expo-location';

const initialState = {
  photo: '',
  title: '',
  location: '',
  address: '',
};

export default function CreatePostScreen({ navigation }) {
  const [publicationData, setPublicationData] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);
  // const [permission, requestPermission] = Camera.useCameraPermissions();

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission to access location was denied');
        }
      })();
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission to access camera was denied');
        }
      })();
      (() => {
        if (
          publicationData.photo &&
          publicationData.title &&
          publicationData.address !== ''
        ) {
        }
      })();
      getLocation();
    }, [])
  );

  const handlePublication = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setPublicationData(initialState);
    navigation.navigate('Posts', { publicationData });
  };

  const takePhoto = async () => {
    try {
      const photo = await camera.takePictureAsync();
      setPublicationData(prevState => ({ ...prevState, photo: photo.uri }));
      getAddress();
    } catch (error) {
      console.log(error);
    }
  };

  const getAddress = async () => {
    try {
      const address = await Location.reverseGeocodeAsync({
        latitude: publicationData.location.coords.latitude,
        longitude: publicationData.location.coords.longitude,
      });
      setPublicationData(prevState => ({
        ...prevState,
        address: `${address[0].city}, ${address[0].country}`,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    setPublicationData(prevState => ({ ...prevState, location: location }));
  };

  const publishPost = () => {
    // uploadPostToServer();
    navigation.navigate('DefaultScreen');
    resetFunction();
  };

  function toggleCameraType() {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View style={styles.main}>
            <View style={styles.cameraWrapper}>
              <Camera
                style={styles.cameraContainer}
                ref={setCamera}
                type={type}
              >
                {publicationData.photo && (
                  <View style={styles.takePhotoContainer}>
                    <Image
                      source={{ uri: publicationData.photo }}
                      style={{ width: 120, height: 90 }}
                    />
                  </View>
                )}
                <TouchableOpacity onPress={takePhoto}>
                  <CameraIcon />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cameraReverse}
                  onPress={toggleCameraType}
                >
                  <Ionicons
                    name="md-camera-reverse-outline"
                    size={24}
                    color="#ffffff"
                  />
                </TouchableOpacity>
              </Camera>
            </View>

            <Text style={styles.uploadText}>Take photo</Text>

            <View>
              <TextInput
                style={styles.input}
                inputMode="text"
                placeholder="Title..."
                value={publicationData.title}
                placeholderTextColor={'#BDBDBD'}
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
                value={publicationData.address}
                inputMode="text"
                placeholder="Location..."
                placeholderTextColor={'#BDBDBD'}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={e => {
                  setPublicationData(prevState => ({
                    ...prevState,
                    address: e,
                  }));
                }}
              />
            </View>

            <TouchableOpacity
              style={[
                !publicationData.photo
                  ? styles.button
                  : [styles.button, { backgroundColor: '#FF6C00' }],
              ]}
              onPress={handlePublication}
            >
              <Text
                style={[
                  !publicationData.photo
                    ? styles.buttonText
                    : [styles.buttonText, { color: '#FFFFFF' }],
                ]}
              >
                Publish
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.footerIcon}
              onPress={() => setPublicationData(initialState)}
            >
              <DeleteIcon />
            </TouchableOpacity>
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
  cameraReverse: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  takePhotoContainer: {
    position: 'absolute',
    top: 4,
    left: 4,
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
