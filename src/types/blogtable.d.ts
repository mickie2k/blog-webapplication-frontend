export interface BlogDataTable{
    id: number;
    title: string | null;
    content: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    isPremium: boolean | null;
    username: string | null;
}