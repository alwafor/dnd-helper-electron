import { theme } from '@/frontend/assets/styles/theme';
import { css, cx } from '@emotion/css';
import { useState } from 'react';
import SidebarBody from './components/SidebarBody';
import SidebarHead from './components/SidebarHead';
import imgBurger from '@/frontend/assets/images/icons/menu.png';

const sSidebar = css`
  position: relative;

  border-right: 1px solid ${theme.colors.black};
  height: 100vh;

  transition: margin-left 0.4s ease-in-out;
  flex-basis: 264px;

  margin-left: 0px;
`;

const sSidebarClosed = css`
  margin-left: -265px;
`;

const sButtonMenu = css`
  position: absolute;
  top: 20px;
  right: -37px;

  width: 32px;
  height: 32px;

  background-color: ${theme.colors.black};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border-radius: 9999px;
`;

const sButtonMenuImage = css`
  width: 25px;
  height: 25px;

  filter: invert(1);
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={cx(sSidebar, !isOpen && sSidebarClosed)}>
      <button className={sButtonMenu} onClick={toggleSidebar}>
        <img className={sButtonMenuImage} src={imgBurger} alt="menu" />
      </button>
      <SidebarHead />
      <SidebarBody />
    </div>
  );
};

export default Sidebar;
