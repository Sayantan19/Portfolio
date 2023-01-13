import React from 'react'
import './Contact.css'
export default function Contact() {
    return (
        <>
            <section id="contact">
                <div className="container my-4">
                    <h2 className="text-uppercase heading text">Contact Me</h2>
                    <div className="row">
                        <div className="col">
                            <ul className='list-unstyled'>
                                <li>Email: <a href="mailto:sayantan485@gmail.com"  id="con">sayantan485@gmail.com</a></li>
                                <li>Phone/WhatsApp: <a href="tel:+919477517114"  id="con">9477517114</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className='list-unstyled'>
                                <li>LinkedIn: <a href="https://www.linkedin.com/in/sayantan-bose-860791200/"  id="con">https://www.linkedin.com/in/sayantan-bose-860791200/</a></li>
                                <li>Instagram: <a href="https://www.instagram.com/shaa_yon_ton/"  id="con">https://www.instagram.com/shaa_yon_ton/</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
