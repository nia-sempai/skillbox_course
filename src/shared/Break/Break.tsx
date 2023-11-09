import React from 'react';
import styles from './break.css';

interface IBreakProps {
    size: number;
}

export function Break({size}: IBreakProps) {
    return (
        <div style={{
            width: `${size}px`
        }}></div>
    );
}
