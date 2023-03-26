import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';

export default function PostsScreen() {
  const photo = require('../../assets/images/photo.jpg');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Publications</Text>
        <TouchableOpacity style={styles.svgSignOut}>
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
      </View>

      <View style={styles.main}>
        <Image source={photo} style={styles.image} />
        <View style={styles.profileInfo}>
          <Text style={styles.textName}>Natali Romanova</Text>
          <Text style={styles.textMail}>e-mail@example.com</Text>
        </View>
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
  svgSignOut: {
    position: 'absolute',
    top: 54,
    left: 330,
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 16,
    marginTop: 32,
  },
  image: {
    width: 60,
    height: 60,
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
