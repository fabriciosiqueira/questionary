import React, {useState,useEffect, useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

//Acessar dados
import { useSelector, useDispatch} from 'react-redux';

import {
    Container,
    AddButton,
    AddButtonImage,
    List,
    NoList,
    NoListImage,
    NoListText

} from './styles';

//Import de componentes personalizados
import QItem from '../../components/QItem';

export default () => {

    //Hooks
    const navigation = useNavigation();
    const list = useSelector(state => state.questionary.list);
    const dispatch = useDispatch();

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Questionarios",
            headerRight:()=>(
                <AddButton underlayColor="transparent" onPress={()=>navigation.navigate('CreateQuestionary')}>
                    <AddButtonImage source={require('../../assets/more.png')} />
                </AddButton>
            )  
        })
    }, []);

    const handleQuestionaryPress = (index) => {
        navigation.navigate('QuetionList', {
            key:index
        })
    }

    

    return (
        <Container>
            {list.length > 0 &&
                <List 
                data={list}
                renderItem={({item,index})=>(
                    <QItem 
                        data={item}
                        index={index}
                        onPress={handleQuestionaryPress}
                    />
                )}
                KeyExtractor={(item,index)=>index.toString()}
                />
            } 

            {list.length == 0 &&
                <NoList>
                    <NoListImage source={require('../../assets/note.png')}/>
                    <NoListText>
                        Não há questionarios
                    </NoListText>
                </NoList>
            }
        </Container>
    );
}