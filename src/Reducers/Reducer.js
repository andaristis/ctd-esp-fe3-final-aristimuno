export const reducer = (state, action) => {
    switch(action.type){
            case 'GET_DENTISTAS':
            return {...state, data: action.payload};
                case 'ADD_FAV': 
                return {...state, favs: [...state.favs, action.payload]}
                case 'CHANGE_THEME':
            return {...state, theme: action.payload} //INCOMPLETO
                case 'GET_DENTISTA':
                    return {...state, dentista: action.payload};
                case 'DELETE_FAV': 
                return {...state, favs: action.payload}//INCOMPLETO
                    
                }
            }