function getGradeFromTotal(total){
    const grades = {
        gradePoints : 0,
        grade: ''
    };

    if(total > 100 || total < 0){
        console.log('Enter valid marks');
        return;
    }
    if (total >= 91){
        grades.gradePoints = 10;
        grades.grade = 'S';
    }
    else if (total >=81){
        grades.gradePoints = 9;
        grades.grade = 'A+';
    }
    else if (total >=71){
        grades.gradePoints = 8;
        grades.grade = 'A';
    }
    else if (total >=61){
        grades.gradePoints = 7;
        grades.grade = 'B+';
    }
    else if (total >=56){
        grades.gradePoints = 6;
        grades.grade = 'B';
    }
    else if (total >=50){
        grades.gradePoints = 5;
        grades.grade = 'C';
    }
    else{
        grades.grade = 'U';
    }
    return grades;
}

console.log(getGradeFromTotal());