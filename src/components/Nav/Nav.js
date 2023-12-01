import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav({ color }) {
  let clazz = 'nav nav' + color,
    source = './resources/icons/Logo' + color + '.png';
  return (
    <nav className={clazz}>
      <ul>
        <li>
          <Link to="/">
            <img src={source} width="35" height="35" alt="two beans" className="logo" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/Test">Test</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
