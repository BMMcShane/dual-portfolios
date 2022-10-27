import style from '../../StyleSheets/Elliot/Elliot.module.css'

export default function ElliotProject ({ p }) {

    return (
        <>
            <h1 className={style.project_title}>{p.title}</h1>
        </>
    )
}