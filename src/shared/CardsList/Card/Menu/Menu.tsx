import React from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {MenuItemsList} from "./MenuItemsList";
import {EColors, Text} from "../../../Text";
import {Icon} from "../../../Icons/Icon";
import {EIcon} from "../../../Icons/EIcon";


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
            <Icon className={''} name={EIcon.menu} size={12}/>
        </button>
    );
}
