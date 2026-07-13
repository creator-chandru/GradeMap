import {useState} from 'react';

export function SubjectForm(){
    const [subjectsList, setSubjectsList] = useState([]);

    function handleFormSubject(formData){
        const newSubject = formData.get('subjectCode');
        const newCredit = formData.get('subjectCredit');
        const newType = formData.get('subjectType');
        const newSubmission = {
            subjectCode : newSubject,
            subjectCredit : newCredit,
            subjectType : newType
        };
        setSubjectsList((prevSubjectsList)=>{
            return [...prevSubjectsList, newSubmission];
        });
    }
    console.log(subjectsList);
    return (
        <form action = {handleFormSubject}>
            <label>
                Enter Subject Name/Code : <input type = "text" placeholder = "e.g. Calculus / 23MAT203" name = "subjectCode" />
            </label>
            
            <label>
                Enter Subject Credits : <input type = "number" placeholder = "e.g. 3" name = "subjectCredit" />
            </label>
            <label>
                Choose Subject Type : 
                Integrated Course<input type = "radio" name = "subjectType" value = "I"/>
                Theory Course<input type = "radio" name = "subjectType" value = "T" />
            </label>
            <button type = "submit"> + Add Subject</button>
        </form>
    );
}