import NavBar from './NavBar';

export default function ({ user, onLogin }) {

    return (
        <>
        <NavBar user={user} onLogin={onLogin} />
            <h1>Ben's Stuff Goes Here</h1>
        </>
    )

}