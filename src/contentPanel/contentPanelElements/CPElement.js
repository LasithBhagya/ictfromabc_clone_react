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
                    <button type='button' id='ec-button'>Join</button>
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
                        <p style={{color: '#0f0', fontFamily: 'Fredoka', fontStyle: 'italic'}}>Ordered</p>
                        <button type='button' id='ec-button'>The tute is damaged</button>
                    </>
                );
            } else if (!content.ordered && content.released && content.available) {
                tempReturnElement = (
                    <button type='button' id='ec-button'>Order</button>
                );
            } else if (!content.ordered && !content.released && content.available) {
                tempReturnElement = (
                    <button type='button' id='ec-button'>Pre-Order</button>
                );
            } else if (content.ordered && !content.available) {
                tempReturnElement = (
                    <>
                        <p style={{color: '#0f0', fontFamily: 'Fredoka', fontStyle:'italic'}}>Ordered</p>
                        <button type='button' id='ec-button-disabled' disabled>The tute is damaged</button>
                    </>
                );
            } else {
                tempReturnElement = (
                    <button type='button' id='ec-button-disabled' disabled>Pre-Order</button>
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