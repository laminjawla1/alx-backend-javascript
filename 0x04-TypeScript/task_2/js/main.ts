interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }
    getCoffeeBreak(): string {
        return "Cannot work from"
    }
    workTeacherTasks(): string {
        return "Getting to work"
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof(salary) === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: any): employee is Director {
    return employee && employee instanceof  Director;
}
function executeWork(employee: any) {
    isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks()
}

let Subjects: "Math" | "History";
function teachClass(todayClass: string) {
    return (todayClass === "Math") ? "Teaching Math" : "Teaching History";
}