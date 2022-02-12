import React from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {TCard} from "../Types/TCard";


let cards: TCard[] = [
    {
        postUrl: "#post-url",
        text: "Следует отметить, что новая модель организационной деятельности...",
        previewUrl: "https://cdn.dribbble.com/users/447898/screenshots/17141066/media/f5b3140f474f2d226d470eedc1b61120.png?compress=1&resize=1600x1200&vertical=top",
        user: {
            avatarUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            name: "Дмитрий Грушин"
        },
        karmaValue: 123,
        commentsCount: 666,
    }, {
        postUrl: "#post-url",
        text: "Какой-то важный текст",
        previewUrl: "https://cdn.dribbble.com/users/447898/screenshots/17141066/media/f5b3140f474f2d226d470eedc1b61120.png?compress=1&resize=1600x1200&vertical=top",
        user: {
            avatarUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            name: "Всеволод Петров"
        },
        karmaValue: 456,
    },
]

export function CardsList() {
    return (
        <ul className={styles.cardsList}>
            {cards.map(card => <Card cardData={card}/>)}
        </ul>
    );
}
