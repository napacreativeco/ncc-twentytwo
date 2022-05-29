import '../styles/_header.scss';

function Header() {
    return (
        <header>
          <div className="header_row">

            {/* LEFT */}
            <div className="left">
              <p className="logo_text">Napa Creative Co.</p>
            </div>

            {/* CENTER */}
            <nav className="center">
              <ul className="nav_desktop">
                <li>
                  <a href="#about" title="About us">About us</a>
                </li>
                <li>
                  <a href="#our-services" title="Our services">Our services</a>
                </li>
                <li>
                  <a href="#our-work" title="Our work">Our work</a>
                </li>
              </ul>
            </nav>

            {/* RIGHT */}
            <div className="right">
              <ul>
                <li>
                  <a href="#contact" title="Get a quote">Get a quote</a>
                </li>
                <li>
                  <select>
                    <option selected value="7073653802">Phone</option>
                    <option value="mailto:hello@napacreativeco.com">Email</option>
                    <option value="https://www.instagram.com/napacreativeco">Instagram</option>
                  </select>
                </li>
              </ul>
            </div>

          </div>
        </header>
    );
}
export default Header;