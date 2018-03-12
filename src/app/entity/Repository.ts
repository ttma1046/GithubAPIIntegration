export interface Repository {
    full_name: string;
    name: string;
    avator: string;
    created_on: string;
    owner: {
        display_name: string
        links: {
            avatar: {
                href: string
            }
        }
    };
}
