import Axios from "axios";

// create action
export const fetchSearchRequest = "FETCHSEARCHREQUEST";  //type of action
export const fetchSearchSuccess = "FETCHSEARCHSUCCESS"
export const fetchSearchFailure = "FETCHSEARCHFAILURE"
export const fetchVideo = "FETCHVIDEO"
export const fetchVideoInfo = "FETCHVIDEOINFO"

export const fetchSearchRequest_action = () => {
    return {
        //returns the object with a type
        type: fetchSearchRequest,
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

export const fetchvideo_action = (videoid) => {
    return {
        type: fetchVideo,
        payload: videoid,
    }
}

export const fetchVideoInfo_action = (videoInfo) => {
    return {
        type: fetchVideoInfo,
        payload: videoInfo,
    }
}

export const fetchSearch = (value) => {
    return (dispatch) => {
        dispatch(fetchSearchRequest_action())
        //api address
        Axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${value}type=video&key=AIzaSyDp_my6Sq82d4MxDzPBHjeFnSfYQLcmYHU`)
            .then(response => {
                //.then because it receives a promise and if it enters it is because everything is correct
                dispatch(fetchSearchSuccess_action([response.data]));//data is the api response
            })
            .catch(error => {
                dispatch(fetchSearchFailure_action('Video not found'));//in case there is an error
            });
    }
}