import React from 'react';
import {NavLink} from "react-router-dom";

import {Routes} from "../../constants";
import {ReactComponent as IconHome } from "../../assets/img/menu/home.svg";
import {ReactComponent as IconProduct} from "../../assets/img/menu/product.svg";
import {ReactComponent as IconUser} from "../../assets/img/menu/user.svg";
import {ReactComponent as IconSales} from "../../assets/img/menu/sales.svg";
import {ReactComponent as IconLogo} from "../../assets/img/menu/log.svg";
import logoJustice from '../../assets/img/menu/justice.png';
import logoCrm from '../../assets/img/menu/crm.svg';

import style from './Menu.module.scss';



const rootClasses = (isActive) => {
    return isActive ? style.menu__nav_item__active : style.menu__nav_item;
}
const nav = [
    {pageName: 'Main page', path: Routes.MAIN, icon: <IconHome />},
    {pageName: 'My Products', path: Routes.PRODUCTS, icon: <IconProduct />},
    {pageName: 'My sales', path: Routes.SALES, icon: <IconSales />},
    {pageName: 'Personal Cabinet', path: Routes.PERSONAL, icon: <IconUser />},
]
const Menu = () => {
    return (
        <div className={style.menu}>
            <header className={style.menu__header}>
                <div className={style.menu__header_logo}>
                    <img src={logoJustice} alt="JUSTICE logo"/>
                </div>
                <div className={style.menu__header_icon}>
                    <img src={logoCrm} alt="CRM"/>
                </div>
            </header>
            <nav className={style.menu__nav}>
                    {nav.map(item => (
                        <NavLink
                            key={item.pageName}
                            end
                            className={({isActive}) => rootClasses(isActive)}
                            to={item.path}
                        >
                            {item.icon}
                            <span>{item.pageName}</span>
                        </NavLink>
                    ))}
            </nav>
            <NavLink className={style.menu__logo_out} to='/login'>
                    <IconLogo/>
                    <span>Log out</span>
            </NavLink>
        </div>
    );
};

export default Menu;