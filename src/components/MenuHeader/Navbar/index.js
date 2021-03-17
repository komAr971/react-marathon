import cn from 'classnames';
import s from './style.module.css'

const Navbar = ({ onBurgerClick, isActive }) => {
  const handleClick = () => {
    onBurgerClick && onBurgerClick();
  }

  return (
    <nav className={ cn(s.root) }>
      <div className={ cn(s.navWrapper) }>
        <p className={ cn(s.brand)}>
          LOGO
        </p>
        <a className={ cn(s.menuButton, { [s.active]: isActive }) } onClick={handleClick}>
          <span />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;