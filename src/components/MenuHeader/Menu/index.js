import cn from 'classnames';
import s from './style.module.css';

const Menu = ({ isActive }) => {
  const ROUTES = [
    { name: 'HOME', href: '#welcome', key: 1 },
    { name: 'GAME', href: '#game', key: 2 },
    { name: 'ABOUT', href: '#about', key: 3 },
    { name: 'CONTACT', href: '#contact', key: 4 }
  ];

  return (
    <div className={ cn(s.menuContainer, { [s.active]: isActive, [s.diactive]: !isActive }) }>
      <div className={ cn(s.overlay) }/>
      <div className={ cn(s.menuItems) }>
        <ul>
	        { 
            ROUTES.map(rout => <li  
                key={rout.key}
              >
              <a href={rout.href}>
                {rout.name}
              </a>
            </li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default Menu;
