import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//pages
import ListScreen from '../pages/ListScreen';
import AddQScreen from '../pages/AddQScreen';
import QuetionListScreen from "../pages/QuetionListScreen";
import AnswerScreen from "../pages/AnswerScreen";


const MainStack = createStackNavigator();

export default () => (
    <MainStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#0d730d'
        },
        headerTintColor:'#FFF'
    }}>
        <MainStack.Screen name='List' component={ListScreen} />
        <MainStack.Screen name='CreateQuestionary' component={AddQScreen} />
        <MainStack.Screen name='QuetionList' component={QuetionListScreen} />
        <MainStack.Screen name='AnswerQuetion' component={AnswerScreen} />
    </MainStack.Navigator>
);