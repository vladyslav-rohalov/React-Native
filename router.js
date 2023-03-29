import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/home/home';
import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import PostsScreen from './Screens/posts/postsScreen';
import CreatePostScreen from './Screens/posts/createPostsScreen';
import CommentsScreen from './Screens/comments/commentsScreen';
import { TouchableOpacity } from 'react-native-web';
import { AddPostIcon } from './utils/icons';

import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export default function UseRoute(isAuath) {
  return (
    <>
      {isAuath ? (
        <MainTab.Navigator initialRouteName="Home">
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
                >
                  <Feather name="log-out" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              ),
              tabBarShowLabel: false,
              // tabBarIcon: () => (
              //   <AntDesign
              //     name="appstore-o"
              //     size={24}
              //     color="#212121CC"
              //     style={{ marginRight: 60 }}
              //   />
              // ),
            }}
            name="Posts"
            component={PostsScreen}
          />

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
                >
                  <Ionicons name="arrow-back" size={24} color="#212121CC" />
                </TouchableOpacity>
              ),
              tabBarStyle: { alignItems: 'center' },
              tabBarShowLabel: false,
              // tabBarIcon: () => <AddPostIcon />,
              tabBarIconStyle: { marginLeft: 60, marginRight: 60 },
            }}
            name="NewPost"
            component={CreatePostScreen}
          />

          <MainTab.Screen
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: { alignItems: 'center' },
              tabBarIcon: () => (
                <TouchableOpacity style={{ flex: 1, flexDirrection: 'row' }}>
                  <Ionicons
                    style={{ marginLeft: 43 }}
                    name="md-person-outline"
                    size={24}
                    color="#212121CC"
                  />
                  <AddPostIcon />
                  <AntDesign
                    name="appstore-o"
                    size={24}
                    color="#212121CC"
                    style={{ marginRight: 60 }}
                  />
                </TouchableOpacity>
              ),
            }}
            name="Home"
            component={HomeScreen}
          />
          {/* <MainTab.Screen
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused, size, color }) => (
                <AntDesign name="appstore-o" size={24} color="#212121CC" />
              ),
            }}
            name="Comments"
            component={CommentsScreen}
          /> */}
        </MainTab.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen
            options={headerHide}
            name="Login"
            component={LoginScreen}
          />
          <AuthStack.Screen
            options={headerHide}
            name="Registration"
            component={RegistrationScreen}
          />
        </AuthStack.Navigator>
      )}
    </>
  );
}
