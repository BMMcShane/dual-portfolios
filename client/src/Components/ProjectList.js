import ProjectCard from "./ProjectCard";
import { v4 as uuid } from "uuid";
import { useState }  from "react";
import style from "../StyleSheets/ProjectList.module.css";

export default function ProjectList ({ user, setUser }) {
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ timeframe, setTimeframe ] = useState("");
    const [ route, setRoute ] = useState("");
    const [ languages, setLanguages ] = useState("");
    const [ awards, setAwards ] = useState("");
    const [ isAdding, setIsAdding ] = useState(false);

    const projects = user.projects.map((p) => {
        return (
            <>
                <ProjectCard user={user} setUser={setUser} key={uuid()} project={p} />
            <br />
            </>
        )
    })

    function handleAddProject(e) {
        e.preventDefault();
        const newProject = {
            title: title,
            description: description,
            timeframe: timeframe,
            route: route,
            languages: languages,
            awards: awards,
            user_id: user.id,
        };
        fetch("/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProject),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setUser(data)
            setTitle("");
            setDescription("");
            setTimeframe("");
            setRoute("");
            setLanguages("");
            setAwards("");
            setIsAdding(false);
        })
    }

    return (
        <>
        <h1>{user.username}'s projects</h1>
        { user.projects.length == 0 ?
        <h2>No Projects For This User</h2>
        : null }

        {projects}

        <div id={style.add}>
        <h1>Add Projects</h1>
        { !isAdding ?
        <button onClick={() => setIsAdding(true)}>New</button>
        : null }


        { isAdding ?
        <form onSubmit={handleAddProject}>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Project Title"
            />
            <br />
            <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Project Description"
            />
            <br />
            <input
            type="text"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            placeholder="Project Timeframe"
            />
            <br />
            <input
            type="text"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            placeholder="Project Route"
            />
            <br />
            <p>Seperate Awards & Languages using ", "</p>
            <input
            type="text"
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
            placeholder="Project Languages"
            />
            <br />
            <input
            type="text"
            value={awards}
            onChange={(e) => setAwards(e.target.value)}
            placeholder="Project Awards"
            />
            <br />
            <br />
            <button type="submit">Add Project</button>
        </form>
        : null }
        <br />
        <br />
        </div>
        </>
    )
}