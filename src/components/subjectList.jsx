export function SubjectList(props){

    const divStyle = "bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col gap-1.5 w-full md:w-[calc(50%-1rem)] shadow-lg";
    function addToList(subjects){
        return subjects.map((subj) => {
            return <div key = {subj.subjectCode} className = {divStyle}><span className = "text-blue-400 font-semibold text-2xl">{subj.subjectCode}</span>  <span className = "text-yellow-500 text-xl">Credits  : {subj.subjectCredit}</span>  <span className = "text-yellow-500 text-xl">Subject Type: {subj.subjectType}</span>  <span className = "text-yellow-500 text-xl">Internal Marks : {subj.subjectInternalMarks}</span></div>
        });
    }
    return(
        <section>
            <div className = "flex flex-wrap gap-4">
                {addToList(props.subjects)}
            </div>
        </section>
    );
}