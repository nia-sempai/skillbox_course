import React from 'react';
import styles from './card.css';
import {Controls} from "./Controls";
import {Menu} from "./Menu";
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {TCard} from "../../Types/TCard";

interface ICardProps {
    cardData: TCard;
}

export function Card({cardData}: ICardProps) {
    return (
        <li className={styles.card}>
            <TextContent cardData={cardData}/>
            <Preview previewUrl={cardData.previewUrl}/>
            <Menu/>
            <Controls cardData={cardData}/>
        </li>
    );
}