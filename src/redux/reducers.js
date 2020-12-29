import { fetchSearchRequest, fetchSearchSuccess, fetchSearchFailure, fetchVideo, fetchVideoInfo} from "./actions";
//Reducers
//estado actual de la tienda ############
const default_state = {
    loading: false,
    search: [],
    error: ''
}

//crear el reducer para ordenar la tienda 
export const reducer = (state = default_state, action) => {
    //switch para repartir el trabajo (cada acción tiene un tipo)
    switch (action.type) {
        case fetchSearchRequest:
            return {
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

const view_video = {
    isOpen: false,
    videoid: ''
}

export const reducer2 = (state = view_video, action) => {
    switch (action.type) {
        case fetchVideo:
            return {
                isOpen: true,
                videoid: action.payload
            }
        default: return state;
    }
}

const details_video ={
    video_info: ''

}

export const reducer3 = (state = details_video, action) => {
    switch (action.type) {
        case fetchVideoInfo:
            return {
                video_info: action.payload
            }
        default: return state;
    }
}

