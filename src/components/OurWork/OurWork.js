import WebDev from "./WebDev";
import WebDesign from "./WebDesign";
import Production from "./Production";
import './_ourwork.scss';

function OurWork() {
    return (
        <section>
            <div className="work_slides_controller">
                <ul>
                    <li>Design</li>
                    <li>Development</li>
                    <li>Production</li>
                </ul>
                <div>&nbsp;</div>
            </div>
            <div className="work_slides_container">
                <div className="work_slide" id="s-webdev"><WebDev /></div>
                <div className="work_slide" id="s-webdesign"><WebDesign /></div>
                <div className="work_slide" id="s-production"><Production /></div>
            </div>
        </section>
    );
}

export default OurWork;