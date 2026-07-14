export function SubjectList(props){
    function addToList(subjects){
        return subjects.map((subj) => {
            return <div key = {subj.subjectCode} className = "subject-div">{subj.subjectCode} , {subj.subjectCredit} , {subj.subjectType} , {subj.subjectInternalMarks}</div>
        });
    }

    return(
        <section>
            <div className = "list-container">
                {addToList(props.subjects)}

            </div>
        </section>
    );
}