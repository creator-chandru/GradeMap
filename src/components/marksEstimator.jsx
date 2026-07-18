import { calculateRequiredMark } from "../logic/grades";

export function MarksEstimator(props){
    function displayGrade(subject){
        return calculateRequiredMark(subject.subjectInternalMarks, subject.subjectType).map((grade) =>{
            return <li key = {grade.gradeStatus}>{grade.gradeStatus} {grade.possibility} {grade.marksRequired}</li>
        });
    }

    return (
        <ul>
            {displayGrade(props.selectedSubject)}
        </ul>
    );
}