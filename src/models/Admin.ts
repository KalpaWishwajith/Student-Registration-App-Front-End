export interface Admin {
    adminID: number;
    username: string;
    passwordHash: string;
    isDeleted: boolean;
    createdDate: Date;
    updatedDate?: Date;
    deletedDate?: Date;
}