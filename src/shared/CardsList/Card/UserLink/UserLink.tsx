import React from 'react';
import styles from './userlink.css';
import {TUser} from "../../../Types/TUser";

interface IUserLinkProps {
    user: TUser;
}

export function UserLink({user}: IUserLinkProps) {
  return (
      <div className={styles.userLink}>
        <img
            className={styles.avatar}
            src={user.avatarUrl.toString()}
            alt="avatar"
        />
        <a href="#user-url" className={styles.username}>{user.name}</a>
      </div>
  );
}
