import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Home from './Home';
import Rebelde from './Rebeldes';
import ImperioStack from './ImperioStack';

const Tab = createBottomTabNavigator();

export default function RoutesTab(){
  return(
    <Tab.Navigator inittialRouteName="Home" tabBarOptions={{ activeTintColor:"#000"}}>

      <Tab.Screen name="Home" component={Home} options={{tabBarLabel:'Home', tabBarIcon:
      ({color,size})=> (<MaterialCommunityIcons name="magazine-pistol" color={color} size={size} />)}}/>

      <Tab.Screen name="Rebeldes" component={Rebelde} options={{tabBarLabel:'Rebeldes', tabBarIcon:
      ({color,size})=> (<MaterialCommunityIcons name="sword-cross" color={color} size={size} />)}}/>

      <Tab.Screen name="Imperio" component={ImperioStack} options={{tabBarLabel:'Imperio', tabBarIcon:
      ({color,size})=> (<MaterialCommunityIcons name="death-star" color={color} size={size} />)}}/>
      
    </Tab.Navigator>
  )
}