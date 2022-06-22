interface User {
    id: string;
    name: string;
    email: string;
}

interface Commit {
    id: string;
    message: string;
    timestamp: Date;
    userId: string;
}