import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/home/home';
import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import PostsScreen from './Screens/posts/postsScreen';
import CreatePostScreen from './Screens/posts/createPostsScreen';
import CommentsScreen from './Screens/comments/commentsScreen';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

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

  return (
    <NavigationContainer>
      <View onLayout={onLayoutRootView} style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewPost" component={CreatePostScreen} />
          <Stack.Screen name="Posts" component={PostsScreen} />
          <Stack.Screen name="Comments" component={CommentsScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
});
