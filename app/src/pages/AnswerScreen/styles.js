import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color: #458a39;
`;

export const Scroller = styled.ScrollView`
    flex: 5;
    padding: 5px;
`;

export const TitleInput = styled.TextInput`
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
    color: #FFF;
`;

export const AddButton = styled.TouchableHighlight`
    margin-right: 15px;

`;

export const List = styled.FlatList`
    flex: 1;
    width:100%
`;


export const QTitulo = styled.Text`
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
    color: #FFF;
    text-align: center;
`;



export const BodyInput = styled.TextInput`
    flex:3;
    padding:15px;
    font-size:15px;
    color:#FFF;
    background-color: #BBB;

`;

export const SaveButton = styled.TouchableHighlight`
    margin-right: 15px;

`;

export const BoxButton = styled.View`
    justify-content: row;
    align-items: space-between

`;

export const SaveButtonImage = styled.Image`
    height: 24px;
    width: 24px;

`;


export const CloseButton = styled.TouchableHighlight`
    margin-left: 15px;

`;

export const CloseButtonImage = styled.Image`
    height: 15px;
    width: 15px;

`;

export const DeleteButton = styled.TouchableHighlight`
    height: 40px;
    background-color: #FF3333;
    justify-content: center;
    align-items: center;  
 

`;

export const DeleteButtonText = styled.Text`
    font-size: 14px;
    color: #FFF;

`;

export const TrocarStatus = styled.Switch``;

export const TrocarStatusView = styled.View``;

export const ObsText = styled.Text`
    padding:5px;
    font-size:10px;
    color:#FFF;
    text-align: center;
`;

