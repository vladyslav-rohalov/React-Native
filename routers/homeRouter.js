import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/home/home';
import PostsScreen from './Screens/posts/postsScreen';
import CreatePostScreen from './Screens/posts/createPostsScreen';
import { TouchableOpacity } from 'react-native-web';
import { AddPostIcon } from './utils/icons';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';

const MainTab = createBottomTabNavigator();

export default function UseRoute({ navigation }) {
  return (
    <MainTab.Navigator initialRouteName="Home" backBehavior="history">
      {/* Posts */}
      <MainTab.Screen
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Publications',
          tabBarStyle: { alignItems: 'center' },
          headerTitleStyle: {
            fontFamily: 'Roboto-Medium',
            fontSize: 17,
            color: '#212121',
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderColor: 'rgba(0, 0, 0, 0.3)',
          },
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{ marginRight: 16 }}
              onPress={() => navigation.navigate('Login')}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <AntDesign
              name="appstore-o"
              size={24}
              color="#212121CC"
              style={{ marginRight: 60 }}
            />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      {/* //Posts */}
      {/* NewPost */}
      <MainTab.Screen
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Create post',
          headerTitleStyle: {
            fontFamily: 'Roboto-Medium',
            fontSize: 17,
            color: '#212121',
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderColor: 'rgba(0, 0, 0, 0.3)',
          },
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color="#212121CC" />
            </TouchableOpacity>
          ),
          tabBarStyle: { alignItems: 'center' },
          tabBarShowLabel: false,
          tabBarIcon: () => <AddPostIcon />,
          tabBarIconStyle: { marginLeft: 60, marginRight: 60 },
        }}
        name="NewPost"
        component={CreatePostScreen}
      />
      {/* //NewPost */}
      {/* Home */}
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { alignItems: 'center' },
          tabBarIcon: () => (
            <Ionicons
              style={{ marginLeft: 43 }}
              name="md-person-outline"
              size={24}
              color="#212121CC"
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      {/* // Home  */}
    </MainTab.Navigator>
  );
}
