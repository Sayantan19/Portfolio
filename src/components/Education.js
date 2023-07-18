import React from 'react';
import './Education.css';
export default function Education() {
    function reveal2() {
        var reveals = document.querySelectorAll(".reveal2");
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

    window.addEventListener("scroll", reveal2);
    return (
        <>
            <section id="edex">
                <div>
                    <div className="row  mx-0 px-0" id="experience">
                        <div className="col-sm-6 py-4 d-flex justify-content-center bg-black" style={{ paddingLeft: "75px", paddingRight: "25px" }}>
                            <div className="reveal2">
                                <h2 className="text-center text-light text-uppercase heading text">Professional Experience</h2>
                                <ol className='text-light container p-6 mx-2 justify-content-center'>
                                    <li>
                                        <h4 className="px-2 pt-3 fw-bold">Product Engineer Intern - whitecarrot.io</h4>
                                        <ul className='ps-md-5'>
                                            <li className='ps-2'>June 2023 - Present</li>
                                            <li className='ps-2'>Collaborating on the development of an innovative product at Whitecarrot.io, with a focus on creating a
                                                seamless user experience for recruiters and candidates.</li>
                                            <li className='ps-2'>Engaged in end-to-end design, development, and optimization of an original product, utilizing cutting-edge technologies and industry best practices, to deliver a robust and scalable solution that enhances
                                                the user experience</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4 className="px-2 pt-3 fw-bold">Frontend Lead - Microsoft Student Learn Community BSIOTR</h4>
                                        <ul className='ps-md-5'>
                                            <li className='ps-2'>February 2023 - March 2023</li>
                                            <li className='ps-2'>Volunteered to build the official website of MLSC-BSIOTR, a coders' community backed by Microsoft</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-sm-6 py-4 d-flex justify-content-center">
                            <div className="reveal">
                                <h2 className="text-center text-md-center text-uppercase heading text">Other Experiences</h2>
                                <ol className='text-dark container p-6 mx-2 justify-content-center'>
                                    <li>
                                        <h4 className="px-2 pt-3 fw-bold">Research Intern at Indian Council for Social Sciences and Research</h4>
                                        <ul className='ps-md-5'>
                                            <li className='ps-2'>August 2022 - January 2023</li>
                                            <li className='ps-2'>Worked as a Data Analyst for the project - 'Environmental Sustainability of the State of Sikkim'.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4 className="px-2 pt-3 fw-bold">Co-Ordinator at Tech Quiz, Technovation 2022</h4>
                                        <ul className='ps-md-5'>
                                            <li className='ps-2'>August 2022 - September 2022</li>
                                            <li className='ps-2'>Lead a team of batchmates to conduct the quiz event of our departmental technical fest.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid py-4" id="education">
                        <div className="reveal3">
                            <h2 className="text-center text-uppercase heading py-2">Academic Background</h2>
                            <div className='py-6 mx-2 row'>
                                <div className='col mx-4'>
                                    <h4 className="pt-3 fw-bold">Heritage Institute of Technology, Kolkata</h4>
                                    <ul className='ps-md-4'>
                                        <li className='ps-2'>B. Tech in Computer Science and Business Systems </li>
                                        <li className='ps-2'><b>CGPA - 9.25</b> (Till 6th Semester)</li>
                                    </ul>
                                </div>
                                <div className='col mx-4'>
                                    <h4 className="pt-3 fw-bold">St. Xavier's Collegiate School, Kolkata</h4>
                                    <ul className='ps-md-4'>
                                        <li className='ps-2'>I.S.C. - Science (2020)</li>
                                        <li className='ps-2'>Percentage obtained - <b>89.1%</b></li>
                                    </ul>
                                </div>
                                <div className='col mx-4'>
                                    <h4 className="pt-3 fw-bold">St. Xavier's Collegiate School, Kolkata</h4>
                                    <ul className='ps-md-4'>
                                        <li className='ps-2'>I.C.S.E. (2018)</li>
                                        <li className='ps-2'>Percentage obtained - <b>96.2%</b></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </>
    );
}
