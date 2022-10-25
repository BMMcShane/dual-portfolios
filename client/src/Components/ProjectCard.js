import { useState, useEffect } from "react";

export default function ProjectCard({ project, setUser, user }) {
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [timeframe, setTimeframe] = useState(project.timeframe);
  const [route, setRoute] = useState(project.route);
  const [languages, setLanguages] = useState(parseArray(project.languages));
  const [awards, setAwards] = useState(parseArray(project.awards));
  const [editing, setEditing] = useState(false);

  function parseArray (stringArr) {
    return stringArr.map(({ name }) => `${name}`).join(", ");

  }

  function handleUpdateProject(e) {
    e.preventDefault();

    fetch(`/projects/${project.id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        timeframe: timeframe,
        route: route,
        languages: languages,
        awards: awards,
        user_id: user.id,
      }),
    })
    .then((resp) => resp.json())
    .then((data) => setUser(data))
    setEditing(false);
  }

  function handleDeleteProject(e) {
    e.preventDefault();

    fetch(`/projects/${project.id}/`, { method: "DELETE" } )
    .then(resp => resp.json())
    .then(data => setUser(data))
    setEditing(false);
  }

  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <button onClick={() => setEditing(!editing)}>Edit</button>
      {editing ? (
        <>
        <form onSubmit={(e) => handleUpdateProject(e)}>
          <p>Title</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Project Title"
          />
          <br />
          <p>Description</p>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Project Description"
          />
          <br />
          <p>Timeframe</p>
          <input
            type="text"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            placeholder="Project Timeframe"
          />
          <br />
          <p>Route</p>
          <input
            type="text"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            placeholder="Project Route"
          />
          <br />
          <p>Seperate Awards & Languages using ", "</p>
          <p>Awards</p>
          <input
            type="text"
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
            placeholder="Project Languages"
          />
          <br />
          <p>Languages</p>
          <input
            type="text"
            value={awards}
            onChange={(e) => setAwards(e.target.value)}
            placeholder="Project Awards"
          />
          <br />
          <br />
          <button type="submit">Confirm Changes</button>
        </form>
        <br />
        <button onClick={(e) => (handleDeleteProject(e))}>Delete Project</button>
        </>
      ) : null}
    </>
  );
}
