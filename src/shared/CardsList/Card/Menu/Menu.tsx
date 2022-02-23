import React from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenericList";
import {generateRandomString} from "../../../../utils/react/generateRandomIndex";

interface IItem {
    id: string,
    text: string,
    onClick?: (id: string) => void,
    className?: string,
    As?: 'a' | 'li' | 'button' | 'div',
    href?: string
}

const menuItems: IItem[] = [
    {
        id: generateRandomString(),
        text: 'Hide',
        className: styles.menuItem,
        onClick: onHidePost
    },
    {
        id: generateRandomString(),
        text: 'Report',
        className: styles.menuItem,
        onClick: onReportPost
    },
    {
        id: generateRandomString(),
        text: 'Share',
        className: styles.menuItem,
        onClick: onReportPost
    },
]

export function Menu() {
    return (
        <div className={styles.menu}>
            <Dropdown button={<MenuButton/>}>
                <div className={styles.dropdown}>
                    <GenericList list={menuItems}/>
                </div>
            </Dropdown>
        </div>
    );
}

function MenuButton() {
    return (
        <button className={styles.menuButton}>
            <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
                <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
                <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
            </svg>
        </button>
    );
}

function onHidePost() {
    console.log('onHide');
}

function onReportPost() {
    console.log('onReport');
}
