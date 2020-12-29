import Axios from "axios";

//crear acción ######################
export const fetchSearchRequest = "FETCHSEARCHREQUEST";  //tipo de acción
export const fetchSearchSuccess = "FETCHSEARCHSUCCESS"
export const fetchSearchFailure = "FETCHSEARCHFAILURE"

export const fetchVideo= "FETCHVIDEO"
export const fetchVideoInfo = "FETCHVIDEOINFO"

//crear acción de tipo buscar petición lo envía al store y se lo pasa al trabajador (reducer)
export const fetchSearchRequest_action = () =>{
    return{
        //retorna el objeto con un tipo
        type:fetchSearchRequest,
    }
}

export const fetchSearchSuccess_action = (search) => {
    return {
        type: fetchSearchSuccess,
        payload: search

    }
}
export const fetchSearchFailure_action = (error) => {
    return {
        type: fetchSearchFailure,
        payload: error

    }
}

export const fetchvideo_action = (videoid ) => {
    return {
        type: fetchVideo,
        payload: videoid,
    }
}

export const fetchVideoInfo_action = (videoInfo ) => {
    return {
        type: fetchVideoInfo,
        payload: videoInfo,
    }
}

export const fetchSearch = (valor) => {
    //retorna una función que devuelve otra función (uso del dispatch)
    //.then porque recibe una promesa y si entra es porque todo esta correcto
    return(dispatch) => {
        dispatch(fetchSearchRequest_action())
        //dirección de la api
        Axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${valor}type=video&key=AIzaSyB2xNFBsSH6exD5TwYeW16Y0b8avsmSEpU`)
        .then(response =>{
            dispatch(fetchSearchSuccess_action([response.data]));//data es la respuesta de la api 
        })
        .catch(error =>{
            dispatch(fetchSearchFailure_action('No se encontró el vídeo'));//en caso de que haya un error
        });
    }
}