import WebDev from "./WebDev";
import WebDesign from "./WebDesign";
import Production from "./Production";
import './_ourwork.scss';
import { useState } from 'react';

function OurWork() {
    const [isvisible, setVisible] = useState('false');

    const design = document.getElementById('webdesign');
    const dev = document.getElementById('webdev');
    const prod = document.getElementById('production');

    return (
        <section className="our-work-section">
            <div className="work_slides_controller">
                <ul>
                    <li onClick={ () => {} }>Design</li>
                    <li onClick={ () => {} }>Development</li>
                    <li onClick={ () => {} }>Production</li>
                </ul>
                <div>&nbsp;</div>
            </div>
            <div className="work_slides_container">
                <div className="work_slide" data-visible={isvisible} id="webdev"><WebDev /></div>
                <div className="work_slide" data-visible={isvisible} id="webdesign"><WebDesign /></div>
                <div className="work_slide" data-visible={isvisible} id="production"><Production /></div>
            </div>
        </section>
    );
}

export default OurWork;