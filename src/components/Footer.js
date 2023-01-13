import React from 'react';
import './Footer.css'
export default function Footer() {
    return (
        <section>
            <footer class="text-center bg-black">
                <div class="container text-white py-4 py-lg-5">
                    <p class="text-muted mb-0">Copyright © {new Date().getFullYear()} Sayantan Bose</p>
                </div>
            <a className='btn btn-outline-light mb-4' role="button" id="button1" href="/#bgcomp">Back to top</a>
            </footer>
        </section>
    );
}
