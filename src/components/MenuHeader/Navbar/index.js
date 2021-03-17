import cn from 'classnames';
import s from './style.module.css'

const Navbar = ({ isOpen, bgActive, onClickHambur }) => {
  const handleClick = () => {
    onClickHambur && onClickHambur();
  }

  return (
    <nav className={ cn(s.root, {
      [s.bgActive]: bgActive
    }) }>
      <div className={ cn(s.navWrapper) }>
        <p className={ cn(s.brand)}>
          LOGO
        </p>
        <div className={ cn(s.menuButton, { [s.active]: isOpen }) } onClick={handleClick}>
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;