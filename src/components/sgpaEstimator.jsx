import { generateSgpa } from "../logic/semester_gpa"
export function SgpaEstimator(props){
    return (
        <div className="mt-10 rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800/90 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl ring-1 ring-slate-700/30 text-center md:mt-14 md:p-10" id="extraSubject-form">

            <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 md:text-base">
                    Semester Credit Points Obtained
                </p>
                <p className="mt-2 text-3xl font-extrabold text-slate-100 md:text-5xl">
                    {props.estimatedSGPA.semesterCreditPoints}
                </p>
            </div>

            <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>

            <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 md:text-base">
                    Semester Credits
                </p>
                <p className="mt-2 text-3xl font-extrabold text-slate-100 md:text-5xl">
                    {props.estimatedSGPA.semesterCredits}
                </p>
            </div>

            <div className="my-8 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>

            <div>
                <p className="text-base font-bold uppercase tracking-[0.25em] text-amber-300 md:text-lg">
                    SGPA
                </p>

                <p className="mt-4 bg-gradient-to-r from-amber-300 via-yellow-100 to-blue-400 bg-clip-text text-6xl font-black tracking-tight text-transparent drop-shadow-lg md:text-8xl">
                    {props.estimatedSGPA.sgpa}
                </p>
            </div>

        </div>
    );
}