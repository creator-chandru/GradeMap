export function SubjectList(props){

    const divStyle = " bg-zinc-900 flex flex-col gap-6 border-2 border-yellow-400 rounded-2xl w-70 h-60 p-4 m-2";
    const detailStyle = "text-2xl text-amber-500 pl-3";
    function addToList(subjects){
        return subjects.map((subj) => {
            return <div key = {subj.subjectCode} className = {divStyle}><span className = "text-3xl text-center text-yellow-200">{subj.subjectCode}</span>  <span className = {detailStyle}>Credits  : {subj.subjectCredit}</span>  <span className = {detailStyle}>Subject Type: {subj.subjectType}</span>  <span className = {detailStyle}>Internal Marks : {subj.subjectInternalMarks}</span></div>
        });
    }
    return(
        <section>
            <div className = "flex flex-row flex-wrap">
                {addToList(props.subjects)}
            </div>
        </section>
    );
}