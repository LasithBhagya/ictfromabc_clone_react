import React from 'react';
import './ContentPanel.css';
import CPElement from './contentPanelElements/CPElement';

function ContentHolder({type = null, title = 'NULL', content = undefined}) {
    return(
        <>
        <h1 className="cpb-title">{title}</h1>
        <main className='content-holder'>
            {content.map((item) => (<CPElement key={item.id} element={type} content={item} />))}
        </main>
        </>
    );
}

export default ContentHolder;