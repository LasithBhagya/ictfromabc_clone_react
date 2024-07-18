import './CPElement.css';

function CPElement({element = undefined, title = 'null', details = '', live = false}) {
    let returnElement;
    switch (element) {
        case 'mylessons':
            returnElement = (
                <div className='element-card'>
                    <h1 id='element-title'>{title}</h1>
                    <div className='ect-underline'></div>
                    <p id='element-details'>{details}</p>
                    <a href='#' id='ec-button'>Join</a>
                    {live && (
                        <>
                            <div className='indicator'></div>
                            <span className='tooltip'>Live Now</span>
                        </>
                    )}
                </div>
            )
            break;
    
        default:
            console.log('Assign an element type.')
            break;
    }
    return(returnElement);
}

export default CPElement;