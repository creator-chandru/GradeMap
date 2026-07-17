import { calculateRequiredMark } from "../logic/grades";

export function RequiredMarks(props){
    function calculateMarks(subjects){
        return subjects.map((subject) => {
            const subjectMarks =  calculateRequiredMark(subject.subjectInternalMarks, subject.subjectType);
            return subjectMarks.map((subjectGrade)=>{
                return <div className = "mark-div">{subjectGrade.gradeStatus}, {subjectGrade.possibility}, {subjectGrade.marksRequired}</div>
            });
        });
    }

    return (
        <div>
            {calculateMarks(props.subjects)};
        </div>
    );
}
