import React from 'react';
import {BlockIcon} from './BlockIcon';
import {EIcon} from "./EIcon";
import {CommentIcon} from "./CommentIcon";
import {WarningIcon} from "./WarningIcon";
import {SaveIcon} from "./SaveIcon";
import {ShareIcon} from "./ShareIcon";

interface IProps {
    name: EIcon;
    size: number;
}

export const Icon: React.FC<IProps> = ({name, size}) => {
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
        // Добавьте здесь другие иконки
        default:
            return null;
    }
};