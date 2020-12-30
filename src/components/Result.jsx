import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchvideo_action, fetchVideoInfo_action } from '../redux/actions';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Result = () => {
    const dispatch = useDispatch();
    //llamar al estado actual 
    const search = useSelector(state => state.buscador.search)
    const showVideo = useSelector(state => state.video)
    const info = useSelector(state => state.videoInfo)
    return (
        //> hijo
        <div>
            <h3>Recomendados o encontrados</h3>
            {
                search.length >= 1 &&
                <div>
                    <Carousel
                        arrows={true}
                        responsive={{
                            desktop: {
                                breakpoint: { max: 3000, min: 768 },
                                items: 6,
                            },
                            mobile: {
                                breakpoint: { max: 767, min: 0 },
                                items: 3,
                            },
                        }}>
                        {
                            search[0].items.map(item => {
                                return (
                                    <img className='gallery-thumbnail' src={item.snippet.thumbnails.medium.url}
                                        key={item}
                                        onClick={
                                            () => {
                                                dispatch(fetchvideo_action(item.id.videoId));
                                                dispatch(fetchVideoInfo_action(item.snippet))
                                            }
                                        }
                                    />
                                )
                            }
                            )
                        }
                    </Carousel>
                </div>
            }
            {
                showVideo.isOpen == true &&
                <div class='flex wrap'>
                    <div className='row'>
                        <div className='content_video'>
                            <ReactPlayer
                                url={`http://www.youtube.com/watch?v=${showVideo.videoid}`}
                                width='100%'
                                height='100%'
                                controls
                                className='react_player'
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <h2>{info.video_info.title}</h2>
                        <p>{info.video_info.description}</p>
                    </div>
                </div>
            }
        </div>
    );

};
