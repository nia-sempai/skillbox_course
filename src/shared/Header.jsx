import * as React from 'react';
import {hot} from 'react-hot-loader/root';
import styles from './header.less';
export function Header() {
    return (
        <header>
            <h1 className={styles.example}>Reddit hello</h1>
        </header>
    );
}
export const Header = hot(Header);