
import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchvideo_action } from '../redux/actions';


export const Result = () => {
    //llamar al estado actual 
    const dispatch = useDispatch();
    const search = useSelector(state => state.buscador.search)
    const showVideo = useSelector(state => state.video)


    return (
        //> hijo
        <div>
            <h3 className="text white">Resultado: </h3>
            {
                search.length >= 1 &&
                <div className='text-success'>
                    {
                        search[0].items.map(item => (
                            <img src={item.snippet.thumbnails.default.url}
                                key={item}
                                onClick={
                                    () => {
                                        dispatch(fetchvideo_action(item.id.videoId))
                                    }
                                }

                            />
                        ))
                    }
                </div>
            }
            {
                showVideo.isOpen == true &&
                <div className='text-success'>
                    <ReactPlayer
                        url={`http://www.youtube.com/watch?v=${showVideo.valor1}`}
                        width='100%'
                        height='100%'
                        controls
                    />

                </div>
            }
            <span className="text-danger">Error</span>
        </div>
    );

};