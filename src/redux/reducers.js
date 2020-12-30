import { fetchSearchRequest, fetchSearchSuccess, fetchSearchFailure, fetchVideo, fetchVideoInfo } from "./actions";
//Reducers
//current state of the store
const default_state = {
    loading: false,
    search: [],
    error: ''
}

//create the reducers to manage the store

//reducer to search
export const reducer = (state = default_state, action) => {
    //switch to distribute the work, each action has a type.
    switch (action.type) {
        case fetchSearchRequest:
            return {
                ...state, //the ... we return all the previous state and the pertinent modification is made
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

//state
const view_video = {
    isOpen: false,
    videoid: ''
}

//reducer to bring the video id
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

//state
const details_video = {
    video_info: ''

}

//reducer to bring information from the video
export const reducer3 = (state = details_video, action) => {
    switch (action.type) {
        case fetchVideoInfo:
            return {
                video_info: action.payload
            }
        default: return state;
    }
}

