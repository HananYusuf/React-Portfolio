import React from 'react'
import '../App.css';
import car from "./image/car.png"


function Portfolio() {
    return (
        <>
            <main className="offset-1 col-7 container-fluid bg-light rounded mt-3 mb-5">

                <h1>Portfolio</h1>
                <hr />

                <section className="row row-cols-1 row-cols-md-3">
                    <article className="col mb-4">
                        <div className="card">
                            <img src="https://lh3.googleusercontent.com/ASyn-V87-inWsiIOXLfpwYempIVV9-4pvIwIx6dtlpfmqu_2_Xoa3zG8nyTFTiX9K95Dz747=w640-h400-e365-rj-sc0x00ffffff" className="card-img-top" alt="converted currency!" />
                            <div className="card-body">
                                <h5 className="card-title">Currency Converter</h5>
                                <p className="card-text">Have you ever wanted to convert your currency on the fly? This handy application does that for you and more! Visit it NOW.</p>
                                <a href="https://lisaaaalisa.github.io/project1/" target="_blank" rel="noreferrer">Currency Converter</a><br />
                                <a href="https://github.com/LisaAAAlisa/project1" target="_blank" rel="noreferrer">Link to Repository Information</a>
                            </div>
                        </div>
                    </article>
                    <article className="col mb-4">
                        <div className="card">
                            <img src="https://i.etsystatic.com/15872687/r/il/6d8699/2129233744/il_570xN.2129233744_17yd.jpg" className="card-img-top" alt="Daily Planner" />
                            <div className="card-body">
                                <h5 className="card-title">Daily Planner</h5>
                                <p className="card-text">Your day to day organizational problems resolved with one click of a button. Join the thousands that organize their calendars with this daily planner!</p>
                                <a href="https://hananyusuf.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer">Daily Planner</a><br />
                                <a href="https://github.com/HananYusuf/Work-Day-Scheduler/" target="_blank" rel="noreferrer">Link to Repository Information</a>
                            </div>
                        </div>
                    </article>
                    <article className="col mb-4">
                        <div className="card">
                            <img src="https://www.telegraph.co.uk/content/dam/business/spark/Allianz/digital-padlock.jpg?imwidth=450" className="card-img-top" alt="Digital Padlock!" />
                            <div className="card-body">
                                <h5 className="card-title">Password Generator</h5>
                                <p className="card-text">Coming up with a strong password is such a drag. Use this tool to let me do it for you!</p>
                                <a href="https://hananyusuf.github.io/demo-password-generator/" target="_blank" rel="noreferrer">Password Generator</a><br />
                                <a href="https://github.com/HananYusuf/demo-password-generator/" target="_blank" rel="noreferrer">Link to Repository Information</a>
                            </div>
                        </div>
                    </article>
                    <article className="col mb-4">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1591907383498-1f0a836e5b71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" className="card-img-top" alt="burger" />
                            <div className="card-body">
                                <h5 className="card-title">Burger</h5>
                                <p className="card-text">This is a full stack application that follows the MVC design pattern.</p>
                                <a href="https://safe-beach-77092.herokuapp.com/" target="_blank" rel="noreferrer">Full stack app</a><br />
                                <a href="https://github.com/HananYusuf/Burger" target="_blank" rel="noreferrer">Link to Repository Information</a>
                            </div>
                        </div>
                    </article>
                    <article className="col mb-4">
                        <div className="card">
                            <img src={car} className="card-img-top" alt="car" />
                            <div className="card-body">
                                <h5 className="card-title">Asset Tracker</h5>
                                <p className="card-text">This is an application that tracks your asset. i.e Vehicles in addition it shows you
                                desscription of all assets.
                        </p>
                                <a href="https://arcane-basin-49331.herokuapp.com/" target="_blank" rel="noreferrer">Full stack app</a>
                                <a href="https://github.com/HananYusuf/Projectect2" target="_blank" rel="noreferrer">Link to Repository Information</a>
                            </div>
                        </div>
                    </article>

                </section>

            </main>
        </>
    );
}

export default Portfolio;