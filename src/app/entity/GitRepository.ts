export interface GitRepository {
    full_name: string;
    name: string;
    created_at: string;
    commits_url: string;
    owner: {
        login: string
        avatar_url: string
    };
}
