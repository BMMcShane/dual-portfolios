import NavBar from './NavBar';

export default function ({ user, onLogin }) {

    return (
        <>
        <NavBar user={user} onLogin={onLogin}/>
        <h1>About Goes Here</h1>
        </>
    )

}