import style from '../../StyleSheets/Elliot/Elliot.module.css'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

export default function ElliotProject ({ p }) {
    const [ go , setGo ] = useState(false);
    const [ animatingOut , setAnimatingOut ] = useState(false);

    function visitPage () {
        setAnimatingOut(true);
        setTimeout(() => {
            setGo(true)
        }, 1000);
    }

    return (
        <>
            <h1 onClick={() => visitPage()} className={ (!animatingOut ? style.project_title : `${style.project_title} ${style.swing_away}` )}>{p.title}</h1>
            <p>{p.description}</p>
            { go ?
                <Navigate to={`/${p.route}`} />
            : null}
        </>
    )
}