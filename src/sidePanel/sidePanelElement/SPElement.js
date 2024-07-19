import './SPElement.css'
import { useSelection } from '../SelectionContext';

function SPElement({id = "", url = '#', status = undefined, imgURL, text = 'undefined'}) {
    const { spes, ChangeSelection } = useSelection();
    const handleClick = () => { ChangeSelection(id) };
    return(
        <a href='#' className="side-panel-element" id={status} onClick={handleClick}>
            <div id="spe-icon">
                <img src={imgURL} alt="logo" />
            </div>
        <p id="spe-text">{text}</p>
        </a>
    );
}

export default SPElement;