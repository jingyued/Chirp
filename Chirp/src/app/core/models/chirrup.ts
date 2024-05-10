
export interface ChirrupPost {
    publisherName: string;
    content: {
        text: string,
        image: string,
        video: string
    };
    publishedTime: string;
    comment: [];
    likedIdList: [];
}
export interface FormData {
    text: string;
    image?: string;
    video?: string;
}

export interface Chirrup {
    _id: string;
    publisherName: string;
    content: Content;
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
    _id: string;
}

export interface Comment {
    _id?: string; // Yuri, is this nessasary? we don't need them anyway --- Jimmy
    publisherName?: string;  // Optional because not all comments have a publisherName
    content?: Content;
    publishedTime?: string;
}

interface LikedId {
    userId: string;
    _id?: string;
}
