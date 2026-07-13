import { gradeSlab } from "./grades";
const existingSubjects = [
    {
        name : 'DBMS',
        credit : 4,
        grade : 'S'
    },
    {
        name : 'DAA',
        credit : 4,
        grade : 'A+'
    },
    {
        name : 'java',
        credit : 3,
        grade : 'S'
    },
    {
        name: 'DM',
        credit: 4,
        grade: 'S'
    }
];
const newSubjects = [
    {
        name: 'DBS Lab',
        credit : 2,
        grade : 'S'
    },{
        name: 'java lab',
        credit : 1.5,
        grade: 'S'
    }
];

export function gradePointsFinder(gradeString){
    return gradeSlab.find((grade)=>{
        return grade.grade_rep === gradeString.toUpperCase();
    }).gradePoints;
}


export function generateSgpa(existingSubjects, newSubjects){
    const semesterCreditPoints = existingSubjects.reduce((sum,subj) => {
        return sum + (gradePointsFinder(subj.grade) * subj.credit);
    },0) + newSubjects.reduce((sum,subj)=>{
        return sum + (gradePointsFinder(subj.grade) * subj.credit);
    },0);
    const semesterCredits = existingSubjects.reduce((creditSum,subj) =>{
        return creditSum + subj.credit;
    },0) + newSubjects.reduce((creditSum,subj) =>{
        return creditSum + subj.credit;
    },0);

    const sgpa = ( semesterCreditPoints / semesterCredits ).toFixed(2);
    return {
        semesterCreditPoints: semesterCreditPoints,
        semesterCredits: semesterCredits,
        sgpa: sgpa
    };
}

export function generateCgpa(currentCgpa, cumulatedCredits, sgpa){
    const totalCreditPoints = (currentCgpa * cumulatedCredits) + sgpa['semesterCreditPoints'];
    const totalCredits = cumulatedCredits + sgpa['semesterCredits'];
    return (totalCreditPoints/totalCredits).toFixed(2);
}
console.log(gradePointsFinder('s'));
console.log(generateSgpa(existingSubjects,newSubjects));
console.log(generateCgpa(9.65 , 22 , generateSgpa(existingSubjects, newSubjects)));
