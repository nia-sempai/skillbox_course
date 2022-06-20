import React from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {MenuIcon} from "../../../Icons";
import {MenuItemsList} from "./MenuItemsList";
import {Text, EColors} from "../../../Text";



export function Menu() {
    return (
        <div className={styles.menu}>
            <Dropdown button={<MenuButton/>}>
                <div className={styles.dropdown}>
                    <MenuItemsList postId={'123'}/>
                    <button className={styles.closeButton}>
                        <Text mobileSize={12} size={14} color={EColors.grey66}>
                            Закрыть
                        </Text>
                    </button>
                </div>
            </Dropdown>
        </div>
    );
}

function MenuButton() {
    return (
        <button className={styles.menuButton}>
            <MenuIcon/>
        </button>
    );
}
