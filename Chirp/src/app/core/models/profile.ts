/**
 * Special form of User interface, used for better data security reason, will not contain password and role data
 */
export interface Profile {
    name?: string;
    userName: string;
    userEmail: string;
    age?: number;
    gender?: string;
    phone?: number;
}