import React from 'react';
import styles from './card.css';
import {Controls} from "./Controls";
import {Menu} from "./Menu";
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";

export function Card() {
    return (
        <li className={styles.card}>
            <TextContent/>
            <Preview/>
            <Menu/>
            <Controls/>
        </li>
    );
}