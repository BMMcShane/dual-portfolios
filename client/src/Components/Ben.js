import style from "../StyleSheets/Ben/Ben.module.css";
import banner from "../StyleSheets/Ben/Assets/tech.jpg";
import { NavLink } from "react-router-dom";
import ttest from "../StyleSheets/Ben/Assets/ttest.png";
import npcgen from "../StyleSheets/Ben/Assets/npcgen.png";
import mew from "../StyleSheets/Ben/Assets/mew.png";
import profl from "../StyleSheets/Ben/Assets/profl.png";


export default function ({ database, user, onLogin }) {

    console.log(database)

    return (
        <>
            <div id={style.ben_page}>

                <div id={style.portrait_total}>
                    <div id={style.portrait_container}>
                    <div id={style.orb}>
                        <img id={style.me} alt="Portrait" src="https://mewmewmill.s3.us-west-2.amazonaws.com/Me2.jpg" />
                    </div>
                    <h1 id={style.myname}>Benjamin McShane
                    {/* <img id={style.banner} alt="Banner" src={banner} /> */}
                    </h1>
                    </div>
                </div>

                <div id={style.bigboy}>

                <div id={style.myinfo}>
                    <h2> About </h2>
                    <p> In short: I am a junior full-stack software engineer skilled in JavaScript Programming and Ruby on Rails. My programming passion is in creating aesthetically pleasing and easy-to-use User Interfaces. I love tabletop RPGs, the outdoors, and trying new things. I am ready and excited to start my professional career! </p>
                    <p> 
                        In less succint terms, I am a 21 year old Missouri native who has always had a massive passion for tech. Growing up, I found myself constantly in the role of I.T. support for my friends and family, I was taught how to read using an MMO Game, and recently I've gotten into PC building.
                        I graduated from highschool in 2019, after which I decided to take a short gap year to spend some time working at a real job. Unfortunately, the end of that gap year was punctuated by the start of a global pandemic, which caused most jobs and schools to either shutdown, or go online only.
                        Dismayed by the reports of sub-standard online college classes, I instead decided to pursue another path. Thanks to the Flatiron school software engineering program, I've rapidly familiarized myself with skills to not only program code, but how to teach myself how to do so.
                        I'm excited about this new era of my life, and I am genuinely looking forward to doing some of that good old fashioned honest hard work.
                    </p>
                    <h2> Skills </h2>
                    <p> My technical skills include JavaScript, HTML, CSS, React, Ruby on Rails, SQL, Tailwind, and more. I'm always working to expand my skill set by learning more about these tools, as well as by familiarizing myself with even more tech languages.  </p>
                    <p> On an interpersonal level, I'm an easy-going dependable worker who is always ready to drop everything to help someone out. I'm really adaptable, a quick learner, and I work really well under pressure. I'm comfortable working as part of team, but I'm also more than capable of stepping up when leadership is needed. As a perfectionist in recovery, I'm always ready to work harder on any project, but also understand how not to get hung up on the little things. </p>
                   <h2> More </h2>
                   <p> Coming Soon! </p>
                </div>

                <br/>

                <div id={style.myprojects}>
                    <h2> My Projects </h2>
                    <hr/>
                    <br/>
                    <div className={style.projectblock}>
                        <img alt="toad test" src={ttest}/>
                        <div>
                            <h2> {database[1].projects[1].title} </h2>
                            <h4>Made using JavaScript, HTML, CSS, React</h4>
                            <h3>Summary:</h3>
                            <p> An inexplicably Mario themed custom quiz generator with a global leaderboard. This site utilizes a public API to generate trivia questions based on category and difficulty, and then scores the quiz based on difficulty before adding it to the leaderboard. It was created by myself, and my two partners in four days.</p>
                            <p> If I ever come back to this project, I would like to add an individual score page which would allow you to see the correct answers to each question. Currently, the answer list exists, all this would require would be to add an additional component and to change some of the routing.</p>
                            <a href="https://silly-clafoutis-44b907.netlify.app/">Link</a>
                            <h3> Recieved a Best Project Award. </h3>
                        </div>

                    </div>
                    <br/>
                    <div className={style.projectblock}>
                    <img alt="npc gen" src={npcgen} />
                    <div>
                        <h2> {database[1].projects[0].title} </h2>
                        <h4>Made using JavaScript, CSS, HTML</h4>
                        <h3>Summary:</h3>
                        <p> NPC Generator was my first ever attempt at creating a real JS app. The goal of the app was to generate fantasy side characters at the push of the button. You could then save and reload these characters at will. Despite its clearly amateur css and html, I am very proud of it. </p>
                        <p> I did this project before I learned anything about backend, so it isn't particularly useful outside of on the spot character generation. Currently I'm working on recreating this entire project to include an entirely custom backend, allowing for account creation, persistent character saving, NPC editing, and more. I also intend to expand the depth of generated characters, as well as add in the functionality to generate towns full of npcs. </p>
                        <h4>Link Coming Soon!</h4>
                    </div>
                    </div>
                    <br/>
                    <div className={style.projectblock}>
                    <img alt="mew mill" src={mew} />
                    <div>
                        <h2> {database[1].projects[2].title} </h2>
                        <h4>Made using JavaScript, CSS, HTML, Ruby, Tailwind</h4>
                        <h3>Summary:</h3>
                        <p> MewMew Mill was designed to be a simple web based farming game drawing inspiration from Tamogachis and Clicker games. Outside of the background, it utilizes entirely custom graphics, including a number of hand made gifs.</p>
                        <p> MewMew Mill was my first ever foray into real backend design. Unfortunately, it didn't go particularly well. The game is technically funcational in all ways except the core aspect of actually <em>growing plants</em>. These flaws can largely be attributed to the fact that we had a poor unified design concept, which caused an avalanche of problems. Additionally, my partners and I tried to go beyond the project deliverables by a wide margin, which led to us being very short on time. As it stands, MewMew Mill might be nice to look at, but it doesn't function properly. I fully understand what changes would be needed to add actual funcationality to the project, I've just yet to fix it due to how tedious those changes would be.  </p>
                        <h4> Link TBD!</h4>
                        <h3> Recieved an award for Best CSS Design. </h3>
                    </div>
                    </div>
                    <br/>
                    <div className={style.projectblock}>
                    <img alt="profl" src={profl} />
                    <div>
                        <h2> {database[1].projects[3].title} </h2>
                        <h4>Made using JavaScript, CSS, HTML, React, Ruby on Rails</h4>
                        <h3> Summary:</h3>
                        <p> This project was designed to host professional protfolios for coders. ProFOL.io is the very website you are currently looking at, or atleast it was. In anticipation of the marathon that would be our Flatiron final project, my partner and I decided to take it easy and that we would use this project as a jumpstart to creating our professional images.</p>
                    </div>
                    </div>
                    <br/>
                </div>

                <br/>

                <div id={style.mylinks}>
                    <h2>Links:</h2>
                    <div id={style.linktable}>
                        <div>
                            <a href="https://github.com/BMMcShane"> Github</a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/benjamin-mcshane/"> Linkedin </a>
                        </div>
                        <div>
                            <a href="https://dev.to/bmmcshane"> Blog </a>
                        </div>
                    </div>
                    <div id={style.linktable}>
                        <h4> benjaminmartinmc@gmail.com </h4>
                        <h4> 417-414-4300</h4>
                        <br/>
                    </div>
                </div>

                <br/>
                <br/>

                <div id={style.return}>
                <NavLink to="/">
                    <button > 
                       Return to Homepage
                    </button>
                </NavLink>
                </div>

                </div>

                <br/>

            </div>

        </>
    )

}