import { generateCgpa } from "../logic/semester_gpa";

export function CgpaForm(props){

    function handleCumulativeInputs(formData){
        const currentCGPA = Number(formData.get('Cumulativegpa'));
        const totalCredits = Number(formData.get('totalCredits'));
        
        const newCGPA = generateCgpa(currentCGPA,totalCredits,props.estimatedSGPA);
        props.setEstimatedCGPA(newCGPA);
        setTimeout(() => {
            document.querySelector('#cgpa-block')?.scrollIntoView({
                behavior: "smooth"
            });
        },100);
    }
    return (
        <section id = "cgpa-form" className = "mt-8 rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 md:p-8 shadow-xl shadow-slate-950/40">
            <form action = {handleCumulativeInputs} className = "space-y-6">
                <label className="block text-sm font-semibold uppercase tracking-wider text-slate-400 md:text-base">
                    Enter Current CGPA <input type="number" step = "0.01" placeholder = "e.g. 9.77" name = "Cumulativegpa" required className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20" />
                </label>
                <label className="block text-sm font-semibold uppercase tracking-wider text-slate-400 md:text-base">
                    Enter total Credits: <input type="number" placeholder = "e.g. 69" name = "totalCredits" required className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"/>
                </label>
                <button type="submit" className="w-full rounded-xl border-amber-400/40 bg-gradient-to-br from-amber-700 via-amber-600 to-yellow-700 py-3 font-bold text-amber-50 shadow-lg shadow-amber-900/40 transition-all duration-300 hover:scale-[1.02] hover:from-amber-600 hover:via-amber-500 hover:to-yellow-600 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/25 active:scale-95 cursor-pointer">Submit</button>
            </form>
        </section>
    );
}