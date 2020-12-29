import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchvideo_action, fetchVideoInfo_action } from '../redux/actions';


export const Result = () => {
    //llamar al estado actual 
    const dispatch = useDispatch();
    const search = useSelector(state => state.buscador.search)
    const showVideo = useSelector(state => state.video)
    const info = useSelector(state => state.videoInfo)
    return (
        //> hijo
        <div>
            <h3 className="text white">Recomendados o encontrados</h3>
            {
                search.length >= 1 &&
                <div>
                    {
                        search[0].items.map(item => (
                            <img className='gallery-thumbnail' src={item.snippet.thumbnails.medium.url}
                                key={item}
                                onClick={
                                    () => {
                                        dispatch(fetchvideo_action(item.id.videoId));
                                        dispatch(fetchVideoInfo_action(item.snippet))
                                    }
                                }
                            />

                        ))
                    }
                </div>
            }
            {
                showVideo.isOpen == true &&
                <div className='row'>
                    <div className='column'>
                        <ReactPlayer
                            url={`http://www.youtube.com/watch?v=${showVideo.videoid}`}
                            width='100%'
                            height='100%'
                            controls
                        />
                    </div>
                    <div className='column'>
                        <h2>{info.video_info.title}</h2>
                        <p>{info.video_info.description}</p>
                    </div>
                </div>
            }
            <span className="text-danger">Error</span>
        </div>
    );

};