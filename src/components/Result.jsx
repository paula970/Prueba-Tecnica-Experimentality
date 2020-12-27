import React from 'react';
import { useSelector } from 'react-redux';

export const Result = () => {
    //llamar al estado actual 
    const search = useSelector(state => state.search);
    return(
        //> hijo
        <div>
            <h3 className="text white">Resultado: </h3>
           
            <div className="text-success">
                <span>pikachu</span>
            </div>
            <span className="text-danger">Error</span>
        </div>
    );
} 