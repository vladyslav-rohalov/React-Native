import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/home/home';
import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import PostsScreen from './Screens/posts/postsScreen';
import CreatePostScreen from './Screens/posts/createPostsScreen';
import CommentsScreen from './Screens/comments/commentsScreen';

SplashScreen.preventAutoHideAsync();
const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Audiowide-Regular': require('./assets/fonts/Audiowide-Regular.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const headerHide = {
    headerShown: false,
  };

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        {/* <AuthStack.Navigator initialRouteName="Login">
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
        </AuthStack.Navigator> */}
        <MainTab.Navigator initialRouteName="Home">
          <MainTab.Screen
            options={headerHide}
            name="Home"
            component={HomeScreen}
          />
          <MainTab.Screen
            options={headerHide}
            name="NewPost"
            component={CreatePostScreen}
          />
          <MainTab.Screen
            options={headerHide}
            name="Posts"
            component={PostsScreen}
          />
          <MainTab.Screen
            options={headerHide}
            name="Comments"
            component={CommentsScreen}
          />
        </MainTab.Navigator>
        {/* <Stack.Screen
            options={headerHide}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={headerHide}
            name="NewPost"
            component={CreatePostScreen}
          />
          <Stack.Screen
            options={headerHide}
            name="Posts"
            component={PostsScreen}
          />
          <Stack.Screen
            options={headerHide}
            name="Comments"
            component={CommentsScreen}
          /> */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
});
