
/*
    abaixo existe a propriedade chamada "adm"
    ela foi setada no caso de proteçao inicial
    para o privelegio de criar ou deletar questionarios
    nao foi  implementada para esse MVP cocierge de teste
    mas caso fosse necessaria, antes de cada açao descrita anteriormente,
    iria se requistar a digitaçao da senha para tais fins
*/
const initialState = {
    adm:"82192263",
    AnswerData:{
        name:"",
        email:""
    },
    list:[
      {
          createdAt:"15/03/2021 15:31:37",
          titulo:"Questionario de Exemplo",
          user:{
              name:"Fabricio Siqueira",
              email:"blackfchanel@gmail.com",
          },
          quetions:[
              {
                  q:"Pergunta exemplo 1?",
                  r:[
                      {
                          resposta:"Resposta exemplo 1",
                          data:"17/03/2021 15:31:37",
                          loc:{
                              lat:"",
                              long:""
                          },
                          name:"Fulano",
                          email:"fulano@gmail.com"
                      },
                      {
                        resposta:"Resposta exemplo 1",
                        data:"17/03/2021 15:31:37",
                        loc:{
                            lat:"",
                            long:""
                        },
                        name:"Beltrano",
                        email:"beltrano@gmail.com"
                    }
                  ]
              },
              {
                q:"Pergunta exemplo 2?",
                r:[
                    {
                        resposta:"Resposta exemplo 2",
                        data:"17/03/2021 15:31:37",
                        loc:{
                            lat:"",
                            long:""
                        },
                        name:"Fulano",
                        email:"fulano@gmail.com"
                    },
                    {
                      resposta:"Resposta exemplo 2",
                      data:"17/03/2021 15:31:37",
                      loc:{
                          lat:"",
                          long:""
                      },
                      name:"Beltrano",
                      email:"beltrano@gmail.com"
                  }
                ]
            }
          ]
      }  
    ]
}

export default (state = initialState, action) => {
    
    let newList = [...state.list];


    switch(action.type) {
        case 'ADD_QUESTIONARY':
            //title:action.payload.item,
            newList.push(action.payload.item)
            
        break;
        case 'EXIT_QUESTIONARY':
            state.AnswerData.name = action.payload.AnswerData.name;
            state.AnswerData.email = action.payload.AnswerData.email;
            
        break;
        case 'ADD_USER_QUESTIONARY':
            state.AnswerData.name = action.payload.AnswerData.name;
            state.AnswerData.email = action.payload.AnswerData.email;
        break;
        case 'ADD_ANSWER':
            
            if(newList[action.payload.questionario]) {
                console.log("entrou")
                let array = newList[action.payload.questionario].quetions[action.payload.questao].r.push(action.payload.item);
                
            } else {
                console.log("falhou")
            }
        break;
        case 'EDIT_AFAZER':

            if(newList[action.payload.key]){
                newList[action.payload.key] = {
                    item:action.payload.item,
                };
            }
            
        break;
        case 'DEL_AFAZER':

            newList = newList.filter((item, index)=>index != action.payload.key);
            
        break;
        case 'LIST_AFAZER':

            newList = action.payload.list;
            
        break;

    }

    return {...state, list:newList};
}