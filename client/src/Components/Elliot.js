import NavBar from './NavBar';

export default function ({ user, onLogin }) {

    return (
        <>
        <NavBar user={user} onLogin={onLogin} />
            <h1>Elliot's Stuff Goes Here</h1>
        </>
    )

}