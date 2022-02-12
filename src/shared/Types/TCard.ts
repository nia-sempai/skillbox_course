import {TUser} from './TUser';

export type TCard = {
    text: String,
    postUrl: String,
    previewUrl: String,
    karmaValue?: Number,
    user: TUser,
    commentsCount?: Number
}