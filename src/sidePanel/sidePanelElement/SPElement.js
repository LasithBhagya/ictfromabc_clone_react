import './SPElement.css'

function SPElement({url = '#', id = undefined, imgURL, text = 'undefined'}) {
    return(
        <a href={url} className="side-panel-element" id={id}>
            <div id="spe-icon">
                <img src={imgURL} alt="logo" />
            </div>
        <p id="spe-text">{text}</p>
        </a>
    );
}

export default SPElement;