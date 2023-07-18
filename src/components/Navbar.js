import React from 'react';
import './Navbar.css'
import $ from 'jquery'
// import Jumbotron from './Jumbotron';
import bgcomp from './Jumbotron'
export default function Navbar() {
    const bg = $(bgcomp).height();
    console.log(bg)
    window.addEventListener('scroll', function () {
        if (window.scrollY > (bg - 72)) {
            document.getElementById('navbar').classList.add('fixed-top');
            // add padding top to show content behind navbar
            document.body.style.paddingTop = 72 + 'px';
        } else {
            document.getElementById('navbar').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
    return (
        <section id="navbar">
            <nav className="navbar navbar-dark navbar-expand-md py-3 container">
                <a className="d-md-none navbar-brand d-flex text-light align-items-center mx-2" href="/"><span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"></span><span>Menu</span></a>
                <button className="me-2 navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div id="navcol-1" className="collapse navbar-collapse" >
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><a className="nav-link active text-light text-center" href="/">HOME</a></li>
                        <li className="nav-item"><a className="nav-link active text-light text-center" href="#about">ABOUT ME</a></li>
                        <li className="nav-item"><a className="nav-link active text-light text-center" href="/#experience">EXPERIENCE</a></li>
                        <li className="nav-item"><a className="nav-link active text-light text-center" href="/#education">ACADEMIC BACKGROUND</a></li>
                        <li className="nav-item"><a className="nav-link active text-light text-center" href="/#projects">PROJECTS</a></li>
                        <li className="nav-item"><a className="nav-link active text-light text-center" href="/#contact">CONTACT ME</a></li>
                    </ul>
                </div>
            </nav>
        </section>
    );
}
