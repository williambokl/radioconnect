import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link activeClass="active" className="test" to="test" spy={true} smooth={true} duration={500}>Home</Link>
        </li>
        <li>
        <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500}>Branding Music</Link>
        </li>
        <li>
        <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Como fazemos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;