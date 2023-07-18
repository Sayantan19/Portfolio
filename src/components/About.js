import React from 'react';
import profile_image from './media/Profile_image.jpg';
import './About.css';

export default function About() {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
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

    window.addEventListener("scroll", reveal);
    return (
        <>
            <section className="container px-6 py-4 py-xl-5 reveal" id="about">
                <div className="row gy-4 gy-md-0">
                    <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center" >
                        <div>
                            <h2 className="text-uppercase heading">About Me</h2>
                            <p className="my-3" id="abt-txt">I am an aspiring Full-Stack Developer with a keen interest in the latest technological and entrepreneural advancements around the world.<br />Exploring new ideas and coding is my passion and trying to understand people's requirements is my forte!<br />I have experience in C, C++, Java, Python and Javascript and I am interested in exploring the domain of Machine Learning.</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end align-items-center">
                        <div><img className="rounded img-fluid fit-cover profile" src={profile_image} alt="myimage" /></div>
                    </div>
                </div>
            </section>
        </>
    );
}
