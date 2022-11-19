import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./src/Components/Auth/Auth";
import Register from "./src/Components/Auth/Register";
import Home from "./src/Pages/Home";
import index from "./config/index";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer initialRouteName="Auth">
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
