import React, { useState } from 'react';
import '../../../styleSheet/Home_CSS/Footer.css';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { LuLampCeiling } from 'react-icons/lu';
import { SiGmail } from 'react-icons/si';
function Footer() {
    const [ color, setcolor ] = useState();
    const [ turn, setturn ] = useState(false);
    const bgColors = {
        "true": "#fcfcfc",
        "false": "#112ee8"
    };
    const handelLight = () => {
    
    if (turn) {
        setcolor({ backgroundColor: bgColors[ "true" ] });
        }
    else {
        setcolor({ backgroundColor: bgColors[ "false" ] });
        }
        setturn(!turn)
    }
    


    return (
        <div className='footer-clean'>
            <footer>
                <div className="container">
                    <div className="row justify-content-center">
                        <div onClick={ handelLight } className='laight'>{ <LuLampCeiling /> }
                            <span style={ color } className='lamp'></span>
                        </div>
                        <div className='col-sm-12 item mt-5'>
                            <h1 className='vision p-0 font '>lC Waikiki</h1>
                            <p className='vision'>evry One deserve to dress well</p>

                        </div>

                        <div className="col-sm-4 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="/#">Web design</a></li>
                                <li><a href="/#">Development</a></li>
                                <li><a href="/#">Hosting</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="/#">Company</a></li>
                                <li><a href="/#">Team</a></li>
                                <li><a href="/#">Legacy</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 item">
                            <h3>Careers</h3>
                            <ul>
                                <li><a href="/#">Job openings</a></li>
                                <li><a href="/#">Employee success</a></li>
                                <li><a href="/#">Benefits</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 item social">
                            <div className="col-lg-3 item social">
                                <a href="/#">{ <BsFacebook /> }</a>
                                <a href="/#">{ <BsInstagram /> }</a>
                                <a href="/#">{ <BsTwitter /> }</a>
                                <a href="/#">{ <SiGmail /> }</a>
                                <p className="copyright">Omar Magdy © 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;