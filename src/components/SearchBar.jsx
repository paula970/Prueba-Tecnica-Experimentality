import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../redux/actions';

export const SearchBar = () => {
    //invocar el dispatch
    const dispatch = useDispatch();
    const [video_name, set_video_name] = useState("");
     

    return(
        <div className="form group">
            <label htmlFor="buscar_video" className="txt-white">Buscar vídeo</label>
            <input type="text" className="form-control" id="buscar_video" value={video_name}
            onChange={(event) => {
                set_video_name(event.target.value)
            }}
            
            />
            <button className="btn btn-primary mt-3" onClick={
                () => {
                    dispatch(fetchSearch(video_name))
                }
            }>Buscar</button>
            
        </div>
    );
} 