export interface Post {
    id: number | string;
    title: string;
    excerpt?: string;
    author?: string;
    imageUrl?: string;
    content: string
    createdAt: string
}

export interface Blog {
    _id: string
    title: string;
    content: string
    createdAt: string
}