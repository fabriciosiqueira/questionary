import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//pages
import ListScreen from '../pages/ListScreen';
import addQScreen from '../pages/addQScreen';



const MainStack = createStackNavigator();

export default () => (
    <MainStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#0d730d'
        },
        headerTintColor:'#FFF'
    }}>
        <MainStack.Screen name='List' component={ListScreen} />
        <MainStack.Screen name='CreateQuestionary' component={addQScreen} />
    </MainStack.Navigator>
);