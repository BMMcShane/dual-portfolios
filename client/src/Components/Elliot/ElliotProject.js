import style from '../../StyleSheets/Elliot/Elliot.module.css'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

export default function ElliotProject ({ p, isClicked, setIsClicked, selectedProject, setSelectedProject }) {
    const [ go , setGo ] = useState(false);
    const [ isLeaving, setIsLeaving ] = useState(false);

    function animate () {
        setSelectedProject(p.title);
        setIsClicked(true);
    }

    function animateAndNavigate() {
        setIsLeaving(true);
        setTimeout(() => {
            setGo(true)
        }, 1500);
    }

    return (
        <>
            { go ?
                <Navigate to={`/${p.route}`} />
            : null}

            {/* LOAD ALL SAME */}
            {selectedProject === "" ?
            <h1 onClick={() => animate()} className={`${style.project_title_basic} ${style.project_title}`}>{p.title}</h1> : null }

            {/* Project w/ matching title stabilizes, others swing away. */}
            { isClicked && !isLeaving ?
            <h1 onClick={() => animateAndNavigate()} className={`${style.project_title_basic} ` + ((p.title !== selectedProject) ? `${style.project_title} ${style.swing_away}` : style.project_title_stabilized )}>{p.title}</h1> : null}
            
            {/* Project with matching title gets final swing, others become hidden. */}
            { isLeaving ?
            <h1 onClick={() => animateAndNavigate()} className={`${style.project_title_basic} ` + ((p.title !== selectedProject) ? `${style.hidden}` : `${style.project_title} ${style.final_swing}` )}>{p.title}</h1> : null}



        </>
    )
}