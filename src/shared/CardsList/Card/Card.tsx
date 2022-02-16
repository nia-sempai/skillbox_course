import React from 'react';
import styles from './card.css';
import {Controls} from "./Controls";
import {Menu} from "./Menu";
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {TCard} from "../../Types/TCard";
import {Dropdown} from "../../Dropdown";
import {GenericList} from "../../GenericList";

interface ICardProps {
    cardData: TCard;
}

export function Card({cardData}: ICardProps) {
    return (
        <li className={styles.card}>
            <TextContent cardData={cardData}/>
            <Dropdown button={<button>test_button</button>}>
                <ul><li>2222</li></ul>
            </Dropdown>
            <Preview previewUrl={cardData.previewUrl}/>
            <Menu/>
            <Controls cardData={cardData}/>
        </li>
    );
}