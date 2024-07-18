import React from 'react';
import './ContentPanel.css';
import CPElement from './contentPanelElements/CPElement';

function ContentHolder({type = null, title = 'NULL', content = undefined}) {
    return(
        <>
        <h1 className="cpb-title">{title}</h1>
        <main className='content-holder'>
            {content.map((item, index) => (<CPElement key={index} element={type} title={item[0]} details={item[1]} live={item[2]} />))}
        </main>
        </>
    );
}

export default ContentHolder;