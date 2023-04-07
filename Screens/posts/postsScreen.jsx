import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useState, useEffect } from 'react';
import { CommentIcon, LocationIcon } from '../../utils/icons';

export default function PostsScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts(prevState => [...prevState, route.params]);
    }
    // console.log(posts[0].publicationData.photo);
  }, [route.params]);
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
          <FlatList
            data={posts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <Image
                  source={{ uri: item.publicationData.photo }}
                  style={styles.publicationPhoto}
                />
                <Text style={styles.publicationText}>
                  {item.publicationData.title}
                </Text>
                <View style={styles.publicationSubBlock}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <CommentIcon />
                    <Text style={styles.publicationComments}>0</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <LocationIcon />
                    <Text style={styles.publicationTextLocation}>
                      {item.publicationData.address}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          {/* <Image source={img} style={styles.publicationPhoto} />
          <Text style={styles.publicationText}>Forest</Text>
          <View style={styles.publicationSubBlock}>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <CommentIcon />
              <Text style={styles.publicationComments}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <LocationIcon />
              <Text style={styles.publicationTextLocation}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </TouchableOpacity>
          </View> */}
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
