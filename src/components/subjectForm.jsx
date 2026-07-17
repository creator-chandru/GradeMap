import {useState} from 'react';
import { SubjectList } from './subjectList';
import { RequiredMarks } from './requiredMarksTable';

export function SubjectForm(props){
    const [errorMessage, setErrorMessage] = useState('');

    function handleFormSubject(formData){
        const newSubject = formData.get('subjectCode');
        const newCredit = formData.get('subjectCredit');
        const newType = formData.get('subjectType');
        const newInternalMarks = formData.get('subjectInternalMark');
        if (newType === 'I' && (newInternalMarks > 50 || newInternalMarks < 0)){
            setErrorMessage((prevErrorMessage) => prevErrorMessage + 'FILL IN VALID INTERNAL MARKS');
            return;
        }
        else if (newType === 'T' && (newInternalMarks > 40 || newInternalMarks < 0)){
            setErrorMessage((prevErrorMessage) => prevErrorMessage + 'FILL IN VALID INTERNAL MARKS');
            return;
        }
        else{
            const newSubmission = {
                subjectCode : newSubject,
                subjectCredit : newCredit,
                subjectType : newType,
                subjectInternalMarks : newInternalMarks 
            };
            props.setSubjectsList((prevSubjectsList)=>{
                return [...prevSubjectsList, newSubmission];
            });
            setErrorMessage((prevErrorMessage) => null);
        }
    }
    
    return (
        <main>
            <form action = {handleFormSubject}>
            <label>
                Enter Subject Name/Code : <input type = "text" placeholder = "e.g. Calculus / 23MAT203" name = "subjectCode" required/>
            </label>
            
            <label>
                Enter Subject Credits : <input type = "number" step="0.1" placeholder = "e.g. 3" name = "subjectCredit" required />
            </label>
            <label>
                Choose Subject Type : 
                Integrated Course<input type = "radio" name = "subjectType" value = "I" required/>
                Theory Course<input type = "radio" name = "subjectType" value = "T" />
            </label>
            <label>
                Enter Subject's INTERNAL MARKS : <input type="number" placeholder = "e.g. 35" name="subjectInternalMark" required />
            </label>
            <button type = "submit"> + Add Subject</button>
        </form>
        {(!errorMessage) ? '' : <p className="text-red-500" >{errorMessage}</p>}
        </main> 
    );
}