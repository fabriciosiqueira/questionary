import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import moment from "moment";

import {
    Container,
    TitleInput,
    Scroller,
    QTitulo,
    List,
    ObsText,
    Question,
    BodyInput,
    SaveButton,
    SaveButtonImage,
    CloseButton,
    CloseButtonImage,
    DeleteButton,
    DeleteButtonText,
    TrocarStatus
} from './styles';

//Import de componentes personalizados
import AddedQuestion from '../../components/AddedQuestion';
import QuestionText from '../../components/QuestionText';


export default () => {

    //hooks
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector( state => state.questionary.list);
    
    
    //States
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [addQuestion, setAddQuestion] = useState("");
    const [titulo, setTitulo] = useState('');
    const [quetions, setQuestions] = useState([]);
    const [status, setStatus] = useState(false);
    

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Criar Questionarios",
            headerRight:()=>(
                <SaveButton underlayColor="transparent" onPress={handleSaveBnt}>
                    <SaveButtonImage source={require('../../assets/save.png')} />
                </SaveButton>
            )  
        })
    }, [status,titulo,userEmail]);

    

    const handleSaveBnt = () => {
        if(titulo != "" && userEmail != "" && userName != "" && quetions.length > 0) {
            let data = moment().format('DD/MM/YYYY HH:mm:ss');
            dispatch({
                type: 'ADD_QUESTIONARY',
                payload:{
                    item: {
                        createdAt:`${data}`,
                        titulo,
                        user:{
                            name:userName,
                            email:userEmail,
                        },
                        quetions
                    }
                }
            })

            navigation.goBack();

        } else {
            alert("Preencha os campos, todos são obrigatorios")
        }
    }
    
    const handleAddQuestions = (question) => {

        let obj = null;
        
        if(question == "") {
            alert("Ops... Você precisa preencher o campo 'Criar Pergunta'.");
        } else {
            let check = question.split('');
            let ultimoElemento = check[check.length - 1];

            if(ultimoElemento != "?") {
                obj = {
                    q:`${question}?`,
                    r:[]
                }

                quetions.push(obj);
                setQuestions(quetions)

                setStatus(true);
                setAddQuestion("");
            } else {
                obj = {
                    q:`${question}`,
                    r:[]
                }
                
                quetions.push(obj);
                setQuestions(quetions);
                setStatus(true);
                setAddQuestion("");
            }

            
        }
        console.log("perguntas: ", quetions)
        
    }

    return (
        <Container>
            <Scroller>
                <TitleInput
                    value={userName}
                    onChangeText={t=>setUserName(t)}
                    placeholder="Nome do Autor"
                    placeholderTextColor="#CCC"
                />
                <TitleInput
                    value={userEmail}
                    onChangeText={t=>setUserEmail(t)}
                    placeholder="Email"
                    placeholderTextColor="#CCC"
                />
                <TitleInput
                    value={titulo}
                    onChangeText={t=>setTitulo(t)}
                    placeholder="Titulo do Questionario"
                    placeholderTextColor="#CCC"
                />

                <QTitulo>PERGUNTAS</QTitulo>

                

                    {quetions.length > 0 ?
                    
                        <List 
                        data={quetions}
                        renderItem={({item,index})=>(
                            <QuestionText
                                data={item}
                                index={index}
                            />
                        )}
                        KeyExtractor={(item,index)=>index.toString()}
                        />
                
                    :
                        <ObsText>
                            Não há perguntas adicionadas ate o momento...
                        </ObsText>
                    }

                    <TitleInput
                        value={addQuestion}
                        onChangeText={t=>setAddQuestion(t)}
                        placeholder="Digite a pergunta aqui, adicione no +"
                        placeholderTextColor="#CCC"
                    />

                    <AddedQuestion onPress={()=>handleAddQuestions(addQuestion)} />

                   

            </Scroller>

        </Container>
    );
}

