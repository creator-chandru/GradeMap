import { calculateRequiredMark } from "../logic/grades";

export function SubjectTable(props){

    const headerStyle = "text-amber-400 font-semibold py-2 md:py-3 px-2 md:px-4 text-[11px] md:text-sm tracking-wide uppercase whitespace-nowrap";
    const dataStyle = "py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm text-slate-200 whitespace-nowrap";
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
                <tr key = {subject.subjectCode} onClick = {() => props.setSelectedSubject(subject)} className = {`cursor-pointer transition-all duration-200 hover:bg-slate-800/50 ${props.selectedSubject?.subjectCode===subject.subjectCode?"bg-amber-500/10 ring-1 ring-amber-400/70":"border-b border-slate-700/40"}`}>
                    <td className = {dataStyle}>{subject.subjectCode}</td>
                    <td className = {dataStyle}>{subject.subjectCredit}</td>
                    <td className = {dataStyle}>{subject.subjectType}</td>
                    <td className = "py-2 px-3"><select name="grade" defaultValue="A" onChange = {(e)=>{printDesiredGrade(subject.subjectCode,e.target.value)}} className = "min-w-[56px] md:min-w-[72px] bg-slate-800/80 text-amber-400 font-semibold border border-amber-400/60 rounded-lg px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm transition-all duration-200 hover:border-amber-300 hover:bg-slate-700/80 focus:outline-none focus:ring-2 focus:ring-amber-400/40 cursor-pointer">
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
        <div className = "w-full md:w-[65%] overflow-x-auto rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md shadow-xl shadow-slate-950/40">
            <table className = "w-full text-left border-collapse"> 
                <thead>
                    <tr className = "border-b border-slate-700/60 bg-slate-800/50">
                        <th className = {headerStyle}>Name/Code</th>
                        <th className = {headerStyle}>Credits</th>
                        <th className = {headerStyle}>Type</th>
                        <th className = {headerStyle}>Desired Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {displaySubjects(props.subjects)}
                </tbody>
            </table>
        </div>

    );
}