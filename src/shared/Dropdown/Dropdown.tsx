import React from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const noop = () => {
};

export function Dropdown({button, children, isOpen, onOpen = noop, onClose = noop}: IDropdownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
    React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])
    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    }

    return (
        <div className={styles.container}>
            <div onClick={handleOpen} className={styles.container}>
                {button}
            </div>
            {isDropdownOpen && (
                <div className={styles.listContainer}>
                    <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}