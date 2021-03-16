
import React, {useState,useEffect, useLayoutEffect} from 'react';

import { 
    Box,
    BoxButton,
    ButtonImage,
    AddBnt
} from './styles';


export default ({onPress}) => {
   

    

    return (   
        <BoxButton >
            <AddBnt onPress={onPress}>
                <Box>
                    <ButtonImage source={require("../../assets/more.png")} />
                </Box>
            </AddBnt>
        </BoxButton>
    );
}

