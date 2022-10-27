import style from '../../StyleSheets/Elliot/Elliot.module.css'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

export default function ElliotProject ({ p }) {
    const [ go , setGo ] = useState(false);

    return (
        <>
            <h1 onClick={() => setGo(true)} className={style.project_title}>{p.title}</h1>
            { go ?
                <Navigate to={`/${p.route}`} />
            : null}
        </>
    )
}