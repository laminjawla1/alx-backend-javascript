interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    printTeacher: () => void;
}
function printTeacher(firstName: string, lastName: string) {
    return `${firstName[0]}. ${lastName}`
}

interface StudentInterface {
    firstName: string;
    lastName: string;
}
class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomeWork() {
        return "Currently working"
    }
    displayName(): string {
        return this.firstName;
    }

}