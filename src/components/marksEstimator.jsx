import { calculateRequiredMark } from "../logic/grades";

export function MarksEstimator(props){
    function displayGrade(subject){
        return calculateRequiredMark(subject.subjectInternalMarks, subject.subjectType).map((grade) =>{
            const isSecured = grade.possibility.includes("Already");
            const isEasy = grade.possibility.includes("Easily");
            const isHard = grade.possibility.includes("hard");
            const isImpossible = grade.possibility.includes("Impossible"); 

            const dotColor = isSecured ? "bg-blue-500" : isEasy ? "bg-green-500" : isHard ? "bg-amber-500" : isImpossible ? "bg-red-500" : "bg-slate-500";
            return <li key = {grade.gradeStatus} className = "flex items-center justify-between bg-slate-900/60 border border-white/10 rounded-lg px-4 py-2"><span className="flex items-center gap-2 text-white font-semibold"><span className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />{grade.gradeStatus} </span> <span className="text-slate-300 text-sm">{grade.possibility}</span> <span className="text-amber-400 font-semibold">{grade.marksRequired}</span></li>
        });
    }

    return (
        <ul className = "flex flex-col gap-3">
            {displayGrade(props.selectedSubject)}
        </ul>
    );
}