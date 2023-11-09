import React from 'react';
import styles from './text.css';

interface ITextProps {
    mobileSize?: number;
    size: number;
    color: string;
    children?: React.ReactNode;
}

export const EColors = {
    grey66: '--grey66',
    grey99: '--grey99',
    black: '--black',
}

export function Text({children, size, mobileSize, color}: ITextProps) {
    return (
        <span style={{
            fontSize: size || mobileSize,
            color: color
        }} className={styles.content}>
        {children}
      </span>
    );
}
