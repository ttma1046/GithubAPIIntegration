export interface Commit {
    author: {
        login: string
    };
    commit: {
        author: {
            name: string,
            date: string
        },
        committer: {
            date: string
        }
        message: string
    };
}
