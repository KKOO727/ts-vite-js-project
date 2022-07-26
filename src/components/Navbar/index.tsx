import React from 'react';
import "./navbar.scss";

export const Navbar = () => {

    return (
        <div className='navbarContainer'>
            <div className='about-nav-container'>
                <a href="/" className='about-nav-link desktop'>JOSEPH MORRISON</a>
                {/* <div className='aboutcontentcontainter'> */}
                    {/* <div className='div-block-7'>
                        <div className='home-div'>
                            <a href="/" className="home-link-block w-inline-block">
                                <img src="https://uploads-ssl.webflow.com/5ee5ebd7078e642365e12138/5fbd6e4afc94e62b3f493109_sketched-Home-icon.png" loading="lazy" alt="" className="home-icon menu" />
                                <div className="text-block-6">HOME</div>
                                <img src="https://uploads-ssl.webflow.com/5ee5ebd7078e642365e12138/5fc433f0377fbe4a0fca71dd_sketched-home-writing.png" loading="lazy" sizes="(max-width: 479px) 100vw, 70px" alt="" className="home-writing" />
                            </a>
                        </div>
                    </div> */}
                    {/* <div className="contact">
                        <a href="mailto:josephkmmorrison@gmail.com?subject=YO%20JOJO" className="contact-icon email w-inline-block"></a>
                        <a href="https://www.instagram.com/joseph_morrison/" target="_blank" className="contact-icon insta w-inline-block"></a>
                        <a href="https://josephmorrison.darkroom.tech/" className="contact-icon shop w-inline-block"></a>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    );
};