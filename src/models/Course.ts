export interface Course {
    courseID: number;
    courseName: string;
    courseDescription: string;
    isDeleted: boolean;
    createdDate: Date;
    updatedDate?: Date;
    deletedDate?: Date;
}