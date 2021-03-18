
import React, {useState,useEffect, useLayoutEffect} from 'react';

import { 
    Box,
    Title,
    AnswerText,
    MarcarArea,
    BoxView
} from './styles';


export default ({data, index}) => {

    return (   
        
        <BoxView>
            <Title>
              {index + 1} - {data.name} | {data.email}
            </Title>
            <Title>
                Data: {data.data}
            </Title>
            <AnswerText>
                {data.resposta}
            </AnswerText>
        </BoxView>
    );
}

