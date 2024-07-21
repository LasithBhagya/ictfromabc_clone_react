import React from 'react';
import { Link } from 'react-router-dom';
import { useSelection } from '../SelectionContext';
import './SPElement.css'

function SPElement({id = undefined, url = '#', status = undefined, imgURL, text = 'undefined'}) {
    const { ChangeSelection } = useSelection();
    const handleClick = () => { ChangeSelection(id) };
    return(
        <Link to={url} className="side-panel-element" id={status} onClick={handleClick}>
            <div id="spe-icon">
                <img src={imgURL} alt="logo" />
            </div>
        <p id="spe-text">{text}</p>
        </Link>
    );
}

export default SPElement;