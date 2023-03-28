import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

export default function CommentsScreen() {
  const photoUser = require('../../assets/images/photoUser.jpg');
  const photoOwner = require('../../assets/images/photo.jpg');
  const img = require('../../assets/images/img.jpg');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Comments</Text>
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
        <View style={styles.publicationInfo}>
          <Image source={img} style={styles.publicationPhoto} />
        </View>
        <View style={styles.commentItem}>
          <Image style={styles.smallPhoto} source={photoUser} />
          <View style={styles.commentTextBlockUser}>
            <Text style={styles.commentText}>
              Really love your most recent photo. I’ve been trying to capture
              the same thing for a few months and would love some tips!
            </Text>
            <Text style={styles.commentDate}>June 09, 2020 | 08:40</Text>
          </View>
        </View>
        <View style={styles.commentItem}>
          <View style={styles.commentTextBlockOwner}>
            <Text style={styles.commentText}>
              A fast 50mm like f1.8 would help with the bokeh. I’ve been using
              primes as they tend to get a bit sharper images.
            </Text>
            <Text style={styles.commentDate}>June 09, 2020 | 09:14</Text>
          </View>
          <Image style={styles.smallPhoto} source={photoOwner} />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.pushComment}>
          <TextInput
            style={styles.input}
            inputMode="text"
            placeholder="Comment..."
            placeholderTextColor={'#BDBDBD'}
            // ref={inputTitleRef}
            // onFocus={() => setIsShowKeyboard(true)}
            // onChangeText={e => {
            //   setPublicationData(prevState => ({ ...prevState, title: e }));
            // }}
          />
          <Svg
            style={styles.svgComment}
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <Circle cx="17" cy="17" r="17" fill="#FF6C00" />
            <Path
              d="M17 10L17.3536 9.64645C17.1583 9.45118 16.8417 9.45118 16.6464 9.64645L17 10ZM21.6464 15.3536C21.8417 15.5488 22.1583 15.5488 22.3536 15.3536C22.5488 15.1583 22.5488 14.8417 22.3536 14.6464L21.6464 15.3536ZM11.6464 14.6464C11.4512 14.8417 11.4512 15.1583 11.6464 15.3536C11.8417 15.5488 12.1583 15.5488 12.3536 15.3536L11.6464 14.6464ZM16.5 24C16.5 24.2761 16.7239 24.5 17 24.5C17.2761 24.5 17.5 24.2761 17.5 24H16.5ZM16.6464 10.3536L21.6464 15.3536L22.3536 14.6464L17.3536 9.64645L16.6464 10.3536ZM16.6464 9.64645L11.6464 14.6464L12.3536 15.3536L17.3536 10.3536L16.6464 9.64645ZM16.5 10V17H17.5V10H16.5ZM16.5 17V24H17.5V17H16.5Z"
              fill="white"
            />
          </Svg>
        </TouchableOpacity>
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
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 32,
  },

  publicationPhoto: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },

  commentItem: {
    gap: 16,
    flexDirection: 'row',
    width: '100%',
    marginBottom: 24,
  },

  smallPhoto: {
    width: 28,
    height: 28,
  },
  commentTextBlockUser: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 6,
    borderTopLeftRadius: 0,
    padding: 16,
  },
  commentTextBlockOwner: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 6,
    borderTopRightRadius: 0,
    padding: 16,
  },
  commentText: {
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
  },
  commentDate: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    marginTop: 8,
  },

  footer: {},
  pushComment: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    fontFamily: 'Roboto-Regular',
    color: '#212121',
    fontSize: 16,
    margin: 16,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
  },
  svgComment: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
});
