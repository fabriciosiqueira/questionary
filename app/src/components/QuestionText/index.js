
import React, {useState,useEffect, useLayoutEffect} from 'react';

import { 
    TextQuestion,
    TextView
} from './styles';


export default ({data,index}) => {

    console.log("renderizar array: ",data)

    return (   
            <TextView>
                <TextQuestion>
                   {index + 1} - {data.q}
                </TextQuestion>
            </TextView>
    );
}

