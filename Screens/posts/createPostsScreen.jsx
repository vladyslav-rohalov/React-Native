import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';

export default function CreatePostScreen() {
  const photo = require('../../assets/images/photo.jpg');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create a publication</Text>
        <TouchableOpacity style={styles.svgBackArrow}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M20 12H4"
              stroke="#212121"
              strokeOpacity="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M10 18L4 12L10 6"
              stroke="#212121"
              strokeOpacity="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <TouchableOpacity style={styles.uploadPhoto}>
          <Svg
            style={styles.svgPhoto}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
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
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerIcon}>
          <TouchableOpacity>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Rect width="24" height="24" fill="white" />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 3H10V10H3V3Z"
                stroke="#212121"
                strokeOpacity="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 3H21V10H14V3Z"
                stroke="#212121"
                strokeOpacity="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 14H21V21H14V14Z"
                stroke="#212121"
                strokeOpacity="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 14H10V21H3V14Z"
                stroke="#212121"
                strokeOpacity="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity>
            <Svg width="70" height="40" viewBox="0 0 70 40" fill="none">
              <G clipPath="url(#clip0_12_109)">
                <Rect width="70" height="40" rx="20" fill="#FF6C00" />
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.5 13.5H34.5V19.5H28.5V20.5H34.5V26.5H35.5V20.5H41.5V19.5H35.5V13.5Z"
                  fill="white"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_12_109">
                  <Rect width="70" height="40" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path
                d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
                stroke="#212121"
                strokeOpacity="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="#212121"
                strokeOpacity="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 0.5 },
  },
  headerText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    marginTop: 55,
    marginBottom: 11,
    letterSpacing: -0.41,
    textAlign: 'center',
  },
  svgBackArrow: {
    position: 'absolute',
    top: 54,
    left: 16,
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 32,
  },
  svgPhoto: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%', translateY: '-50%' }],
  },
  uploadPhoto: {
    backgroundColor: '#E8E8E8',
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  profileInfo: {
    flexDirection: 'column',
    marginLeft: 8,
    marginTop: 12,
  },
  textName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
  },
  textMail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
  },
  footer: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: -0.5 },
  },
  footerIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 39,
    alignItems: 'center',
    marginBottom: 34,
    marginTop: 9,
  },
});
