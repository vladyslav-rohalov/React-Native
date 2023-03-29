import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';

export default function PostsScreen({ navigation }) {
  const photo = require('../../assets/images/photo.jpg');
  const img = require('../../assets/images/img.jpg');
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.user}>
          <Image source={photo} style={styles.image} />
          <View style={styles.profileInfo}>
            <Text style={styles.textName}>Natali Romanova</Text>
            <Text style={styles.textMail}>e-mail@example.com</Text>
          </View>
        </View>

        <View style={styles.publicationInfo}>
          <Image source={img} style={styles.publicationPhoto} />
          <Text style={styles.publicationText}>Forest</Text>
          <View style={styles.publicationSubBlock}>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 9.5C0.996559 10.8199 1.30493 12.1219 1.9 13.3C3.33904 16.1793 6.28109 17.9988 9.5 18C10.8199 18.0034 12.1219 17.6951 13.3 17.1L19 19L17.1 13.3C17.6951 12.1219 18.0034 10.8199 18 9.5C17.9988 6.28109 16.1793 3.33904 13.3 1.9C12.1219 1.30493 10.8199 0.996557 9.5 0.999998H9C4.68419 1.2381 1.2381 4.68419 1 9V9.5V9.5Z"
                  stroke="#BDBDBD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text style={styles.publicationComments}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row' }}>
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
              <Text style={styles.publicationTextLocation}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 32,
  },
  user: { flexDirection: 'row' },
  image: {
    width: 60,
    height: 60,
  },
  profileInfo: {
    justifyContent: 'center',
    marginLeft: 8,
  },
  textName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
  },
  textMail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
  },
  publicationInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 32,
  },
  publicationPhoto: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  publicationText: {
    marginTop: 8,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  publicationSubBlock: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 11,
    justifyContent: 'space-between',
  },
  publicationComments: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
    marginLeft: 9,
  },
  publicationTextLocation: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
    marginLeft: 8,
  },
});
