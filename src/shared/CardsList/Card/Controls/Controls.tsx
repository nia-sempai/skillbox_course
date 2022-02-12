import React from 'react';
import styles from './controls.css';
import {KarmaCounter} from "../KarmaCounter";
import {CommentsButton} from "../CommentsButton";
import {ShareButton} from "../ShareButton";
import {SaveButton} from "../SaveButton";
import {TCard} from "../../../Types/TCard";

interface IControlsProps {
    cardData: TCard;
}

export function Controls({cardData}: IControlsProps) {
  return (
      <div className={styles.controls}>
          <KarmaCounter karmaValue={cardData.karmaValue}/>
          <CommentsButton commentsCount={cardData.commentsCount}/>
          <div className={styles.actions}>
              <ShareButton/>
              <SaveButton/>
          </div>
      </div>
  );
}
