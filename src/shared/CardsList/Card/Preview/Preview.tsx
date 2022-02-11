import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
      <div className={styles.preview}>
        <img
            className={styles.previewImg}
            src="https://cdn.dribbble.com/users/447898/screenshots/17141066/media/f5b3140f474f2d226d470eedc1b61120.png?compress=1&resize=1600x1200&vertical=top"
        />
      </div>
  );
}
