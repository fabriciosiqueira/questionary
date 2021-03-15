
import React, {useState,useEffect, useLayoutEffect} from 'react';

import { 
    Box,
    Title,
    MarcarArea,
    BoxView
} from './styles';


export default ({data, index, onPress}) => {
   

    

    return (   
        <Box onPress={()=>onPress(index)}>
            <BoxView>
                <Title>
                    {data.titulo}
                </Title>
            </BoxView>
        </Box>
    );
}

