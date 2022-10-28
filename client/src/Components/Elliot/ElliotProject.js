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
        }, 800);
    }

    const languages = p.languages.map((l) =>{
        return (
            <p key={l.id} className={style.language_p}>&nbsp;&nbsp; . . . {l.name}</p>
            
        )
    })

    console.log(languages)

    return (
        <>
            { go ?
                <Navigate to={`/${p.route}`} />
            : null}

            <div className={style.project_text_container}>
            {/* LOAD ALL SAME */}
            {selectedProject === "" ?
            <h1 onClick={() => animate()} className={`${style.project_title_basic} ${style.project_title}`}>{p.title}</h1> : null }

            {/* Project w/ matching title stabilizes, others swing away. */}
            { isClicked && !isLeaving ?
            <h1 onClick={() => animateAndNavigate()} className={`${style.project_title_basic} ` + ((p.title !== selectedProject) ? `${style.project_title} ${style.swing_away}` : style.project_title_stabilized )}>{p.title}</h1> : null }

            {/* RENDER DETAILS */}
            { isClicked && !isLeaving && p.title === selectedProject ?

            <div className={style.project_details}>
                <h1 className={style.tagline}>{p.description} . . .&nbsp;&nbsp;</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at facilisis risus. Curabitur ut nisl dui. Quisque sodales mauris ut lacinia mollis. Donec tortor leo, ultricies et lectus sed, efficitur luctus neque. Integer quis augue nunc. Proin facilisis tempor nulla vel mollis. Proin luctus, mauris non rutrum mattis, orci nunc lacinia est, vitae tristique erat mi id leo. In vitae semper sem.</p>
                <h2 className={style.timeframe}>{p.timeframe} •</h2>
                <div className={style.inline_block_p}>
                {languages}
                </div>
            </div>

            : null }
            
            {/* Project with matching title gets final swing, others become hidden. */}
            { isLeaving ?
            <h1 onClick={() => animateAndNavigate()} className={`${style.project_title_basic} ` + ((p.title !== selectedProject) ? `${style.hidden}` : `${style.project_title} ${style.final_swing}` )}>{p.title}</h1> : null }

            </div>  
            
            {/* REDIRECT ANIMATION */}
            { isLeaving ?
            <div class={style.expanding_circle}></div> : null }
        </>
    )
}