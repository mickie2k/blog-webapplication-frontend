export interface Blog{
    id: string,
    title: string,
    content: string,
    authorName: string,
    isPremium: boolean,
    createdAt: Date,
    updatedAt: Date,
    comments?: BlogComment[]
}

export interface BlogFormValue{
    title?: string,
    content?: string,
    isPremium?: boolean,
}

export interface BlogComment{
    id: string,
    content: string,
    authorName: string,
    createdAt: Date,
    updatedAt: Date,
}