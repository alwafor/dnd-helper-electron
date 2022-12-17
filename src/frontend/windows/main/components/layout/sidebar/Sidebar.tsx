import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { ISubmenuProps, Submenu } from '../../reusable/submenu/Submenu';
import imgEye from '../../../assets/images/icons/creature-icon-1.svg';
import imgWolf from '../../../assets/images/icons/creature-icon-2.svg';
import imgSave from '../../../assets/images/icons/diskette-icon.png';

import { useAppDispatch } from '../../../hooks/redux';
import { changeFormValues } from '../../../redux/reducers/createCreatureReducer';
import { createCreatureDefaultValues } from '../../../contants/hookFormConstants';
import styled from '@emotion/styled';

const S_Root = styled.div`
  display: relative;
  flex-basis: 200px;
  flex-shrink: 0;
  user-select: none;
  ${(p) => p.theme.screens.md} {
    margin-top: 32px;
  }
  @media print {
    display: none;
  }
`;

const S_AppTitle = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  font-family: ${(p) => p.theme.font.freestyle};
  text-align: center;
  font-size: 75px;
  margin-bottom: 30px;
  height: 125px;
  white-space: nowrap;
  ${(p) => p.theme.screens.md} {
    text-align: left;
    font-size: 90px;
  }
`;

const S_Menu = styled.div`
  margin: 90px auto 0;

  ${(p) => p.theme.screens.md} {
    margin-top: 200px;
  }
`;

function Sidebar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateTo = (path: string) => () => navigate(path);

  const menuItems: ISubmenuProps[] = [
    {
      name: 'Существа',
      items: [
        {
          icon: imgEye,
          name: 'Создать существо',
          onClick: () => {
            dispatch(changeFormValues(createCreatureDefaultValues));
            navigate('create-creature');
          },
          isActive: window.location.pathname === '/create-creature',
        },
        {
          icon: imgWolf,
          name: 'Бестиарий',
          onClick: navigateTo('bestiary'),
          isActive: window.location.pathname === '/bestiary',
        },
      ],
    },
    {
      name: 'Дополнительно',
      items: [
        {
          icon: imgSave,
          name: 'Сохранение',
          onClick: navigateTo('/save'),
          isActive: window.location.pathname === '/save',
        },
      ],
    },
  ];

  return (
    <S_Root>
      <S_AppTitle>DnD Helper</S_AppTitle>
      <S_Menu>
        {menuItems.map((menuElement) => (
          <Submenu key={menuElement.name} {...menuElement} />
        ))}
      </S_Menu>
    </S_Root>
  );
}

export default Sidebar;
