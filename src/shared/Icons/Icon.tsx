import React from 'react';
import {BlockIcon, CommentIcon, AnonIcon, SaveIcon, ShareIcon, WarningIcon, MenuIcon} from '../Icons';
import {EIcon} from "./EIcon";

interface IProps {
    name: EIcon;
    size: number;
    className: string,
}

interface IconComponentProps {
    name: EIcon;
    size: number;
}

export const Icon: React.FC<IProps> = ({name, size, className}) => {
    return <div className={className}><IconComponent name={name} size={size}/></div>
};

function IconComponent({name, size}: IconComponentProps) {
    switch (name) {
        case EIcon.share:
            return <ShareIcon width={size} height={size}/>;
        case EIcon.save:
            return <SaveIcon width={size} height={size}/>;
        case EIcon.block:
            return <BlockIcon width={size} height={size}/>;
        case EIcon.comment:
            return <CommentIcon width={size} height={size}/>
        case EIcon.shame:
            return <WarningIcon width={size} height={size}/>
        case EIcon.anon:
            return <AnonIcon width={size} height={size}/>
        case EIcon.menu:
            return <MenuIcon width={size} height={size}/>
        default:
            return null;
    }
}