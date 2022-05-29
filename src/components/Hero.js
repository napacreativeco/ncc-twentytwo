import '../styles/_hero.scss';
import Star from '../icons/star-icon.svg';

function Hero() {
    return (
        <section className="hero">
            {/* TOP */}
            <div className="hero_top">
                <div className="top_row">
                    <img src={Star} alt="" id="left-top" />
                    <img src={Star} alt="" id="left-bottom" />
                    <h1>Fast Websites with Modern designs that work well on any device</h1>
                    <img src={Star} alt="" id="center-bottom" />
                    <img src={Star} alt="" id="right-bottom" />
                    <img src={Star} alt="" id="right-top" />
                </div>
            </div>

            {/* BOTTOM */}
            <div className="hero_bottom">
                <div className="bottom_row">

                    <div className="cell">
                        <div className="inner">
                            <div className="icon"><div className="temp-square">&nbsp;</div></div>
                            <div className="text">
                                <p>We build on WordPress, Shopify, Squarespace, and SanityCMS.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="inner">
                            <div className="icon"><div className="temp-square">&nbsp;</div></div>
                            <div className="text">
                                <p>Mobile-first design, and fully Responsive to screen size.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="inner">
                            <div className="icon"><div className="temp-square">&nbsp;</div></div>
                            <div className="text">
                                <p>Easily editable interfaces. Run your own business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="inner">
                            <div className="icon"><div className="temp-square">&nbsp;</div></div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Hero;