export function SubjectList(props){

    const divStyle = "bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 flex flex-col gap-1.5 w-full md:w-[calc(50%-0.5rem)] shadow-lg transition-all duration-200 hover:border-amber-400/30 hover:bg-slate-800/70";
    function addToList(subjects){
        return subjects.map((subj) => {
            return <div key = {subj.subjectCode} className = {divStyle}><span className = "text-amber-400 font-semibold text-2xl">{subj.subjectCode}</span>  <span className = "text-slate-300 text-xl">Credits  : {subj.subjectCredit}</span>  <span className = "text-slate-300 text-xl">Subject Type: {subj.subjectType}</span>  <span className = "text-slate-300 text-xl">Internal Marks : {subj.subjectInternalMarks}</span></div>
        });
    }
    return(
        <section className = "flex-1">
            <div className = "flex flex-wrap gap-4">
                {addToList(props.subjects)}
            </div>
        </section>
    );
}