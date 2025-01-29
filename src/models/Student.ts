export interface Student {
    studentID: number;
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
    isDeleted: boolean;
    createdDate: Date;
    updatedDate?: Date;
    deletedDate?: Date;
}