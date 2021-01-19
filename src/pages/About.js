import React from 'react'
import '../App.css';


function About() {
    return (
        <>
            <main className="offset-1 col-7 container-fluid border bg-light mt-3 rounded">

                <h1>About Me</h1>
                <hr/>
                    <section className="row">

                        <article className="col-lg-10">
                            <img src=".src/filename.png" hspace='5' className="img-fluid float-md-left rounded" alt="Hanan Yusuf" />
                            <p>My name is Hanan Yusuf and I am a Full-Stack Web Development student at Rice University Coding Boot Camp, currently residing in Houston, Tx.</p>
                            <p>As a beginner developer, I have aquired a basic working knowledge of HTML, CSS, JavaScript and Jquery in my four weeks of the boot camp.</p>
                            <p>Learning and exprementing new technologies motivates me to work hard, move forward to pursue and accomplish my dream of becoming a developer. </p>

                        </article>

                    </section>

            </main>
        </>
    );
}

export default About;