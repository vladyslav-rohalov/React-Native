import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/home/home';
import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import PostsScreen from './Screens/posts/postsScreen';
import CreatePostScreen from './Screens/posts/createPostsScreen';
import CommentsScreen from './Screens/comments/commentsScreen';
import { TouchableOpacity } from 'react-native';

import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
// const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
// const MainStack = createStackNavigator();

export default function UseRoute(isAuath) {
  return (
    <>
      {isAuath ? (
        <MainTab.Navigator
          screenOptions={({ route }) => ({
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Roboto-Medium',
              fontSize: 17,
              color: '#212121',
            },
            headerStyle: {
              borderBottomWidth: 1,
              borderColor: 'rgba(0, 0, 0, 0.3)',
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#FFFFFF',
            tabBarActiveBackgroundColor: '#FF6C00',
            tabBarInactiveTintColor: '#BDBDBD',
            tabBarItemStyle: {
              borderRadius: 25,
              maxWidth: 80,
              height: 40,
              margin: 11,
            },
            tabBarStyle: {
              backgroundColor: '#FFFFFF',
              height: 83,
              borderTopWidth: 1,
              alignItems: 'center',
            },
            tabBarIcon: ({ color }) => {
              let iconName;
              if (route.name === 'Posts') {
                iconName = 'appstore-o';
                return (
                  <AntDesign
                    name={iconName}
                    size={24}
                    color={color}
                    // style={{ marginRight: 60 }}
                  />
                );
              } else if (route.name === 'NewPost') {
                iconName = 'add';
                return <Ionicons name={iconName} size={24} color={color} />;
              } else if (route.name === 'Home') {
                iconName = 'md-person-outline';
                return (
                  <Ionicons
                    name={iconName}
                    size={24}
                    color={color}
                    // style={{ marginLeft: 60 }}
                  />
                );
              }
            },
          })}
        >
          {/* Posts */}
          <MainTab.Screen
            options={({ navigation }) => ({
              headerTitle: 'Publications',
              headerRight: () => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ marginRight: 16 }}
                  onPress={() => navigation.navigate('Login')}
                >
                  <Feather name="log-out" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              ),
            })}
            name="Posts"
            component={PostsScreen}
          />
          {/* //Posts */}

          {/* NewPost */}
          <MainTab.Screen
            options={({ navigation }) => ({
              headerTitle: 'Create post',
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ marginLeft: 16 }}
                  onPress={() => navigation.goBack()}
                >
                  <Ionicons name="arrow-back" size={24} color="#212121CC" />
                </TouchableOpacity>
              ),
              tabBarIconStyle: { marginLeft: 60, marginRight: 60 },
            })}
            name="NewPost"
            component={CreatePostScreen}
          />
          {/* //NewPost */}

          {/* Home */}
          <MainTab.Screen
            options={() => ({
              headerShown: false,
            })}
            name="Home"
            component={HomeScreen}
          />
          {/* // Home  */}
        </MainTab.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Registration"
            component={RegistrationScreen}
          />
        </AuthStack.Navigator>
      )}
    </>
  );
}
