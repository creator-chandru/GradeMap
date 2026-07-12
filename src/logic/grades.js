export const gradeSlab = [
    {
        grade_rep: 'S',
        gradePoints: 10,
        minimumMarks: 91
    },
    {
        grade_rep: 'A+',
        gradePoints: 9,
        minimumMarks: 81
    },
    {
        grade_rep: 'A',
        gradePoints: 8,
        minimumMarks: 71
    },
    {
        grade_rep: 'B+',
        gradePoints: 7,
        minimumMarks: 61
    },
    {
        grade_rep: 'B',
        gradePoints: 6,
        minimumMarks: 56
    },
    {
        grade_rep: 'C',
        gradePoints: 5,
        minimumMarks: 50
    },
];

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

console.log(getGradeFromTotal(100));

function calculateRequiredMark(internal , type){
    
    const mixedGrades = gradeSlab.map((grade)=>{
        const expectedResult = {
        gradeStatus: '',
        possibility: '',
        marksRequired : 0
        };
        expectedResult.gradeStatus = grade.grade_rep;
        const required_endsem_mark = grade.minimumMarks - internal;
        let endsem_scaled_mark;
        if(type.toLowerCase() === 't' && internal <= 40){
            endsem_scaled_mark = 60;
        }
        else if(type.toLowerCase() === 'i' && internal <= 50){
            endsem_scaled_mark = 50;
        }
        else{
            console.log("Enter valid course type");
            return null;
        }
        const raw_endsem_mark = ((required_endsem_mark/endsem_scaled_mark) * 100);
        if(Math.ceil(raw_endsem_mark) < 45){
            expectedResult.marksRequired = 45;
        }else{
            expectedResult.marksRequired = Math.ceil(raw_endsem_mark);
        }
        if(raw_endsem_mark > 100){
            expectedResult.possibility = 'Impossible!';
        }
        else if(raw_endsem_mark > 80){
            expectedResult.possibility = 'Achievable with hard work';
        }
        else if(raw_endsem_mark > 60){
            expectedResult.possibility = 'Achievable';
        }
        else if(raw_endsem_mark > 45){
            expectedResult.possibility = 'Easily Achievable';
        }else{
            expectedResult.possibility = 'Already Achieved, if you pass the endsemester examinations';
        }
        return expectedResult;
        
    });
    
    return mixedGrades;
}

console.log(calculateRequiredMark(50,'i'));