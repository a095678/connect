import React from 'react';
import Loginscreen from './LR/Login';
import Register from './LR/Register'
import Main from './Main'
import { createStackNavigator,} from '@react-navigation/stack';


const LR = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen  
                name="Loginscreen"
                component={Loginscreen}/>
            <Stack.Screen 
            name="Register"
            component={Register}/> 
        </Stack.Navigator>
);
};

export default LR;