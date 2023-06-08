export default interface User {
    id?: string;
    name: string;
    email: string;
    password?: string;
    added?: Date;
    updated?: Date;
    excluded?: Date | null;
}