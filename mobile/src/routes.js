import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const AppStack = createStackNavigator();


import Incidents from './pages/incidents';
import Details from './pages/details';

export default function Routes(){

    return(

<NavigationContainer>

        <AppStack.Navigator screenOptions={{ headerShown: false}}>
            <AppStack.Screen name="incidents" component={Incidents} ></AppStack.Screen>
            <AppStack.Screen name="details"  component={Details} ></AppStack.Screen>

        </AppStack.Navigator>



        

</NavigationContainer>


    );


}