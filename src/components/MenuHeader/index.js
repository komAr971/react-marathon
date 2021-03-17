import { useState } from  'react';

import Menu from './Menu';
import Navbar from './Navbar';

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);

  const handleClickHamburg = () => {
    setOpen(prewState => !prewState);
  }

  return (
    <>
      <Menu isOpen={isOpen}/>
      <Navbar isOpen={isOpen} bgActive={bgActive} onClickHambur={handleClickHamburg}/>
    </>
  );
};

export default MenuHeader;