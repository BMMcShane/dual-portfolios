import style from '../../StyleSheets/Elliot/Elliot.module.css'

export default function ElliotProject ({ p }) {

    return (
        <>
            <div className={style.swing_container}>
            <h1 className={style.project_title}>{p.title}</h1>
            </div>
        </>
    )
}