import NavBar from './NavBar';

export default function ({ database, user, onLogin }) {

    console.log(database)

    return (
        <>
        <NavBar user={user} onLogin={onLogin} />
            <h1>Ben's Stuff Goes Here</h1>
        </>
    )

}