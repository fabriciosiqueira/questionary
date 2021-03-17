import React, {useState, useEffect, useLayoutEffect} from 'react';
import {Platform} from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from "@react-native-community/geolocation";
import moment from "moment";

import {
    Container,
    Scroller,
    List,
    ObsText,
    BodyInput,
    SaveButton,
    SaveButtonImage,
} from './styles';

//Import de componentes personalizados
import AList from '../../components/AList';


export default () => {

    //hooks
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector( state => state.questionary.list);
    const userData = useSelector( state => state.questionary.AnswerData);
    
    
    //States
    const [answer, setAnswer] = useState("");
    const [coords, setCoords] = useState(null);
    

    useLayoutEffect(()=>{
        if(route.params?.key != undefined && route.params?.questionaryKey != undefined && list[route.params.questionaryKey] && list[route.params.questionaryKey].quetions[route.params.key]) {
            
            let titulo = list[route.params.questionaryKey].quetions[route.params.key].q;
            
            navigation.setOptions({
                title: `${titulo}`,
                headerRight:()=>(
                    <SaveButton underlayColor="transparent" onPress={handleSaveBnt}>
                        <SaveButtonImage source={require('../../assets/save.png')} />
                    </SaveButton>
                )  
            })
            
        }
        
    }, [answer,coords,list]);

    

    const handleSaveBnt = async () => {
        
        if(answer != "") {
            
            let data = moment().format('DD/MM/YYYY HH:mm:ss');

            console.log("entro no if")

            //geolocalizaçao

            //Pedir permissao pra pegar localizaçao
            
            let result = await request(
                Platform.os === 'ios' ?
                    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                    :
                    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
            );

            if(result == 'granted') {
                Geolocation.getCurrentPosition((info)=>{
                    dispatch({
                        type: 'ADD_ANSWER',
                        payload:{
                            item:{
                                data:`${data}`,
                                name: userData.name,
                                email: userData.email,
                                resposta: answer,
                                loc: {
                                    lat:`${info.coords.latitude}`,
                                    long:`${info.coords.longitude}`
                                }
                            },
                            questionario:route.params.questionaryKey,
                            questao:route.params.key
        
                        }
                        
                        
                    })
                    alert(`A sua resposta, latitude:${info.coords.latitude} e longitude:${info.coords.longitude} foram salvas com sucesso`);
                    navigation.goBack(); 
                })

            } else {
                alert(`Desculpe - nos, mas para proseguirmos precisaremos de sua geolocalizaçao para analizes futuras`)
                navigation.goBack();
            }
            
        } else {
            alert("Ops... Preencha o campo de resposta")
        }
    }


    return (
        <Container>
            <ObsText>
               OBS: Ao salvar sua resposta, sua geolocalizaçao será requisitada para estudos geograficos da sua regiao
            </ObsText>
            <BodyInput 
                value={answer}
                onChangeText={t=>setAnswer(t)}
                placeholder="Digite sua Resposta"
                placeholderTextColor="CCC"
                multiline={true}
            />
            <Scroller>
                {list[route.params.questionaryKey].quetions[route.params.key].r.length > 0 ?
                
                    <List 
                        data={list[route.params.questionaryKey].quetions[route.params.key].r}
                        renderItem={({item,index})=>(
                            <AList
                                data={item}
                                index={index}
                            />
                        )}
                        KeyExtractor={(item,index)=>index.toString()}
                    />
            
                :
                    <ObsText>
                        Não há respostas a serem listadas ainda...
                    </ObsText>
                }
            </Scroller>
         
        </Container>
    );
}

