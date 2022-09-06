import React from 'react';
//import { Outlet } from 'react-router-dom';
import './Menu.scss';
import logo from '../../assets/ui/logoLogin.png';
import searchIcon from '../../assets/ui/searchIcon.png';
import userIcon from '../../assets/ui/userIcon.png';

export interface IMenuProps {}

const Menu: React.FunctionComponent<IMenuProps> = (props) => {
    return (
        <div className="menuBar">
            <div>
                <img className="logoHero" src={logo} alt="Logo" />
            </div>
            <div className="linkWraper">
                <p className="menuLink">Início</p>
                <p className="menuLink">Sobre nós</p>
                <p className="menuLink">Relatórios</p>
            </div>
            <div className="optionsWraper">
                <img className="options" src={userIcon} alt="Logo" />
                <img className="options" src={searchIcon} alt="Logo" />
            </div>
        </div>
    );
};

export default Menu;
