import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import Svg, { Circle, Path, Rect, G, Defs, ClipPath } from 'react-native-svg';

export default function HomeScreen({ navigation }) {
  const backgroundImage = require('../../assets/images/bg.jpg');
  const userPhoto = require('../../assets/images/photo.jpg');
  const img = require('../../assets/images/img.jpg');
  return (
    <ImageBackground source={backgroundImage} style={styles.bgi}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.blokPhoto}>
          <Image source={userPhoto} style={styles.userPhoto} />
          <Svg
            style={styles.svgDelPhoto}
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
          >
            <Circle
              cx="18.4999"
              cy="18.5"
              r="12"
              transform="rotate(-45 18.4999 18.5)"
              fill="white"
              stroke="#E8E8E8"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.2574 13.5503L13.5503 14.2574L17.7929 18.5L13.5503 22.7426L14.2574 23.4497L18.5 19.2071L22.7426 23.4497L23.4498 22.7426L19.2071 18.5L23.4498 14.2574L22.7426 13.5503L18.5 17.7929L14.2574 13.5503Z"
              fill="#BDBDBD"
            />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.svgSignOut}
          onPress={() => navigation.navigate('Login')}
        >
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
              stroke="#BDBDBD"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M17 16L21 12L17 8"
              stroke="#BDBDBD"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M21 12H9"
              stroke="#BDBDBD"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
        <View>
          <Text style={styles.titleName}>Natali Romanova</Text>
        </View>
        <View style={styles.publicationInfo}>
          <Image source={img} style={styles.publicationPhoto} />
          <Text style={styles.publicationText}>Forest</Text>
          <View style={styles.publicationSubBlock}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Svg width="20" height="20" viewBox="0 0 20 20" fill="#FF6C00">
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

              <TouchableOpacity
                style={{ flexDirection: 'row', marginLeft: 27 }}
              >
                <Svg width="19" height="18" viewBox="0 0 19 18" fill="none">
                  <Path
                    d="M11.3646 6.59996H10.8646C10.8646 6.87611 11.0884 7.09996 11.3646 7.09996V6.59996ZM11.3646 3.39998H11.8646H11.3646ZM8.77345 1V0.5C8.58113 0.5 8.40586 0.610304 8.32266 0.783694L8.77345 1ZM5.31863 8.19995L4.86785 7.98365C4.83545 8.05115 4.81863 8.12508 4.81863 8.19995H5.31863ZM5.31863 16.9999H4.81863C4.81863 17.276 5.04249 17.4999 5.31863 17.4999V16.9999ZM15.0612 16.9999L15.0665 16.4999H15.0612V16.9999ZM16.7886 15.6399L16.2953 15.5582L16.2952 15.5591L16.7886 15.6399ZM17.9805 8.43995L18.4738 8.52161L18.474 8.52081L17.9805 8.43995ZM16.2531 6.59996V7.09999L16.2584 7.09994L16.2531 6.59996ZM5.31852 16.9999V17.4999C5.59466 17.4999 5.81852 17.276 5.81852 16.9999H5.31852ZM5.31852 8.19995H5.81852C5.81852 7.92381 5.59466 7.69995 5.31852 7.69995V8.19995ZM11.8646 6.59996V3.39998H10.8646V6.59996H11.8646ZM11.8646 3.39998C11.8646 1.76298 10.4439 0.5 8.77345 0.5V1.5C9.96511 1.5 10.8646 2.38604 10.8646 3.39998L11.8646 3.39998ZM8.32266 0.783694L4.86785 7.98365L5.76942 8.41626L9.22424 1.21631L8.32266 0.783694ZM4.81863 8.19995V16.9999H5.81863V8.19995H4.81863ZM5.31863 17.4999H15.0612V16.4999H5.31863V17.4999ZM15.056 17.4999C16.1356 17.5112 17.1085 16.7805 17.2821 15.7207L16.2952 15.5591C16.2104 16.077 15.7096 16.5067 15.0665 16.4999L15.056 17.4999ZM17.2819 15.7216L18.4738 8.52161L17.4873 8.35829L16.2953 15.5582L17.2819 15.7216ZM18.474 8.52081C18.5761 7.89746 18.3756 7.27092 17.9407 6.80775L17.2117 7.4922C17.442 7.73749 17.5371 8.05422 17.4871 8.3591L18.474 8.52081ZM17.9407 6.80775C17.5079 6.34665 16.8878 6.09328 16.2479 6.09999L16.2584 7.09994C16.6321 7.09602 16.9794 7.24483 17.2117 7.4922L17.9407 6.80775ZM16.2531 6.09996H11.3646V7.09996H16.2531V6.09996ZM5.31852 16.4999H2.72741V17.4999H5.31852V16.4999ZM2.72741 16.4999C2.01276 16.4999 1.5 15.972 1.5 15.3999H0.5C0.5 16.5951 1.53401 17.4999 2.72741 17.4999V16.4999ZM1.5 15.3999V9.79994H0.5V15.3999H1.5ZM1.5 9.79994C1.5 9.22782 2.01276 8.69995 2.72741 8.69995V7.69995C1.53401 7.69995 0.5 8.60476 0.5 9.79994H1.5ZM2.72741 8.69995H5.31852V7.69995H2.72741V8.69995ZM4.81852 8.19995V16.9999H5.81852V8.19995H4.81852Z"
                    fill="#FF6C00"
                  />
                </Svg>
                <Text style={styles.publicationComments}>159</Text>
              </TouchableOpacity>
            </View>

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
              <Text style={styles.publicationTextLocation}>Ukraine</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgi: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 119,
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
  svgDelPhoto: {
    position: 'absolute',
    bottom: 12.5,
    right: -18.5,
  },
  svgSignOut: {
    position: 'absolute',
    top: 20,
    right: 16,
    zIndex: 2,
  },
  titleName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    marginTop: 92,
    color: '#212121',
    textAlign: 'center',
    lineHeight: 35,
  },
  publicationInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 33,
    marginLeft: 16,
    marginRight: 16,
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
