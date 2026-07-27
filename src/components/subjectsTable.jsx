import { calculateRequiredMark } from "../logic/grades";

export function SubjectTable(props){

    function printDesiredGrade(selectedSubject,selectedGrade){
        props.setSubjectsList((prevSubjectsList) => {
            return prevSubjectsList.map((subject) =>{
                if(subject.subjectCode === selectedSubject){
                    return { ...subject, desiredGrade: selectedGrade };
                }
                return subject;
            });
        });
    }
    function displaySubjects(subjects){
        return subjects.map((subject) => {
            return (
                <tr key = {subject.subjectCode} onClick = {() => props.setSelectedSubject(subject)} className = {`cursor-pointer transition-colors ${props.selectedSubject?.subjectCode === subject.subjectCode? "border-2 border-amber-400 rounded-xl": "border-b border-white/5"}`}>
                    <td className = "py-2 px-3 text-slate-200 text-sm">{subject.subjectCode}</td>
                    <td className = "py-2 px-3 text-slate-200 text-sm">{subject.subjectCredit}</td>
                    <td className = "py-2 px-3 text-slate-200 text-sm">{subject.subjectType}</td>
                    <td className = "py-2 px-3"><select name="grade" defaultValue="A" onChange = {(e)=>{printDesiredGrade(subject.subjectCode,e.target.value)}} className = "bg-transparent text-amber-400 font-semibold border border-amber-400 rounded-md px-2 py-1 text-md cursor-pointer">
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
        <div className = "w-full md:w-[65%] overflow-x-auto">
            <table className = "w-full text-left border-collapse"> 
                <thead>
                    <tr className = "border-b border-white/10">
                        <th className = "text-amber-400 font-semibold py-2 px-3 text-sm">Name/Code</th>
                        <th className = "text-amber-400 font-semibold py-2 px-3 text-sm">Credits</th>
                        <th className = "text-amber-400 font-semibold py-2 px-3 text-sm">Type</th>
                        <th className = "text-amber-400 font-semibold py-2 px-3 text-sm">Desired Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {displaySubjects(props.subjects)}
                </tbody>
            </table>
        </div>

    );
}