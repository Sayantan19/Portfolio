import React from 'react';
import './Projects.css';
import prj1 from './media/Proj 1.png'
import prj2 from './media/Proj 2.png'

export default function Projects() {
    function reveal3() {
        var reveals = document.querySelectorAll(".reveal3");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    window.addEventListener("scroll", reveal3);
    return (
        <section id="projects" className="bg-black py-4 py-xl-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="reveal3 col-md-8 col-xl-6 text-center text-light mx-auto">
                        <h2 className="text-center text-uppercase heading text">Projects Undertaken</h2>
                        <p className="w-lg-50">Shown below are some of the Web Development, Web Application and basic level projects that I have undertaken till now. Give it a look!</p>
                    </div>
                </div>
                <div className="text-light row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-2">
                    <div className="col reveal reveal-md">
                        <div><img className="rounded img-fluid d-block w-100 h-25 fit-cover" id="pic" src={prj1} alt="Bosean Interio" />
                            <div className="py-4">
                                <h4 className='text-center'>Bosean Interio</h4>
                                <p>This is a website which I built for my parents' business.</p>
                                <div className="container">
                                    <ul>
                                        <li>Frameworks used: React.js (Frontend), Express.js, Node.js (Backend)</li>
                                        <li>Database used: MongoDB</li>
                                        <li>Website Link: <a target="_blank" href="https://boseaninterio.azurewebsites.net/" id="link" rel='noreferrer'>https://boseaninterio.azurewebsites.net/</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col reveal2">
                        <div><img className="rounded img-fluid d-block w-100 h-25 fit-cover" id="pic" src={prj2} alt="Quiz Page" />
                            <div className="py-4">
                                <h4 className='text-center'>Quiz Web Application</h4>
                                <p>This is a quiz web application which runs on a LAN network.</p>
                                <div className="container">
                                    <ul>
                                        <li>Frameworks used: React.js (Frontend), Express.js, Node.js (Backend)</li>
                                        <li>Database used: MongoDB</li>
                                        <li>Github Repo Link: <a target="_blank" href="https://github.com/Sayantan19/Quiz-MERN" id="link" rel='noreferrer'>https://github.com/Sayantan19/Quiz-MERN</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
