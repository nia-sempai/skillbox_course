import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
      <div className={styles.userLink}>
        <img
            className={styles.avatar}
            src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
            alt="avatar"
        />
        <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
      </div>
  );
}
