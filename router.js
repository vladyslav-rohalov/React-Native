import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/home/home';
import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import PostsScreen from './Screens/posts/postsScreen';
import CreatePostScreen from './Screens/posts/createPostsScreen';
import CommentsScreen from './Screens/comments/commentsScreen';

import { AntDesign, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export default function UseRoute(isAuath) {
  return (
    <>
      {isAuath ? (
        <MainTab.Navigator initialRouteName="Home">
          <MainTab.Screen
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <AntDesign name="appstore-o" size={32} color="#FF6C00" />
                ) : (
                  <AntDesign name="appstore-o" size={24} color="#212121CC" />
                ),
            }}
            name="Posts"
            component={PostsScreen}
          />
          <MainTab.Screen
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <SimpleLineIcons name="plus" size={32} color="#FF6C00" />
                ) : (
                  <SimpleLineIcons name="plus" size={24} color="#212121CC" />
                ),
            }}
            name="NewPost"
            component={CreatePostScreen}
          />
          <MainTab.Screen
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons
                    name="md-person-outline"
                    size={32}
                    color="#FF6C00"
                  />
                ) : (
                  <Ionicons
                    name="md-person-outline"
                    size={24}
                    color="#212121CC"
                  />
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
