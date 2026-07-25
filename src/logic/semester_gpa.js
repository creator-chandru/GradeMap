import { gradeSlab } from "./grades";

export function gradePointsFinder(gradeString){
    return gradeSlab.find((grade)=>{
        return grade.grade_rep === gradeString.toUpperCase();
    }).gradePoints;
}


export function generateSgpa(existingSubjects, newSubjects){
    const semesterCreditPoints = existingSubjects.reduce((sum,subj) => {
        return sum + (gradePointsFinder((subj.desiredGrade) || 'A') * subj.subjectCredit);
    },0) + newSubjects.reduce((sum,subj)=>{
        return sum + (gradePointsFinder((subj.desiredGrade) || 'S') * subj.subjectCredit);
    },0);
    const semesterCredits = existingSubjects.reduce((creditSum,subj) =>{
        return creditSum + subj.subjectCredit;
    },0) + newSubjects.reduce((creditSum,subj) =>{
        return creditSum + subj.subjectCredit;
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
