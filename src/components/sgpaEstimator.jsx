import { generateSgpa } from "../logic/semester_gpa"
export function SgpaEstimator(props){
    return (
        <div>
            <p>Semester Credit Points Obtained: {props.estimatedSGPA.semesterCreditPoints}</p>
            <p>Semester Credits :{props.estimatedSGPA.semesterCredits}</p>
            <p>SGPA: {props.estimatedSGPA.sgpa}</p>
        </div>
    );
}