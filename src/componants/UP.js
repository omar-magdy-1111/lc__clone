import React, { useState } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs'
export const GoUP = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
};
function UP() {
    const [ Visible, setVisible ] = useState(0);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        }
        else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const handelScrol = () => {
        window.scrollTo({
            top: 0, 
            left: 0, 
            behavior: 'smooth',
            });
    }
    window.addEventListener('scroll', toggleVisible);

    return (
        < BsArrowUpCircleFill className='iconUP' onClick={ handelScrol } style={ { display: Visible ? 'block' : 'none'}} />
  )
}

export default UP;