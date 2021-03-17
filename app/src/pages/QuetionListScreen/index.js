import React, {useState,useEffect, useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

//Acessar dados
import { useSelector, useDispatch} from 'react-redux';

import {
    Container,
    BoxInput,
    TitleInput,
    List,
    NoList,
    NoListImage,
    NoListText,
    CloseButton,
    CloseButtonImage

} from './styles';

//Import de componentes personalizados
import ListQuestions from '../../components/ListQuestions';

export default () => {

    //Hooks
    const navigation = useNavigation();
    const route = useRoute();
    const list = useSelector(state => state.questionary.list);
    const AnswerData = useSelector(state => state.questionary.AnswerData);
    const dispatch = useDispatch();

    //States
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    



    useLayoutEffect(()=>{
        
        console.log("check-Key", route.params.key)
        if(route.params?.key != undefined && list[route.params.key]) {
            
            navigation.setOptions({
                title: `${list[route.params.key].titulo}`,
                headerLeft:()=>(
                    <CloseButton underlayColor="transparent" onPress={handleCloseBtn}>
                        <CloseButtonImage source={require("../../assets/close.png")} />
                    </CloseButton>
                )
            })
        }
        
    }, []);

    const handleCloseBtn = () => {
        if(AnswerData.name != "" && AnswerData.email != "") {
            dispatch({
                type: 'EXIT_QUESTIONARY',
                payload:{
                    AnswerData: {
                        name: "",
                        email: ""
                    }
                }
            })
            navigation.goBack()
        } else {
            
            navigation.goBack()
        }
    }

    const handleQuestionPress = (index) => {
        let questionaryKey = route.params.key;
        console.log("questionaryKey", questionaryKey);
        console.log("Key",index );

        if(userName != "" && userEmail != "") {

            dispatch({
                type: 'ADD_USER_QUESTIONARY',
                payload:{
                    AnswerData: {
                        name: userName,
                        email: userEmail
                    }
                }
            })
             
            navigation.navigate('AnswerQuetion', {
                questionaryKey,
                key: index
            })
        } else {
            alert("Ops... Preencha os Campos Nome e Email")
        }
       
    }
    

    return (
        <Container>

            <BoxInput>
                <TitleInput
                    value={userName}
                    onChangeText={t=>setUserName(t)}
                    placeholder="Nome"
                    placeholderTextColor="#CCC"
                />
                <TitleInput
                    value={userEmail}
                    onChangeText={t=>setUserEmail(t)}
                    placeholder="Email"
                    placeholderTextColor="#CCC"
                />
            </BoxInput>


            {list[route.params.key].quetions.length > 0 &&
                <List 
                data={list[route.params.key].quetions}
                renderItem={({item,index})=>(
                    <ListQuestions 
                        data={item}
                        index={index}
                        onPress={handleQuestionPress}
                    />
                )}
                KeyExtractor={(item,index)=>index.toString()}
                />
            } 

            {list[route.params.key].quetions.length == 0 &&
                <NoList>
                    <NoListImage source={require('../../assets/note.png')}/>
                    <NoListText>
                        Não há perguntas
                    </NoListText>
                </NoList>
            } 
           
        </Container>
    );
}