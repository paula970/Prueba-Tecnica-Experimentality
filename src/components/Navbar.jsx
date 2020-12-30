import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../redux/actions';

export const Navbar = () => {
    // invoke dispatch
    const dispatch = useDispatch();
    const [video_name, set_video_name] = useState("");

    return (
        // make the nabvar that contains the search bar, the search button, the logo and the name of the company
        <div className="header">
            <div className="logo">
                <img src="https://www.experimentality.co/wp-content/uploads/2017/04/experimentalitycerebro_negativo.png" className="logo_img" />
                <span className="logo_name">
                    Experimentality
                </span>
            </div>
            <div className="search">
                <button className="search_btn" onClick={
                    () => {
                        dispatch(fetchSearch(video_name))
                    }
                }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </div>
            <input type="text" className="_input" value={video_name}
                onChange={(event) => {
                    set_video_name(event.target.value)
                }}
            />
        </div>
    );
} 