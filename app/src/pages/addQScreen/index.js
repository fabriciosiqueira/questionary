import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
    Container,
    TitleInput,
    Scroller,
    BodyInput,
    SaveButton,
    SaveButtonImage,
    CloseButton,
    CloseButtonImage,
    DeleteButton,
    DeleteButtonText,
    TrocarStatus
} from './styles';

export default () => {

    //hooks
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector( state => state.questionary.list );
    

    
    return (
        <Container>
            <Scroller>
                <TitleInput
                    placeholder="Nome do usuario"
                    placeholderTextColor="#CCC"
                />
                <TitleInput
                    placeholder="Email"
                    placeholderTextColor="#CCC"
                />
            </Scroller>
        </Container>
    );
}

