import React from 'react'
import '../App.css';


function Contact() {
    return (
        <>
        <main className="offset-1 col-7 container-fluid bg-light rounded mt-3 mb-5"> 
        <h1>Contact</h1>
        <hr/>
    <form className="w-75 p-3">
        <section className="form-group">
            <label htmlFor="exampleInputEmail1">First Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </section>

        <section className="form-group">
            <label htmlFor="exampleInputEmail2">Last Name</label>
            <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
        </section>

        <section className="form-group">
            <label htmlFor="exampleInputPassword1">E-mail</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </section>

        <h2>Message</h2>

            <textarea type='text' name='message' form="contact-form" defaultValue = "Enter Message..."></textarea><br/>
            <button type="submit" className="btn btn-primary">Submit</button><br/>
            
            <p>Follow me on: <a href="https://github.com/HananYusuf">Github</a><br/>
            Find me! <a href="https://www.linkedin.com/in/hanan-yusuf-467a0a1b5/">Linkedin</a></p>
            E-mail<p>afetyusuf.gggnc@gmail.com</p>
            
    
    </form>

    </main>
        </>
    );
}

export default Contact;