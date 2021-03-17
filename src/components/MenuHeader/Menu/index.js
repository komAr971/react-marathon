import cn from 'classnames';
import s from './style.module.css';

const MENU = [
  { name: 'HOME', href: '#welcome', key: 1 },
  { name: 'GAME', href: '#game', key: 2 },
  { name: 'ABOUT', href: '#about', key: 3 },
  { name: 'CONTACT', href: '#contact', key: 4 }
];

const Menu = ({ isOpen }) => {
  

  return (
    <div className={ cn(s.menuContainer, {
         [s.active]: isOpen === true,
         [s.deactive]: isOpen === false 
     })}>
      <div className={ cn(s.overlay) }/>
      <div className={ cn(s.menuItems) }>
        <ul>
	        { 
            MENU.map(item => <li  
                key={item.key}
              >
              <a href={item.href}>
                {item.name}
              </a>
            </li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default Menu;
