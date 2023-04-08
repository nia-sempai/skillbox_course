import React from 'react';
import styles from './menuitemslist.css';
import {generateRandomString} from "../../../../../utils/react/generateRandomIndex";
import {EColors, Text} from "../../../../Text";
import {Icon} from "../../../../Icons/Icon";
import {EIcon} from "../../../../Icons/EIcon";

interface IMenuItem {
    id: string,
    text: string,
    onClick?: (id: string) => void,
    icon: EIcon,
    href?: string
}

const menuItems: IMenuItem[] = [
    {
        id: generateRandomString(),
        text: 'Комментарии',
        icon: EIcon.comment
    },
    {
        id: generateRandomString(),
        text: 'Поделиться',
        icon: EIcon.share
    },
    {
        id: generateRandomString(),
        text: 'Скрыть',
        icon: EIcon.block
    },
    {
        id: generateRandomString(),
        text: 'Сохранить',
        icon: EIcon.save
    },
    {
        id: generateRandomString(),
        text: 'Пожаловаться',
        icon: EIcon.shame
    },
]

interface TMenuItemsListProps {
    postId: string;
}

export function MenuItemsList({postId}: TMenuItemsListProps) {
    return (
        <ul className={styles.menuItemsList}>
            {
                menuItems.map(({id, text, icon}) => (
                    <li
                        onClick={() => console.log(text, postId)}
                        key={id}
                        className={styles.menuItem}
                    >
                        <Icon name={icon} size={16}/>
                        <Text size={12} color={EColors.grey66}>{text}</Text>
                    </li>
                ))
            }
        </ul>
    );
}


function onHidePost() {
    console.log('onHide');
}

function onReportPost() {
    console.log('onReport');
}

