import style from '../StyleSheets/Elliot/Elliot.module.css'
import soundtrack from '../Assets/soundtrack.wav'
import video from '../Assets/enterbkg.mp4'
import { useState } from 'react';
import ElliotProject from './Elliot/ElliotProject';
import { v4 as uuid } from "uuid";


export default function Elliot ({ database }) {
    const [ isEntered , setIsEntered ] = useState(false)

    function enter() {
        console.log("clicked")
        setIsEntered(true);
        new Audio(soundtrack).play();
    }

    const projects = database[0].projects.map((p) => {
        return (
            <ElliotProject key={uuid()} p={p} />
        )
    })

    return (
        <>
        <div className={style.elliot}>
            
            <div id={style.cover}></div>
            <video id="myVideo" loop autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>


            {/* { !isEntered ? */}
            {/* <li>
                <input type="checkbox" />
                <div className={style.lightup_div} onClick={enter}>E N T E R</div>
            </li> */}
            {/* : null } */}


            {/* { isEntered ? */}
            <div className={style.project_container}>
                {projects}
            </div>
            {/* : null } */}




















        </div>
        </>
    )
}