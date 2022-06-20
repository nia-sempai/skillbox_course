import React, {ReactNode} from 'react';
import styles from './menuitemslist.css';
import {generateRandomString} from "../../../../../utils/react/generateRandomIndex";
import {Text, EColors} from "../../../../Text";
import {BlockIcon, CommentIcon, WarningIcon} from "../../../../Icons";

interface IMenuItem {
    id: string,
    text: string,
    onClick?: (id: string) => void,
    icon: React.ReactNode,
    href?: string
}

const menuItems: IMenuItem[] = [
    {
        id: generateRandomString(),
        text: 'Комментарии',
        icon: () => CommentIcon()
    },
    {
        id: generateRandomString(),
        text: 'Поделиться',
        icon: () => CommentIcon()
    },
    {
        id: generateRandomString(),
        text: 'Скрыть',
        icon: () => BlockIcon()
    },
    {
        id: generateRandomString(),
        text: 'Сохранить',
        icon: () => CommentIcon()
    },
    {
        id: generateRandomString(),
        text: 'Пожаловаться',
        icon: () => WarningIcon()
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
                        <BlockIcon/>
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

