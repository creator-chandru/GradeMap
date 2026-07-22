import { calculateRequiredMark } from "../logic/grades";

export function SubjectTable(props){

    function printDesiredGrade(subject,selectedGrade){
        console.log(subject);
        console.log(selectedGrade);
    }
    function displaySubjects(subjects){
        return subjects.map((subject) => {
            return (
                <tr key = {subject.subjectCode} onClick = {() => props.setSelectedSubject(subject)}>
                    <td>{subject.subjectCode}</td>
                    <td>{subject.subjectCredit}</td>
                    <td>{subject.subjectType}</td>
                    <td><select name="grade" id = "grade" defaultValue="A" onChange = {(e)=>{printDesiredGrade(subject,e.target.value)}}>
                        <option value = "S">S</option>
                        <option value = "A+">A+</option>
                        <option value = "A">A</option>
                        <option value = "B+">B+</option>
                        <option value = "B">B</option>
                        <option value = "C">C</option>
                    </select></td>
                </tr>
            );
        });
    }
    return (
        <table> 
            <thead>
                <tr>
                    <th>Name/Code</th>
                    <th>Credits</th>
                    <th>Type</th>
                    <th>Desired Grade</th>
                </tr>
            </thead>
            <tbody>
                {displaySubjects(props.subjects)}
            </tbody>
        </table>
    );
}
