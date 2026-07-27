export function ExtraSubjectsForm(props){

    const labelStyle = "flex flex-col gap-2 text-base font-semibold text-slate-200 md:text-lg";
    function handleExtraInputs(formData){
        const newSubject = formData.get('extraSubjectCode');
        const newCredit = formData.get('extraSubjectCredit');
        const newGrade = formData.get('extraGrade');
        const newSubmission = {
            subjectCode : newSubject,
            subjectCredit : Number(newCredit),
            desiredGrade : newGrade 
        };
        props.setExtraSubjectsList((prevExtraSubjectsList)=>{
            return [...prevExtraSubjectsList, newSubmission];
        });
    }

    return (
        <section className = "mt-8 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/90 p-5 shadow-xl shadow-black/30 backdrop-blur-xl md:mt-10 md:p-8">
            <form action = {handleExtraInputs} className = "flex flex-col gap-5 md:grid md:grid-cols-4 md:items-end md:gap-6">
                <label className = {labelStyle}>
                    Enter Subject Name: <input type="text" placeholder = "e.g. Calculus / 23MAT203" name = "extraSubjectCode" required className = "w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-base font-semibold text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 md:px-5 md:py-3.5 md:text-lg"/>
                </label>
                <label className = {labelStyle}>
                    Enter Subject Credits: <input type="number" placeholder = "e.g. 3" step="0.1" name = "extraSubjectCredit" required className = "w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-base font-semibold text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 md:px-5 md:py-3.5 md:text-lg"/>
                </label>
                <label className = {labelStyle}>
                    Enter Subject's Desired Grade: <select name="extraGrade" defaultValue="S" className = "w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-base font-semibold text-slate-100 outline-none transition-all duration-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 md:px-5 md:py-3.5 md:text-lg">
                        <option value = "S">S</option>
                        <option value = "A+">A+</option>
                        <option value = "A">A</option>
                        <option value = "B+">B+</option>
                        <option value = "B">B</option>
                        <option value = "C">C</option>
                    </select>
                </label>
                <button type="submit" className = "w-full rounded-xl border border-blue-500/40 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-5 py-3 text-base font-bold text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:border-amber-300 hover:from-blue-500 hover:via-blue-400 hover:to-blue-300 hover:shadow-xl hover:shadow-amber-500/20 active:scale-[0.98] md:h-[56px] md:text-lg">Submit</button>
            </form>
        </section>
    );
}