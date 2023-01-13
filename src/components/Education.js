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
            <section className='w-100 d-flex flex-wrap flex-md-nowrap flex-direction-col flex-direction-md-row justify-content-center'>
                <div id="education" className='bg-black p-4'>
                    <div className="container reveal2">
                        <h2 className="text-center text-md-start text-uppercase heading text-light">Academic Background</h2>
                        <ol className='text-dark container p-6 mx-2 justify-content-center'>
                            <li className='text-light'>
                                <h4 className="px-2 pt-3 fw-bold">Heritage Institute of Technology, Kolkata</h4>
                                <ul className='ps-md-5'>
                                    <li className='ps-2'>B. Tech in Computer Science and Business Systems </li>
                                    <li className='ps-2'><b>CGPA - 9.26</b> (Till 4th Semester)</li>
                                </ul>
                            </li>
                            <li className='text-light'>
                                <h4 className="px-2 pt-3 fw-bold">St. Xavier's Collegiate School, Kolkata</h4>
                                <ul className='ps-md-5'>
                                    <li className='ps-2'>I.S.C. - Science (2020)</li>
                                    <li className='ps-2'>Percentage obtained - <b>89.1%</b></li>
                                </ul>
                            </li>
                            <li className='text-light'>
                                <h4 className="px-2 pt-3 fw-bold">St. Xavier's Collegiate School, Kolkata</h4>
                                <ul className='ps-md-5'>
                                    <li className='ps-2'>I.C.S.E. (2018)</li>
                                    <li className='ps-2'>Percentage obtained - <b>96.2%</b></li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
                <div id="experience" className='py-4'>
                    <div className="container reveal">
                        <h2 className="text-center text-md-start text-uppercase heading text">Experience</h2>
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
                            <li>
                                <h4 className="px-2 pt-3 fw-bold">Delegate at Young Leaders' Summit, Vista 2021, IIM Bangalore</h4>
                                <ul className='ps-md-5'>
                                    <li className='ps-2'>August 2021</li>
                                    <li className='ps-2'>Represented my college in this renowned summit to discuss the latest trends in the field of Management</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </>
    );
}
