import { useState } from  'react';

import Menu from './Menu';
import Navbar from './Navbar';

const MenuHeader = () => {
  const [isActive, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!isActive);
  }

  return (
    <>
      <Navbar onBurgerClick={handleClick} isActive={isActive}/>
      <Menu isActive={isActive}/>
    </>
  );
};

export default MenuHeader;