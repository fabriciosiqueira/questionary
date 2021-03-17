import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #458a39;

`;

export const AddButton = styled.TouchableHighlight`
    margin-right: 15px;

`;

export const AddButtonImage = styled.Image`
    width: 24px;
    height: 24px;

`;

export const List = styled.FlatList`
    flex: 1;
    width:100%
`;

export const NoList = styled.View`
    justify-content:center;
    align-items:center      
`;

export const NoListImage = styled.Image`
    width:50px;
    height:50px;
    margin-bottom:10px;      
`;

export const NoListText = styled.Text`
    font-size:17px;
    color:#FFF
`;

export const BoxInput = styled.View`
    padding:10px;
`;

export const TitleInput = styled.TextInput`
    font-size: 20px;
    font-weight: bold;
    padding: 5px;
    color: #FFF;
    width:100%
`;

export const CloseButton = styled.TouchableHighlight`
    margin-left:15px;

`;

export const CloseButtonImage = styled.Image`
    width:20px;
    height:20px;

`;