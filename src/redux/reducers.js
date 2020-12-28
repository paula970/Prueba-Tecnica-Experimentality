import {fetchSearchRequest, fetchSearchSuccess,fetchSearchFailure } from "./actions";
//Reducers
//estado actual de la tienda ############
const default_state = {
    loading: false,
    search: [],
    error: ''
}




//crear el reducer para ordenar la tienda 
export const reducer = (state = default_state, action) =>{
    //switch para repartir el trabajo (cada acción tiene un tipo)
    switch(action.type){
        case fetchSearchRequest: 
            return{
                //#######estado actual action.payload video 4
                ...state, //... devolvemos todo el estado anterior y se hace la modificación pertinente
                loading: true
            }
            case fetchSearchSuccess:
                return {
                    loading: false,
                    search: action.payload,
                    error: ''
                }
            case fetchSearchFailure:
                return {
                    loading: false,
                    search: [],
                    error: action.payload
                }
        
        default: return state;
    }
}
