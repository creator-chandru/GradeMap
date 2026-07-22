import {useState} from 'react';
import { SubjectList } from './subjectList';

export function SubjectForm(props){
    const [errorMessage, setErrorMessage] = useState('');

    const inputStyles = "bg-state-900 text-yellow-400 placeholder:text-yellow-400 rounded-lg px-4 py-3 border border-slate-700" ;
    const labelStyles = "text-lg text-yellow-600 px-3 py-3 flex items-center gap-2.5 m-2";

    function handleFormSubject(formData){
        const newSubject = formData.get('subjectCode');
        const newCredit = formData.get('subjectCredit');
        const newType = formData.get('subjectType');
        const newInternalMarks = formData.get('subjectInternalMark');
        if (newType === 'I' && (newInternalMarks > 50 || newInternalMarks < 0)){
            setErrorMessage('FILL IN VALID INTERNAL MARKS');
            return;
        }
        else if (newType === 'T' && (newInternalMarks > 40 || newInternalMarks < 0)){
            setErrorMessage('FILL IN VALID INTERNAL MARKS');
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
        <section>
            <form action = {handleFormSubject} className = "bg-slate-900/70 backdrop-blur-xl border-3 border-slate-700/50 rounded-3xl shadow-2xl p-5 flex flex-col gap-4 w-162 mr-auto">
                <label className = {labelStyles}>
                    Enter Subject Name/Code : <input type = "text" placeholder = "e.g. Calculus / 23MAT203" name = "subjectCode" required className = {inputStyles}/>
                </label>
                
                <label className = {labelStyles}>
                    Enter Subject Credits : <input type = "number" step="0.1" placeholder = "e.g. 3" name = "subjectCredit" required className = {inputStyles} />
                </label>
                <label className = {labelStyles}>
                    Choose Subject Type : 
                    Integrated Course<input type = "radio" name = "subjectType" value = "I" required className = "accent-yellow-300 w-5 h-5"/>
                    Theory Course<input type = "radio" name = "subjectType" value = "T" className = "accent-yellow-300 w-5 h-5"/>
                </label>
                <label className = {labelStyles} >
                    Enter Subject's INTERNAL MARKS : <input type="number" placeholder = "e.g. 35" name="subjectInternalMark" required className = {inputStyles} />
                </label>
                <button type = "submit" className = "bg-blue-600 text-white cursor-pointer border-none rounded-lg py-2 hover:bg-blue-800"> + Add Subject</button>
            </form>
        {(!errorMessage) ? '' : <p className="text-red-500 text-center text-2xl" >{errorMessage}</p>}
        </section> 
    );
}