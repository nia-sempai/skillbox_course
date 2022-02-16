import {TUser} from './TUser';
import {Key} from "react";

export type TCard = {
    id?: Key,
    text: String,
    postUrl: String,
    previewUrl: String,
    karmaValue?: Number,
    user: TUser,
    commentsCount?: Number
}