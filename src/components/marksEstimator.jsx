import { calculateRequiredMark } from "../logic/grades";

export function MarksEstimator(props){
    function displayGrade(subject){
        return calculateRequiredMark(subject.subjectInternalMarks, subject.subjectType).map((grade) =>{
            const isSecured = grade.possibility.includes("Already");
            const isEasy = grade.possibility.includes("Easily");
            const isHard = grade.possibility.includes("hard");
            const isImpossible = grade.possibility.includes("Impossible"); 

            const dotColor = isSecured ? "bg-blue-500" : isEasy ? "bg-green-500" : isHard ? "bg-amber-500" : isImpossible ? "bg-red-500" : "bg-slate-500";
            return <li key = {grade.gradeStatus} className = "flex items-center justify-between rounded-xl border border-slate-700/50 bg-slate-800/60 px-4 py-3 transition-all duration-200 hover:border-amber-400/40 hover:bg-slate-800/80"><span className="flex items-center gap-3 text-slate-100 font-semibold"><span className={`w-2.5 h-2.5 rounded-full shadow-md ${dotColor}`} />{grade.gradeStatus} </span> <span className="text-slate-400 text-sm font-medium">{grade.possibility}</span> <span className="rounded-md bg-amber-500/10 px-3 py-1 text-amber-400 font-semibold border border-amber-400/20">{grade.marksRequired}</span></li>
        });
    }

    return (
        <ul className = "mt-8 flex flex-col gap-4 rounded-2xl border border-slate-700/50 bg-slate-900/40 p-4 backdrop-blur-md shadow-xl shadow-slate-950/40">
            {displayGrade(props.selectedSubject)}
        </ul>
    );
}