export function ExtraSubjectsForm(props){

    function handleExtraInputs(formData){
        const newSubject = formData.get('extraSubjectCode');
        const newCredit = formData.get('extraSubjectCredit');
        const newGrade = formData.get('extraGrade');
        console.log(newGrade);
        const newSubmission = {
            subjectCode : newSubject,
            subjectCredit : newCredit,
            desiredGrade : newGrade
        };
        props.setExtraSubjectsList((prevExtraSubjectsList)=>{
            return [...prevExtraSubjectsList, newSubmission];
        });
    }

    return (
        <section>
            <form action = {handleExtraInputs}>
                <label>
                    Enter Subject Name: <input type="text" placeholder = "e.g. Calculus / 23MAT203" name = "extraSubjectCode" required />
                </label>
                <label>
                    Enter Subject Credits: <input type="number" placeholder = "e.g. 3" step="0.1" name = "extraSubjectCredit" required />
                </label>
                <label>
                    Enter Subject's Desired Grade <select name="extraGrade" defaultValue="S" >
                        <option value = "S">S</option>
                        <option value = "A+">A+</option>
                        <option value = "A">A</option>
                        <option value = "B+">B+</option>
                        <option value = "B">B</option>
                        <option value = "C">C</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}