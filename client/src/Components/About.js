import NavBar from './NavBar';
import style from '../StyleSheets/About.module.css'

export default function ({ user, onLogin }) {

    return (
        <>
        <NavBar user={user} onLogin={onLogin}/>
        <h1 id={style.about}>About Goes Here</h1>
        <img alt="Bullshit Stock Image" />
        <p className={style.about_bs}>
            <strong>Disney Pixar's The Incredibles</strong>, also known as <strong>ProFOLiO</strong> is a <em>high-level</em> <strong>goal-orriented</strong> platform, created with the express purpose of displaying YOUR content in a meaningful way.
            Here at <strong>TiltIron</strong>, we work hard to make your data work for you in this fast-paced marketplace of ideas. 
            By facilitating fully customizable design and presentation, we create a development environment where the User has all of the power.
            This platform provides so much flexibility to our consumer base, that by the end of profile creation, even the most tech illiterate may begin to feel like master programmers themselves!
            We encourage our clients to think outside the box when creating all of the content for our forward-thinking site!
        </p>
        <img alt="Bullshit Stock Image" />
        <p className={style.about_bs}>
            Thanks to the incredible vision of our founders Elliot Mangini and Benjamin McShane, we are equipped with all of the tools necessary to combat boring interfaces and bad portfolios.
        </p>
        <img alt="Picture of the Founders" />
        <p className={style.about_bs}>
            The hard work of these two visionaries will save YOU from bad portfolios.
        </p>
        <p className={style.about_bs}> 
            Despite the fact that it will likely not be profitable for a decade, this company is valued at one bajillion million dollars and Mark Cuban already owns half of it. Get in fast and you might be able to eat our tablescraps you plebian ****.
        </p>
        <p className={style.about_bs}>
            Haha, whoops! Too late, the stock has already crashed and all of our staff have been layed off. Thank goodness <em>we</em> got off in time! 
        </p>
        </>
    )

}