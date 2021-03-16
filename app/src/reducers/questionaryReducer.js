const initialState = {
    adm:"82192263",
    list:[
      {
          createdAt:"15/03/2021 15:31:37",
          titulo:"Questionario de Exemplo",
          user:{
              name:"Fabricio Siqueira",
              email:"blackfchanel@gmail.com",
          },
          questions:[
              {
                  q:"Pergunta exemplo 1?",
                  r:[
                      {
                          repsposta:"Resposta exemplo 1",
                          data:"09/03/2021",
                          loc:{
                              lat:"",
                              long:""
                          },
                          name:"Fulano",
                          email:"fulano@gmail.com"
                      },
                      {
                        repsposta:"Resposta exemplo 1",
                        data:"09/03/2021",
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
                q:"Pergunta exemplo 2",
                r:[
                    {
                        repsposta:"Resposta exemplo 2",
                        data:"09/03/2021",
                        loc:{
                            lat:"",
                            long:""
                        },
                        name:"Fulano",
                        email:"fulano@gmail.com"
                    },
                    {
                      repsposta:"Resposta exemplo 2",
                      data:"09/03/2021",
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
            newList.push({
                
                createdAt:action.payload.createdAt,
                titulo:action.payload.titulo,
                user:{
                    name:action.payload.name,
                    email:action.payload.email,
                },
                questions:action.payload.questions
            })
            
        break;
        case 'EDIT_AFAZER':

            if(newList[action.payload.key]){
                newList[action.payload.key] = {
                    item:action.payload.item,
                };
            }
            
        break;
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