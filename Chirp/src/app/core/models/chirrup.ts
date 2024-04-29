export interface Chirrup {
    publisherName: string;
    content: {
        image?: string;
        video?: string;
        text: string;
    };
    publishedTime: string;
    islike: boolean;
    // any other properties that a news item might have
}
