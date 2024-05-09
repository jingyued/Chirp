
export interface Chirrup {
    _id?: string;
    publisherName?: string;
    content?: Content;
    publishedTime: string;
    comment: Comment[];
    likedIdList: LikedId[];
    __v?: number;
    islike?: boolean;
    showComments?: boolean;

}

export interface Content {
    image?: string;
    video?: string;
    text: string;
    _id?: string; // for post service
}

export interface Comment {
    _id?: string; // Yuri, is this nessasary? we don't need them anyway --- Jimmy
    publisherName?: string;  // Optional because not all comments have a publisherName
    content?: Content;
    publishedTime: string;
}

interface LikedId {
    userName: string;
    _id?: string;
}
