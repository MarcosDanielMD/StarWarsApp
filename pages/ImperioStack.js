import {createStackNavigator} from '@react-navigation/stack';
import Imperio from './Imperio';
import Naves from './Naves';
import Planetas from './Planetas';

const Stack = createStackNavigator();

export default function FotosStack(){
  return(
    <Stack.Navigator>
            <Stack.Screen name="Imperio" component={Imperio}/>
            <Stack.Screen name="Naves" component={Naves} options={{title:"Naves"}}/>
            <Stack.Screen name="Planetas" component={Planetas} options={{title:"Planetas"}}/>
        </Stack.Navigator>
    );
}