import {useState} from 'react';
import { SubjectList } from './subjectList';

export function SubjectForm(props){
    const [errorMessage, setErrorMessage] = useState('');

    const inputStyles = "bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 md: text-xl" ;
    const labelStyles = "flex flex-col gap-1 text-sm text-slate-400 md:text-2xl";

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
                subjectCredit : Number(newCredit),
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
        <section id="subject-form" className = "bg-slate-900 border border-white/10 rounded-2xl p-5 w-full max-w-sm mx-auto md:max-w-xl md:p-8 md:ml-8 md:min-h-xl ">
            <form action = {handleFormSubject} className = "flex flex-col gap-4">
                <label className = {labelStyles}>
                    Enter Subject Name/Code : <input type = "text" placeholder = "e.g. Calculus / 23MAT203" name = "subjectCode" required className = {inputStyles}/>
                </label>
                
                <label className = {labelStyles}>
                    Enter Subject Credits : <input type = "number" step="0.1" placeholder = "e.g. 3" name = "subjectCredit" required className = {inputStyles} />
                </label>
                <label className = {labelStyles}>
                    Choose Subject Type :
                    <div className = "flex items-center gap-6">
                        Integrated Course<input type = "radio" name = "subjectType" value = "I" required className = "accent-yellow-300 w-5 h-5"/>
                        Theory Course<input type = "radio" name = "subjectType" value = "T" className = "accent-yellow-300 w-5 h-5"/>
                    </div>
                </label>
                <label className = {labelStyles} >
                    Enter Subject's INTERNAL MARKS : <input type="number" placeholder = "e.g. 35" name="subjectInternalMark" required className = {inputStyles} />
                </label>
                <button type = "submit" className = "bg-blue-600 text-white cursor-pointer border-none rounded-lg py-2 hover:bg-blue-800 transition-colors"> + Add Subject</button>
            </form>
        {(!errorMessage) ? '' : <p className="text-red-500 text-center text-2xl" >{errorMessage}</p>}
        <button onClick = {() => {props.setSubjectsList([]);localStorage.removeItem('grademap-subjects');}} className = "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg py-2 px-4 mt-2 transition-colors cursor-pointer">Reset</button>
        </section> 
    );
}