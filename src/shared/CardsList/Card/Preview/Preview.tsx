import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
    previewUrl: String,
}

export function Preview({previewUrl}: IPreviewProps) {
  return (
      <div className={styles.preview}>
        <img
            className={styles.previewImg}
            src={previewUrl.toString()}
        />
      </div>
  );
}
