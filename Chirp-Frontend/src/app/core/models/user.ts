/**
 * The interface that matched all the data we have on backend for a single user
 */
export interface User {
    _id?: string;
    name?: string;
    userName: string;
    userEmail: string;
    password: string;
    userRole?: string;
    age?: number;
    gender?: string;
    phone?: number;
}