import './CPElement.css';

function CPElement({element = undefined, content = undefined}) {
    let returnElement;
    switch (element) {
        case 'mylessons':
            returnElement = (
                <div className='element-card'>
                    <h1 id='element-title'>{content.name}</h1>
                    <div className='ect-underline'></div>
                    <p id='element-details'>{content.description}</p>
                    <a href='#' id='ec-button'>Join</a>
                    {content.isLive && (
                        <>
                            <div className='indicator'></div>
                            <span className='tooltip'>Live Now</span>
                        </>
                    )}
                </div>
            )
            break;
        case 'mytutes':
            let tempReturnElement;
            if (content.ordered && content.available) {
                tempReturnElement = (
                    <>
                        <p style={{color: '#0f0', fontFamily: 'Fredoka'}}>Ordered</p>
                        <a href='#' id='ec-button'>The tute is damaged</a>
                    </>
                );
            } else if (!content.ordered && content.released && content.available) {
                tempReturnElement = (
                    <a href='#' id='ec-button'>Order</a>
                );
            } else if (!content.ordered && !content.released && content.available) {
                tempReturnElement = (
                    <a href='#' id='ec-button'>Pre-Order</a>
                );
            } else if (content.ordered && !content.available) {
                tempReturnElement = (
                    <>
                        <p style={{color: '#0f0', fontFamily: 'Fredoka'}}>Ordered</p>
                        <a href='#' id='ec-button-dissable'>The tute is damaged</a>
                    </>
                );
            } else {
                tempReturnElement = (
                    <a id='ec-button-dissable'>Order</a>
                );
            }
            returnElement = (
                <div className='element-card'>
                    <h1 id='element-title'>{content.name}</h1>
                    <div className='ect-underline'></div>
                    <p id='element-details'>{content.description}</p>
                    {tempReturnElement}
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