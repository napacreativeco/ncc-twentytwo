import React from 'react';
import './_slideshow.scss';
import './_ourwork.scss';


const webDesignSlides = [
    "https://images.unsplash.com/photo-1653731415753-703b08005ae6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1653356130305-70d446e1b5ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1653673891902-0a43d42c5e2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
];
const delay = 4000; 

function WebDesign() {
    const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);


  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === webDesignSlides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

    return (
        <section className="section_slide">
            <div className="section_slide_row">

                {/* SLIDESHOW */}
                <div className="slideshow_container">
                    <div className="slideshow">

                        <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                            {webDesignSlides.map((backgroundColor, index) => (
                                <div className="slide" key={index} style={{ background: 'url(' + backgroundColor + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            ))}
                        </div>

                        <div className="slideshowDots">
                            {webDesignSlides.map((_, idx) => (
                                <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => { setIndex(idx); }}></div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* INFORMATION */}
                <div className="slide_info">
                    <h2>Impactful web design</h2>
                    <p>We leverage popular tools like Shopify and WordPress to build fast and functional websites that feel great</p>
                    <button>Learn more</button>
                </div>

            </div>
        </section>
    );
}

export default WebDesign;