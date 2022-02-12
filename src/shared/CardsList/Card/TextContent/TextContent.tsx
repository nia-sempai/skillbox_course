import React from 'react';
import styles from './textcontent.css';
import {UserLink} from "../UserLink";
import {TCard} from "../../../Types/TCard";

interface ITextContentProps {
    cardData: TCard;
}

export function TextContent({cardData}: ITextContentProps) {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <UserLink user={cardData.user}/>
                <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>опубликовано </span>
                4 часа назад
            </span>
            </div>
            <h2 className={styles.title}>
                <a href={cardData.postUrl.toString()} className={styles.postLink}>
                    {cardData.text}
                </a>
            </h2>
        </div>
    );
}
