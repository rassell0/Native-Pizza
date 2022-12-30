import { Modal,SafeAreaView,Text } from "react-native";
import StartScreen from "./screens/StartScreen";
import tw from "twrnc"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import LoginModal from "./screens/Modals/LoginModal";

import CreateAccountModal from "./screens/Modals/CreateAccountModal";
import CreatePasswordScreen from "./screens/CreatePasswordScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";
import OrderOptionModal from "./screens/Modals/OrderOptionModal";
import RootTab from "./screens/tabNav/RootTab";

export default function App() {

  const Stack = createNativeStackNavigator()
 






  return (
  
 <Provider store={store}>
<NavigationContainer>
<Stack.Navigator >
  <Stack.Group  screenOptions={{headerShown:false}}>
    <Stack.Screen  name="start" component={StartScreen}/>
     <Stack.Screen name="orders" component={RootTab}/>
     
    

  

 
<Stack.Screen name="orderOptions" component={OrderOptionModal}/>

  </Stack.Group>
  <Stack.Group screenOptions={{ animationDuration:"pop", headerTintColor:"white" , headerStyle:{backgroundColor:"#292828"},headerTitleStyle:{color:"white"}  }}>
  <Stack.Screen options={{title:"Log In"}} name="login" component={LoginModal}/>
  <Stack.Screen options={{title:"Create Account"}} name="create" component={CreateAccountModal}/>
  <Stack.Screen options={{title:"Create Password"}} name="createP" component={CreatePasswordScreen}/>
  
  </Stack.Group>
<Stack.Group>
  
</Stack.Group>
</Stack.Navigator>
</NavigationContainer>
 
   </Provider>
  );
}


