import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';


export const Result = () => {
    //llamar al estado actual 
    const search = useSelector(state => state.search)


    const imageClick = (valor) => {
            <div className="App">
                <ReactPlayer
                    url={`http://www.youtube.com/watch?v=${valor.id.videoId}`}
                    width='100%'
                    height='100%'
                    controls
                />
            </div>
    }
    return (
        //> hijo
        <div>
            <h3 className="text white">Resultado: </h3>
            {
                search.length >= 1 &&
                <div className='text-success'>
                    {
                        search[0].items.map(item => (
                            <img src={item.snippet.thumbnails.default.url} onClick={() => imageClick(item)}

                            />
                        ))
                    }
                </div>
            }
            <span className="text-danger">Error</span>
        </div>
    );

}