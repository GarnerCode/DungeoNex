export interface Campaign {
    id: string,
    active: boolean,
    title: string,
    description: string,
    thumbnail: string,
    dateCreated: number,
    sessions: Array<Session>,
}

export interface Session {
    title: string,
    description: string,
    dateCreated: number,
    dateModified: number,
}