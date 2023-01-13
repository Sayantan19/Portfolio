import React from 'react';
import video from '../components/media/bg.mp4';
import './Jumbotron.css';


export default function Jumbotron() {
    return (
        <section id="bgcomp">
            <video src={video} id="vid" autoPlay loop muted />
            <div className="container" id="bgcomp2">
                <h2 id="line1">Hi there! I am <span id="Name">Sayantan Bose</span>.</h2>
                <h1 id="line2">I am a Full Stack Developer.</h1>
                <a className="btn btn-outline-light btn-lg me-2" role="button" id="button1" href="#projects">Check out my work</a>
                {/* <a className="btn btn-outline-primary btn-lg" role="button" href="/">Button</a> */}
            </div>
        </section>
    );
}
