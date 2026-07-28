import {useState} from 'react';
import { SubjectList } from './subjectList';

export function SubjectForm(props){
    const [errorMessage, setErrorMessage] = useState('');

    const inputStyles = "bg-slate-800/80 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-all duration-200 md:text-xl";
    const labelStyles = "flex flex-col gap-1 text-sm text-slate-300 md:text-2xl";

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
        <section id="subject-form" className = "bg-slate-900/60 border border-slate-700/50 rounded-2xl p-5 w-full max-w-sm mx-auto md:max-w-xl md:p-8 md:ml-8 backdrop-blur-md shadow-xl shadow-slate-950/40">
            <form action = {handleFormSubject} className = "flex flex-col gap-4">
                <label className = {labelStyles}>
                    Enter Subject Name/Code : <input type = "text" placeholder = "e.g. Calculus / 23MAT203" name = "subjectCode" required className = {inputStyles}/>
                </label>
                
                <label className = {labelStyles}>
                    Enter Subject Credits : <input type = "number" step="0.1" placeholder = "e.g. 3" name = "subjectCredit" required className = {inputStyles} />
                </label>
                <label className = {labelStyles}>
                    Choose Subject Type :
                    <div className = "flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-1">
                        Integrated Course<input type = "radio" name = "subjectType" value = "I" required className = "accent-yellow-300 w-5 h-5 cursor-pointer"/>
                        Theory Course<input type = "radio" name = "subjectType" value = "T" className = "accent-yellow-300 w-5 h-5 cursor-pointer"/>
                    </div>
                </label>
                <label className = {labelStyles} >
                    Enter Subject's INTERNAL MARKS : <input type="number" placeholder = "e.g. 35" name="subjectInternalMark" required className = {inputStyles} />
                </label>
                <button type = "submit" className = "mt-2 rounded-xl border-amber-400/40 bg-gradient-to-br from-amber-700 via-amber-600 to-yellow-700 px-6 py-3 text-sm md:text-base font-bold text-amber-50 shadow-lg shadow-amber-900/40 transition-all duration-300 hover:scale-[1.02] hover:from-amber-600 hover:via-amber-500 hover:to-yellow-600 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/25 active:scale-95 cursor-pointer"> + Add Subject</button>
            </form>
        {(!errorMessage) ? '' : <p className="mt-4 text-center text-red-400 text-base md:text-lg font-medium" >{errorMessage}</p>}
        <button onClick = {() => {props.setSubjectsList([]);localStorage.removeItem('grademap-subjects');}} className = "mt-4 w-full md:w-auto rounded-xl bg-red-500/90 hover:bg-red-500 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer">Reset</button>
        </section> 
    );
}