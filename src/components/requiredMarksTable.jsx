import { calculateRequiredMark } from "../logic/grades";

export function RequiredMarks(props){
    function displaySubjects(subjects){
        return subjects.map((subject) => {
            return (
                <tr key = {subject.subjectCode}>
                    <td>{subject.subjectCode}</td>
                    <td>{subject.subjectCredit}</td>
                    <td>{subject.subjectType}</td>
                    <td><select name="grade">
                        <option value = "S">S</option>
                        <option value = "A+" selected>A+</option>
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
