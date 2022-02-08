import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.css';
export function HeaderComponent() {
    return (
        <header>
            <h1 className={styles.example}>Reddit hello</h1>
        </header>
    );
}
export const Header = hot(HeaderComponent);