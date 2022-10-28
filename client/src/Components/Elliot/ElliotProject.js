import style from '../../StyleSheets/Elliot/Elliot.module.css'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

export default function ElliotProject ({ p, isClicked, setIsClicked, selectedProject, setSelectedProject }) {
    const [ go , setGo ] = useState(false);

    function animateAndNavigate () {
        setSelectedProject(p.title);
        setIsClicked(true);
        setTimeout(() => {
            setGo(true)
        }, 1000);
    }

    return (
        <>
            { go ?
                <Navigate to={`/${p.route}`} />
            : null}

            { selectedProject === ""
            ?
            <h1 onClick={() => animateAndNavigate()} className={`${style.project_title_basic} ` + (isClicked && (p.title !== selectedProject) ? `${style.project_title} ${style.swing_away}` : style.project_title )}>{p.title}</h1>
            :
            <h1 onClick={() => animateAndNavigate()} className={`${style.project_title_basic} ` + (isClicked && (p.title !== selectedProject) ? `${style.project_title} ${style.swing_away}` : style.project_title_stabilized )}>{p.title}</h1>
            }

        </>
    )
}